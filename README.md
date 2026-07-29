# TechStore

TechStore is a full-featured e-commerce web app for a technology retailer, built by Soumen Biswas. It includes product browsing, search and filtering, a shopping cart, user accounts with email and Google sign-in, and company pages (Home, Products, Services, About, Contact).

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Authentication setup

This project uses Supabase for authentication (email/password and Google OAuth). To enable Google sign-in:

1. Create a Supabase project at https://supabase.com
2. Add your Supabase project ID and anon key in `src/utils/supabase/info.tsx`
3. In the Supabase dashboard, go to Authentication > Providers > Google, and follow https://supabase.com/docs/guides/auth/social-login/auth-google to add your Google OAuth Client ID and Secret
4. Add your app's URL to the allowed redirect URLs in Supabase
