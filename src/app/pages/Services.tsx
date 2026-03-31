import { Link } from "react-router";
import { Plane, Briefcase, Heart, Clock, Car, ArrowRight, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { SEOHead } from "../components/SEOHead";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Professional airport chauffeur service with flight tracking and complimentary waiting time. Service to all London airports including Heathrow, Gatwick, Stansted, and Luton.",
    features: ["Flight tracking", "Meet & greet", "60-min free waiting", "All airports covered"],
    link: "/services/airport-transfers",
    image: "https://images.unsplash.com/photo-1620809512123-b73fc0d9552b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDM3MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Briefcase,
    title: "Corporate Chauffeur",
    description:
      "Executive transportation for business meetings, client entertainment, and daily commutes. Dedicated account management and flexible corporate packages available.",
    features: [
      "Professional chauffeurs",
      "Corporate accounts",
      "Priority booking",
      "Monthly invoicing",
    ],
    link: "/services/corporate-chauffeur",
    image: "https://images.unsplash.com/photo-1706117759117-11c1ac198190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGNhcnxlbnwxfHx8fDE3NzQwMjEzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Heart,
    title: "Events & Weddings",
    description:
      "Luxury wedding cars and special event transportation. Choose from vintage Rolls-Royce, classic Bentley, or modern luxury vehicles for your perfect day.",
    features: [
      "Vintage & modern cars",
      "Wedding packages",
      "Decorations included",
      "Professional service",
    ],
    link: "/services/events-weddings",
    image: "https://images.unsplash.com/photo-1764269712999-e32acce1f277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbGltb3VzaW5lJTIwd2hpdGV8ZW58MXx8fHwxNzc0MDM3MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Clock,
    title: "Hourly Hire",
    description:
      "Flexible hourly chauffeur service for shopping trips, multiple appointments, or touring London. Available with a minimum booking of 3 hours.",
    features: ["Minimum 3 hours", "Flexible itinerary", "Wait time included", "All-inclusive pricing"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1680446670454-8cd71eeef684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMHMlMjBjbGFzcyUyMGludGVyaW9yfGVufDF8fHx8MTc3NDAzNzA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Car,
    title: "Long Distance Travel",
    description:
      "Comfortable long-distance chauffeur service across the UK and Europe. Perfect for business trips, family vacations, or special journeys.",
    features: ["UK & Europe coverage", "Experienced drivers", "Comfort breaks", "Competitive rates"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1767285610734-f0858d5248fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMGNoYXVmZmV1ciUyMGNhcnxlbnwxfHx8fDE3NzQwMzcwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": services.slice(0, 3).map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Service",
      "name": service.title,
      "description": service.description,
    },
  })),
};

export function Services() {
  return (
    <>
      <SEOHead
        title="Our Chauffeur Services - Airport, Corporate, Weddings & More"
        description="Comprehensive chauffeur services including airport transfers, corporate travel, wedding cars, hourly hire, and long-distance journeys. Professional service 24/7."
        keywords="chauffeur services London, airport transfer, corporate chauffeur, wedding car, hourly hire, executive travel"
        canonical="https://elitechauffeur.com/services"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1772032057765-3970ebba6e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHRyYXZlbCUyMExvbmRvbiUyMGNpdHl8ZW58MXx8fHwxNzc0MDM5MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Premium chauffeur services"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-200">
              From airport transfers to corporate travel and special events, we provide premium
              chauffeur services tailored to your needs. Experience luxury, reliability, and
              professionalism with every journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-48 md:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:col-span-3 p-6 flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    <ul className="space-y-1 mb-4 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="text-yellow-600 p-0 w-fit" asChild>
                      <Link to={service.link}>
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose EliteChauffeur?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine luxury, professionalism, and reliability to deliver an exceptional
              chauffeur experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="font-semibold mb-1">Years Experience</div>
              <div className="text-sm text-gray-600">
                Over a decade serving London's elite
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="font-semibold mb-1">Luxury Vehicles</div>
              <div className="text-sm text-gray-600">
                Premium fleet maintained to perfection
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="font-semibold mb-1">Availability</div>
              <div className="text-sm text-gray-600">Round-the-clock service and support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">5.0</div>
              <div className="font-semibold mb-1">Customer Rating</div>
              <div className="text-sm text-gray-600">Based on 247+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-gray-300 mb-8">
            Book your chauffeur service today and discover why we're London's premier choice for
            executive transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-sm w-full sm:w-auto" asChild>
              <a href="#book">Book Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 hover:text-white w-full sm:w-auto"
              asChild
            >
              <a href="tel:+442012345678">
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}