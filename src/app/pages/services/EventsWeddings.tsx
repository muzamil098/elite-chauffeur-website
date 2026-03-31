import { Link } from "react-router";
import { Heart, Calendar, Gift, CheckCircle, Phone } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SEOHead } from "../../components/SEOHead";

const occasions = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Make your special day perfect with our luxury wedding car service.",
  },
  {
    icon: Calendar,
    title: "Special Events",
    description: "Proms, anniversaries, birthdays, and milestone celebrations.",
  },
  {
    icon: Gift,
    title: "Concerts & Theatre",
    description: "Arrive in style at concerts, shows, and cultural events.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Car & Event Transportation Service",
  "description": "Luxury wedding cars and event transportation. Rolls-Royce, vintage cars, and modern luxury vehicles for your special day.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "EliteChauffeur"
  }
};

export function EventsWeddings() {
  return (
    <>
      <SEOHead
        title="Wedding Car Hire & Event Transportation London"
        description="Luxury wedding car hire and special event transportation. Rolls Royce, vintage cars, and modern luxury vehicles. Make your day unforgettable."
        keywords="wedding car hire London, luxury wedding transport, Rolls Royce wedding, event car service, prom car hire"
        canonical="https://elitechauffeur.com/services/events-weddings"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1764269712999-e32acce1f277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbGltb3VzaW5lJTIwd2hpdGV8ZW58MXx8fHwxNzc0MDM3MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wedding limousine"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Events & Weddings
          </h1>
          <p className="text-lg text-gray-200">
            Create unforgettable memories with our luxury wedding cars and special event
            transportation service.
          </p>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <occasion.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">{occasion.title}</h3>
                <p className="text-sm text-gray-600">{occasion.description}</p>
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
                Luxury Wedding & Event Transportation
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Your wedding day or special event deserves the very best. EliteChauffeur offers
                  a stunning selection of luxury and vintage vehicles to make your occasion truly
                  memorable. From classic Rolls-Royces to modern luxury sedans, we have the perfect
                  vehicle for your celebration.
                </p>
                <p>
                  Our experienced chauffeurs understand the importance of your special day. We work
                  closely with you to ensure every detail is perfect, from the ribbon decoration to
                  the timing of each journey. With our meticulous attention to detail and
                  professional service, you can relax and enjoy every moment.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Wedding Car Packages</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-600 pl-4">
                    <h4 className="font-semibold mb-2">Classic Wedding Package</h4>
                    <p className="text-gray-600 mb-2">
                      Perfect for traditional weddings featuring our vintage Rolls-Royce or Bentley.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Bride's car from home to ceremony</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Newlyweds from ceremony to reception</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Ribbons & decorations included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Complimentary champagne</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-4">
                    <h4 className="font-semibold mb-2">Modern Luxury Package</h4>
                    <p className="text-gray-600 mb-2">
                      Contemporary elegance with our latest Mercedes S-Class or BMW 7 Series.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Full day hire available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Multiple journeys included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional uniformed chauffeur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Red carpet service</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-4">
                    <h4 className="font-semibold mb-2">Bridal Party Package</h4>
                    <p className="text-gray-600 mb-2">
                      Multiple vehicles for bridesmaids, groomsmen, and family members.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Coordinated fleet of vehicles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Special group rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Coordinated timing & logistics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Experienced wedding coordinators</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Other Special Events</h3>
                <p>
                  We provide luxury transportation for all types of special occasions:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Proms & Graduations:</strong> Arrive in style for your milestone
                      celebration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Anniversaries:</strong> Romantic luxury transportation for your
                      special day
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Birthday Celebrations:</strong> Make it a day to remember with our
                      premium service
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Theatre & Concerts:</strong> Stress-free transportation to shows and
                      events
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sporting Events:</strong> Travel in comfort to races, matches, and
                      tournaments
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us for Your Event</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Experienced in coordinating wedding and event transportation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Immaculately maintained vehicles, always pristine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional, courteous chauffeurs in formal attire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Flexible packages tailored to your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complimentary decorations and champagne</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Plan Your Wedding Transport</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Speak with our wedding specialists to create your perfect package.
                  </p>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white shadow-sm mb-2" asChild>
                    <a href="tel:+442012345678">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Available Vehicles</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Vintage Rolls-Royce Phantom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Classic Bentley</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Mercedes S-Class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>BMW 7 Series</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Range Rover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Mercedes V-Class (for parties)</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link to="/fleet">View Full Fleet</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Book Early</h3>
                  <p className="text-sm text-gray-600">
                    Wedding season books up quickly. Reserve your preferred vehicle 6-12 months in
                    advance to guarantee availability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Make Your Day Perfect</h2>
          <p className="text-gray-300 mb-8">
            Contact us to discuss your wedding or event transportation needs.
          </p>
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}