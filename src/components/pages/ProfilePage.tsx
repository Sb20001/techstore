import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface ProfilePageProps {
  email: string;
  name?: string;
  onLogout: () => void;
}

export function ProfilePage({ email, name, onLogout }: ProfilePageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="max-w-md w-full p-8">
        <Badge className="mb-4">Profile</Badge>
        <h2 className="text-2xl font-bold mb-2">Account Details</h2>
        <div className="mb-4">
          <div className="text-gray-700 mb-2">
            <span className="font-semibold">Email:</span> {email}
          </div>
          {name && (
            <div className="text-gray-700 mb-2">
              <span className="font-semibold">Name:</span> {name}
            </div>
          )}
        </div>
        <Button variant="outline" onClick={onLogout} className="w-full">
          Logout
        </Button>
      </Card>
    </div>
  );
}
