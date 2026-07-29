import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Wrench,
  RefreshCw,
  ShieldCheck,
  Headphones,
  Package,
  CreditCard,
  Truck,
  Clock,
  CheckCircle,
} from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Expert technical assistance for all your products. Our team is ready to help you troubleshoot and resolve any issues.",
      features: ["Remote assistance", "On-site support", "Product installation", "Configuration help"],
    },
    {
      icon: RefreshCw,
      title: "Easy Returns & Exchange",
      description: "Not satisfied? Return or exchange within 30 days with our hassle-free return policy.",
      features: ["30-day returns", "Free return shipping", "Quick refunds", "Easy exchange process"],
    },
    {
      icon: ShieldCheck,
      title: "Extended Warranty",
      description: "Protect your investment with our comprehensive extended warranty plans for peace of mind.",
      features: ["Up to 3 years coverage", "Accidental damage protection", "Fast claim process", "Replacement guarantee"],
    },
    {
      icon: Headphones,
      title: "24/7 Customer Service",
      description: "Round-the-clock support via phone, email, and live chat. We're always here when you need us.",
      features: ["Live chat support", "Email support", "Phone support", "Multi-language support"],
    },
    {
      icon: Package,
      title: "Product Setup & Installation",
      description: "Professional installation and setup services to get your products up and running quickly.",
      features: ["Expert installation", "Product training", "Optimization tips", "Follow-up support"],
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Multiple payment methods and flexible installment plans to make shopping easier.",
      features: ["Credit/Debit cards", "PayPal", "Installment plans", "Buy now, pay later"],
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Express shipping available",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Quick and efficient service",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "100% satisfaction guaranteed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl mb-6">
            Services Designed for Your Convenience
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We go beyond just selling products. Our comprehensive services ensure you get the most out of your purchase.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional value and service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Need Help Choosing a Service?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help you find the perfect service package for your needs
          </p>
          <Button size="lg" variant="secondary">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
