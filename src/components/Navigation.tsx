import { Button } from "./ui/button";
import { Home, Package, Briefcase, Info, Mail, LogIn, User } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLoginClick: () => void;
  isLoggedIn: boolean;
  userEmail?: string;
  onLogout: () => void;
}

export function Navigation({
  currentPage,
  onNavigate,
  onLoginClick,
  isLoggedIn,
  userEmail,
  onLogout,
}: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "products", label: "Our Products", icon: Package },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "about", label: "About", icon: Info },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={currentPage === item.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onNavigate(item.id)}
            className="gap-2"
          >
            <Icon className="w-4 h-4" />
            <span className="hidden lg:inline">{item.label}</span>
            <span className="lg:hidden">{item.label.split(" ")[0]}</span>
          </Button>
        );
      })}
      {/* Profile nav for logged-in users */}
      {isLoggedIn && (
        <Button
          key="profile"
          variant={currentPage === "profile" ? "default" : "ghost"}
          size="sm"
          onClick={() => onNavigate("profile")}
          className="gap-2"
        >
          <User className="w-4 h-4" />
          <span className="hidden lg:inline">Profile</span>
          <span className="lg:hidden">Profile</span>
        </Button>
      )}
      
      {isLoggedIn ? (
        <div className="flex items-center gap-2 ml-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs text-gray-600">Logged in as</span>
            <span className="text-sm font-medium">{userEmail}</span>
          </div>
          <Button variant="outline" size="sm" onClick={onLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={onLoginClick}
          className="gap-2 ml-4"
        >
          <LogIn className="w-4 h-4" />
          Login
        </Button>
      )}
    </nav>
  );
}
