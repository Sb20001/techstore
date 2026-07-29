import { useState, useEffect } from "react";
import { Product } from "./components/ProductCard";
import { Navigation } from "./components/Navigation";
import { LoginModal } from "./components/LoginModal";
import { Cart, CartItem } from "./components/Cart";
import { HomePage } from "./components/pages/HomePage";
import { ProductsPage } from "./components/pages/ProductsPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { SearchBar } from "./components/SearchBar";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ShoppingCart, Store } from "lucide-react";
import { toast } from "sonner";
import { getSupabaseClient } from "./utils/supabase/client";
import { ProfilePage } from "./components/pages/ProfilePage";

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "MacBook Pro 16-inch",
    price: 2499.99,
    originalPrice: 2799.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    category: "Laptops",
    rating: 4.8,
    reviewCount: 324,
    description:
      "Powerful laptop with M2 Pro chip, 16GB RAM, and 512GB SSD. Perfect for professional work and creative tasks.",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Sony WH-1000XM4 Headphones",
    price: 279.99,
    originalPrice: 349.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    category: "Audio",
    rating: 4.7,
    reviewCount: 1542,
    description:
      "Industry-leading noise canceling wireless headphones with 30-hour battery life and premium sound quality.",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "iPhone 15 Pro",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    category: "Smartphones",
    rating: 4.6,
    reviewCount: 892,
    description:
      "Latest iPhone with titanium design, advanced camera system, and A17 Pro chip for exceptional performance.",
    inStock: true,
  },
  {
    id: "4",
    name: "Canon EOS R5 Camera",
    price: 3899.99,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",
    category: "Cameras",
    rating: 4.9,
    reviewCount: 267,
    description:
      "Professional mirrorless camera with 45MP full-frame sensor, 8K video recording, and advanced autofocus system.",
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "LG 27-inch Gaming Monitor",
    price: 399.99,
    originalPrice: 499.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
    category: "Monitors",
    rating: 4.5,
    reviewCount: 456,
    description:
      "High-performance gaming monitor with 144Hz refresh rate, 1ms response time, and HDR10 support.",
    inStock: true,
  },
  {
    id: "6",
    name: "Herman Miller Aeron Chair",
    price: 1395.99,
    image:
      "https://images.unsplash.com/photo-1505797509582-3f403d0e0d01?w=600",
    category: "Furniture",
    rating: 4.8,
    reviewCount: 738,
    description:
      "Ergonomic office chair with breathable mesh design, advanced lumbar support, and 12-year warranty.",
    inStock: true,
  },
  {
    id: "7",
    name: "iPad Pro 12.9-inch",
    price: 1099.99,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
    category: "Tablets",
    rating: 4.7,
    reviewCount: 623,
    description:
      "Powerful tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support for creative work.",
    inStock: true,
  },
  {
    id: "8",
    name: "AirPods Pro 2nd Gen",
    price: 249.99,
    originalPrice: 279.99,
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600",
    category: "Audio",
    rating: 4.6,
    reviewCount: 1234,
    description:
      "Premium wireless earbuds with active noise cancellation, spatial audio, and adaptive transparency.",
    inStock: true,
  },
  {
    id: "9",
    name: "Dell XPS 15",
    price: 1799.99,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600",
    category: "Laptops",
    rating: 4.7,
    reviewCount: 456,
    description:
      "Premium laptop with Intel i7, 16GB RAM, NVIDIA RTX graphics, and stunning 4K OLED display.",
    inStock: true,
  },
  {
    id: "10",
    name: "Samsung Galaxy S24 Ultra",
    price: 1199.99,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
    category: "Smartphones",
    rating: 4.8,
    reviewCount: 789,
    description:
      "Flagship Android phone with S Pen, 200MP camera, and incredible battery life.",
    inStock: true,
    featured: true,
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      const supabase = getSupabaseClient();
      const { data } = await supabase.auth.getSession();
      if (data.session?.user?.email) {
        setIsLoggedIn(true);
        setUserEmail(data.session.user.email);
        setUserName(data.session.user.user_metadata?.name || "");
        setAccessToken(data.session.access_token || "");
      }
    };
    checkSession();
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`Added ${product.name} to cart!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success("Item removed from cart");
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared");
  };

  const handleLoginSuccess = (email: string, token: string, name?: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setUserName(name || "");
    setAccessToken(token);
  };

  const handleLogout = async () => {
    const supabase = getSupabaseClient();
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUserEmail("");
    setUserName("");
    setAccessToken("");
    toast.success("Logged out successfully");
  };

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigateToProducts={() => setCurrentPage("products")} />;
      case "products":
        return <ProductsPage products={mockProducts} onAddToCart={handleAddToCart} />;
      case "services":
        return <ServicesPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "profile":
        return (
          <ProfilePage email={userEmail} name={userName} onLogout={handleLogout} />
        );
      default:
        return <HomePage onNavigateToProducts={() => setCurrentPage("products")} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Store className="w-8 h-8 text-blue-600" />
              <h1
                className="text-2xl text-blue-600 cursor-pointer"
                onClick={() => setCurrentPage("home")}
              >
                TechStore
              </h1>
            </div>

            {/* Navigation - Desktop */}
            <div className="hidden lg:flex flex-1 justify-center">
              <Navigation
                currentPage={currentPage}
                onNavigate={setCurrentPage}
                onLoginClick={() => setIsLoginOpen(true)}
                isLoggedIn={isLoggedIn}
                userEmail={userEmail}
                onLogout={handleLogout}
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search - Show only on products page */}
              {currentPage === "products" && (
                <div className="hidden md:block w-64">
                  <SearchBar searchQuery="" onSearchChange={() => {}} />
                </div>
              )}

              {/* Cart Button */}
              <Button
                variant="outline"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalCartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalCartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Navigation - Mobile */}
          <div className="lg:hidden pb-3 overflow-x-auto">
            <Navigation
              currentPage={currentPage}
              onNavigate={setCurrentPage}
              onLoginClick={() => setIsLoginOpen(true)}
              isLoggedIn={isLoggedIn}
              userEmail={userEmail}
              onLogout={handleLogout}
            />
          </div>
        </div>
      </header>

      {/* Page Content */}
      {renderPage()}

      {/* Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
