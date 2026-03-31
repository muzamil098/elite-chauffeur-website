import { Link } from "react-router";
import { ArrowRight, Star, Shield, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { SEOHead } from "../components/SEOHead";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const services = [
  {
    title: "Airport Transfers",
    description: "Reliable, punctual airport pickup and drop-off services with flight tracking.",
    image: "https://images.unsplash.com/photo-1620809512123-b73fc0d9552b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDM3MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/airport-transfers",
  },
  {
    title: "Corporate Chauffeur",
    description: "Professional chauffeur services for business meetings, events, and daily commutes.",
    image: "https://images.unsplash.com/photo-1706117759117-11c1ac198190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGNhcnxlbnwxfHx8fDE3NzQwMjEzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/corporate-chauffeur",
  },
  {
    title: "Events & Weddings",
    description: "Make your special day perfect with our luxury wedding and event transportation.",
    image: "https://images.unsplash.com/photo-1764269712999-e32acce1f277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbGltb3VzaW5lJTIwd2hpdGV8ZW58MXx8fHwxNzc0MDM3MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/events-weddings",
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Corp",
    rating: 5,
    text: "Exceptional service! The driver was professional, the car was immaculate, and the entire experience was seamless. Highly recommend for corporate travel.",
    date: "March 2026",
  },
  {
    name: "Michael Chen",
    role: "Business Traveler",
    rating: 5,
    text: "I use EliteChauffeur for all my airport transfers. They're always on time, the vehicles are luxurious, and the drivers are courteous. Simply the best!",
    date: "February 2026",
  },
  {
    name: "Emma Williams",
    role: "Wedding Client",
    rating: 5,
    text: "Our wedding day was perfect, and EliteChauffeur played a big part in that. The vintage Rolls-Royce was stunning and the service was impeccable.",
    date: "January 2026",
  },
];

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "All our drivers are fully licensed, background-checked, and insured for your safety.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service with real-time tracking and flight monitoring.",
  },
  {
    icon: Star,
    title: "Premium Fleet",
    description: "Latest models from Mercedes, BMW, Rolls-Royce, and more luxury brands.",
  },
  {
    icon: CheckCircle,
    title: "Professional Drivers",
    description: "Experienced, courteous chauffeurs with excellent local knowledge.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EliteChauffeur",
  "description": "Premium chauffeur and limousine services for corporate, airport transfers, and special events",
  "url": "https://elitechauffeur.com",
  "telephone": "+442012345678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Park Lane",
    "addressLocality": "London",
    "postalCode": "W1K 7AA",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5074",
    "longitude": "-0.1278"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "£££",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "247"
  }
};

export function Home() {
  return (
    <>
      <SEOHead
        title="Premium Chauffeur Service London"
        description="Luxury chauffeur services in London. Professional airport transfers, corporate travel, and event transportation. Book now for reliable, premium service 24/7."
        keywords="chauffeur service London, airport transfer, corporate chauffeur, luxury car hire, wedding car, executive travel"
        canonical="https://elitechauffeur.com"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[500px] h-[600px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1767285610734-f0858d5248fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMGNoYXVmZmV1ciUyMGNhcnxlbnwxfHx8fDE3NzQwMzcwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury chauffeur service"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Premium Chauffeur Service
            <br />
            <span className="text-yellow-500">Luxury, Reliability, Excellence</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-200 px-4">
            Experience first-class transportation with professional drivers, luxury vehicles, and
            unmatched service available 24/7 across London and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
              asChild
            >
              <a href="#book">Book Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 hover:text-white backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
              asChild
            >
              <a href="tel:+442012345678">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored chauffeur services to meet every need, from airport transfers to special events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="link" className="text-yellow-600 p-0" asChild>
                    <Link to={service.link}>
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose EliteChauffeur?
              </h2>
              <p className="text-gray-300 mb-6">
                With over 15 years of experience, we've established ourselves as London's premier
                chauffeur service. Our commitment to excellence, punctuality, and customer
                satisfaction sets us apart.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Professional Chauffeurs</strong>
                    <span className="text-gray-300">
                      All drivers undergo rigorous training and background checks
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Luxury Fleet</strong>
                    <span className="text-gray-300">
                      Latest Mercedes S-Class, BMW 7 Series, Range Rover, and more
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Competitive Pricing</strong>
                    <span className="text-gray-300">
                      Transparent pricing with no hidden fees or surprises
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">24/7 Support</strong>
                    <span className="text-gray-300">
                      Round-the-clock customer service and booking assistance
                    </span>
                  </div>
                </li>
              </ul>
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white mt-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1735172149013-46fa702b853e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGF1ZmZldXIlMjBkcml2ZXJ8ZW58MXx8fHwxNzczOTQ0NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional chauffeur"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="text-lg font-semibold ml-2">5.0</span>
            </div>
            <p className="text-gray-600">Based on 247+ reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                    <div className="text-sm text-gray-500 mt-1">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <p className="text-lg mb-8 text-yellow-50">
            Experience premium chauffeur service today. Simple booking, transparent pricing, and
            exceptional service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-yellow-700 text-lg px-8"
              asChild
            >
              <a href="#book">Book Online Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 hover:text-white text-lg px-8"
              asChild
            >
              <a href="tel:+442012345678">
                <Phone className="w-5 h-5 mr-2" />
                +44 20 1234 5678
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}