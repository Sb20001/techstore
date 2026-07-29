import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Target, Eye, Award, Users, Heart, Zap } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring satisfaction and building lasting relationships.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We're committed to offering only the highest quality products that meet rigorous standards.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly evolve and adapt to bring you the latest technology and innovative solutions.",
    },
    {
      icon: Users,
      title: "Team Spirit",
      description: "Our dedicated team works together to provide exceptional service and support.",
    },
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", description: "Started with a vision to revolutionize tech retail" },
    { year: "2017", title: "10,000 Customers", description: "Reached our first major milestone" },
    { year: "2019", title: "National Expansion", description: "Opened offices in 10 major cities" },
    { year: "2021", title: "500+ Products", description: "Expanded our product catalog significantly" },
    { year: "2023", title: "Award Winner", description: "Best E-commerce Platform of the Year" },
    { year: "2025", title: "50,000+ Customers", description: "Continuing to grow and serve more customers" },
  ];

  const team = [
    { name: "Soumen Biswas", role: "Creator & Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">About Us</Badge>
            <h1 className="text-4xl md:text-5xl mb-6">
              Bringing Technology Closer to You
            </h1>
            <p className="text-xl text-blue-100">
              We're passionate about technology and dedicated to providing the best products and services to tech enthusiasts, professionals, and everyday users.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To make cutting-edge technology accessible to everyone by offering premium products at competitive prices, backed by exceptional customer service and expert support.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To become the most trusted technology retailer globally, known for our commitment to quality, innovation, and customer satisfaction in everything we do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every interaction we have
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl mb-4">Company Milestones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A decade of growth, innovation, and customer success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 relative">
                <div className="absolute -top-4 left-6">
                  <Badge className="text-lg px-3 py-1">{milestone.year}</Badge>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Creator</Badge>
            <h2 className="text-3xl mb-4">Meet the Creator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The developer behind TechStore, dedicated to building a great shopping experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl mb-2">50K+</p>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl mb-2">500+</p>
              <p className="text-blue-100">Products</p>
            </div>
            <div>
              <p className="text-5xl mb-2">10</p>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl mb-2">4.8★</p>
              <p className="text-blue-100">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
