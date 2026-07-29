import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2";

const app = new Hono();

// Middleware
app.use("*", cors());
app.use("*", logger(console.log));

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

// Health check
app.get("/make-server-a0407d22/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Sign up endpoint
app.post("/make-server-a0407d22/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();

    if (!email || !password) {
      return c.json({ success: false, error: "Email and password are required" }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name: name || "" },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true,
    });

    if (error) {
      console.log(`Error creating user during signup: ${error.message}`);
      return c.json({ success: false, error: error.message }, 400);
    }

    return c.json({ success: true, user: data.user });
  } catch (error: any) {
    console.log(`Unexpected error during signup: ${error.message}`);
    return c.json({ success: false, error: "An unexpected error occurred" }, 500);
  }
});

Deno.serve(app.fetch);
