import { Link } from "react-router";
import { Briefcase, Clock, Users, CheckCircle, Phone } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SEOHead } from "../../components/SEOHead";

const benefits = [
  {
    icon: Briefcase,
    title: "Executive Service",
    description: "Professional chauffeurs trained to meet corporate standards and expectations.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Hourly hire, daily contracts, or long-term corporate accounts available.",
  },
  {
    icon: Users,
    title: "Account Management",
    description: "Dedicated account manager for corporate clients with priority booking.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Chauffeur Service London",
  "description": "Executive chauffeur service for business professionals, corporate events, and daily commutes. Professional, discreet, and reliable.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "EliteChauffeur"
  }
};

export function CorporateChauffeur() {
  return (
    <>
      <SEOHead
        title="Corporate Chauffeur Service London - Executive Business Travel"
        description="Professional corporate chauffeur service for business meetings, events, and daily commutes. Discreet, reliable executive transportation. Book now."
        keywords="corporate chauffeur London, executive car service, business travel, company car hire, professional driver"
        canonical="https://elitechauffeur.com/services/corporate-chauffeur"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1706117759117-11c1ac198190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGNhcnxlbnwxfHx8fDE3NzQwMjEzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Corporate chauffeur service"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Corporate Chauffeur Service
          </h1>
          <p className="text-lg text-gray-200">
            Executive transportation for business professionals. Discreet, reliable, and perfectly
            suited to your corporate needs.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
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
                Executive Business Transportation
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  EliteChauffeur's corporate service is designed for businesses and executives who
                  demand the highest standards of professionalism, punctuality, and discretion. Our
                  chauffeurs understand the importance of your time and reputation.
                </p>
                <p>
                  Whether you need transportation to important business meetings, client
                  entertainment, corporate events, or daily executive commutes, our fleet of luxury
                  vehicles and professional drivers are at your service.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Services We Provide</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Business Meetings:</strong> Professional transportation to meetings,
                      conferences, and presentations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Client Entertainment:</strong> Impress clients with luxury
                      transportation for dinners and events
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Executive Commute:</strong> Daily pickup and drop-off for senior
                      executives
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Corporate Events:</strong> Transportation for company functions,
                      seminars, and team building
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Roadshows:</strong> Multi-location itineraries with professional
                      coordination
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>VIP Visits:</strong> Discrete transportation for high-profile guests
                      and executives
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Corporate Account Benefits</h3>
                <p>
                  Our corporate account service offers exclusive benefits for businesses that
                  regularly require chauffeur services:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager for personalized service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority booking and preferred rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Monthly invoicing with detailed reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multiple authorized bookers for your organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom billing and cost center codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Access to our full fleet with guaranteed availability</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Why Businesses Choose Us</h3>
                <p>
                  Leading corporations, law firms, financial institutions, and multinational
                  companies trust EliteChauffeur for their executive transportation needs. Our
                  commitment to excellence, confidentiality, and reliability makes us the preferred
                  choice for corporate travel.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Request Corporate Account</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Get started with our corporate account service and enjoy exclusive benefits.
                  </p>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white shadow-sm mb-2" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="tel:+442012345678">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Service Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Professional, uniformed chauffeurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Latest Mercedes & BMW models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Complimentary Wi-Fi & refreshments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Newspapers & magazines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Mobile office facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Trusted by Leading Companies</h3>
                  <p className="text-sm text-gray-600">
                    We proudly serve Fortune 500 companies, law firms, banks, and international
                    corporations across London.
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
          <h2 className="text-3xl font-bold mb-4">Elevate Your Corporate Travel</h2>
          <p className="text-gray-300 mb-8">
            Contact us to discuss your corporate transportation needs and set up an account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white" asChild>
              <Link to="/contact">Request Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white" asChild>
              <a href="#book">Book Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}