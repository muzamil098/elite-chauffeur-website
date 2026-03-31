import { Link } from "react-router";
import { Plane, Clock, Shield, CheckCircle, Phone } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SEOHead } from "../../components/SEOHead";

const airports = [
  "Heathrow Airport (LHR)",
  "Gatwick Airport (LGW)",
  "London City Airport (LCY)",
  "Stansted Airport (STN)",
  "Luton Airport (LTN)",
  "Southend Airport (SEN)",
];

const features = [
  {
    icon: Plane,
    title: "Flight Tracking",
    description: "Real-time flight monitoring to ensure timely pickup, even with delays or early arrivals.",
  },
  {
    icon: Clock,
    title: "Meet & Greet",
    description: "Professional chauffeur waiting at arrivals with name board for seamless pickup.",
  },
  {
    icon: Shield,
    title: "60-Min Free Waiting",
    description: "Complimentary waiting time to allow for customs, baggage collection, and unforeseen delays.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Airport Transfer Service London",
  "description": "Professional airport chauffeur service to all major London airports including Heathrow, Gatwick, Stansted, Luton, and London City Airport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "EliteChauffeur",
    "telephone": "+442012345678"
  },
  "areaServed": {
    "@type": "City",
    "name": "London"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "availabilityStarts": "2024-01-01T00:00:00Z"
  }
};

export function AirportTransfers() {
  return (
    <>
      <SEOHead
        title="Airport Transfer Service London - Heathrow, Gatwick & More"
        description="Professional airport chauffeur service to all London airports. Flight tracking, meet & greet, 60-min free waiting. Book reliable airport transfers now."
        keywords="airport transfer London, Heathrow transfer, Gatwick chauffeur, airport pickup, executive airport service"
        canonical="https://elitechauffeur.com/services/airport-transfers"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620809512123-b73fc0d9552b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDM3MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Airport terminal"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Airport Transfer Service
          </h1>
          <p className="text-lg text-gray-200">
            Stress-free airport transportation to all major London airports with flight tracking and
            professional meet & greet service.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Professional Airport Chauffeur Service
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Our airport transfer service offers the perfect blend of luxury, reliability, and
                  convenience. Whether you're traveling for business or pleasure, our professional
                  chauffeurs ensure a smooth journey to or from any London airport.
                </p>
                <p>
                  We understand the stress of air travel, which is why we offer comprehensive
                  flight tracking to monitor your arrival time. Even if your flight is delayed or
                  arrives early, your chauffeur will be there waiting for you with a personalized
                  meet and greet service.
                </p>
                <p>
                  With 60 minutes of complimentary waiting time, you'll never feel rushed through
                  customs or baggage collection. Our drivers are experienced, punctual, and
                  committed to providing a first-class experience every time.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time flight tracking and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional meet and greet at arrivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>60 minutes free waiting time (from flight landing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Assistance with luggage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complimentary refreshments and Wi-Fi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Child seats available on request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All taxes, tolls, and parking included</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Book Online or Call</h4>
                      <p className="text-gray-600">
                        Provide your flight details, pickup location, and passenger information.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">We Track Your Flight</h4>
                      <p className="text-gray-600">
                        Our system monitors your flight in real-time, adjusting pickup time as needed.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Meet Your Chauffeur</h4>
                      <p className="text-gray-600">
                        Your driver will be waiting at arrivals with a name board.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Enjoy Your Journey</h4>
                      <p className="text-gray-600">
                        Relax in luxury as we take you to your destination safely and comfortably.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Airports We Serve</h3>
                  <ul className="space-y-2">
                    {airports.map((airport, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>{airport}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Our team is available 24/7 to assist with bookings and inquiries.
                  </p>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white shadow-sm" asChild>
                    <a href="tel:+442012345678">
                      <Phone className="w-4 h-4 mr-2" />
                      Call +44 20 1234 5678
                    </a>
                  </Button>
                  <Button className="w-full mt-2" variant="outline" asChild>
                    <a href="#book">Book Online</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">View Our Fleet</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Choose from our range of luxury vehicles including Mercedes S-Class, BMW 7
                    Series, and executive vans.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/fleet">View Fleet</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Airport Transfer Today</h2>
          <p className="text-gray-300 mb-8">
            Experience stress-free airport transportation with our professional chauffeur service.
          </p>
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white" asChild>
            <a href="#book">Book Now</a>
          </Button>
        </div>
      </section>
    </>
  );
}