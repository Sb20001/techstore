import { Hero } from "../Hero";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  Zap, 
  Shield, 
  Truck, 
  HeadphonesIcon, 
  Award, 
  TrendingUp,
  Star,
  ArrowRight
} from "lucide-react";

interface HomePageProps {
  onNavigateToProducts: () => void;
}

export function HomePage({ onNavigateToProducts }: HomePageProps) {
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your orders delivered within 2-3 business days",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment with SSL encryption",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $500",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer service support",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "Only authentic and certified products",
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Competitive pricing with regular deals",
    },
  ];

  const categories = [
    { name: "Laptops", count: "50+ Products", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
    { name: "Smartphones", count: "80+ Products", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { name: "Headphones", count: "30+ Products", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { name: "Cameras", count: "40+ Products", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400" },
  ];

  return (
    <div>
      <Hero onShopNowClick={onNavigateToProducts} />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl mb-4">Amazing Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the best shopping experience with premium products and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Shop by Category</Badge>
            <h2 className="text-3xl mb-4">Popular Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our wide range of product categories
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={onNavigateToProducts}
              >
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl mb-1">{category.name}</h3>
                    <p className="text-sm text-white/90">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={onNavigateToProducts}>
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Tech Enthusiast",
                text: "Amazing quality products and fast delivery! I've been shopping here for months and never disappointed.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Professional Photographer",
                text: "The camera equipment I bought exceeded my expectations. Great customer service too!",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Software Developer",
                text: "Best place to buy tech products. Competitive prices and authentic products guaranteed.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
