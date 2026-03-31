import { Shield, Award, Users, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { SEOHead } from "../components/SEOHead";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "All our chauffeurs are fully licensed, insured, and undergo rigorous background checks and training.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We're committed to delivering exceptional service on every journey, exceeding expectations consistently.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Your satisfaction is our priority. We tailor our service to meet your specific needs and preferences.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "Punctuality and dependability are at the core of our service. We're there when you need us, every time.",
  },
];

const milestones = [
  { year: "2009", event: "EliteChauffeur founded in London" },
  { year: "2012", event: "Fleet expanded to 20 luxury vehicles" },
  { year: "2015", event: "Launched corporate account service" },
  { year: "2018", event: "Won London's Best Chauffeur Service Award" },
  { year: "2020", event: "Introduced vintage wedding car collection" },
  { year: "2024", event: "50+ vehicles, 247+ five-star reviews" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "EliteChauffeur",
    "foundingDate": "2009",
    "description":
      "Premium chauffeur service in London with over 15 years of experience providing luxury transportation",
  },
};

export function About() {
  return (
    <>
      <SEOHead
        title="About Us - 15+ Years of Luxury Chauffeur Service"
        description="Learn about EliteChauffeur, London's premier luxury chauffeur service. Over 15 years of experience, 50+ vehicles, and 247+ five-star reviews."
        keywords="about EliteChauffeur, luxury chauffeur London, professional driver service, company history"
        canonical="https://elitechauffeur.com/about"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[350px] md:h-[400px] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1659266900180-c8e868426e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGF1ZmZldXIlMjBzZXJ2aWNlJTIwTG9uZG9uJTIwbHV4dXJ5fGVufDF8fHx8MTc3NDAzOTI1OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About EliteChauffeur"
            className="w-full h-full object-cover opacity-45"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About EliteChauffeur</h1>
            <p className="text-lg text-gray-200">
              For over 15 years, we've been providing London's finest chauffeur service, combining
              luxury, professionalism, and reliability to create exceptional travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  EliteChauffeur was founded in 2009 with a simple vision: to provide the highest
                  standard of chauffeur service in London. What started with a small fleet of three
                  vehicles has grown into one of the capital's most trusted luxury transportation
                  providers.
                </p>
                <p>
                  Our success is built on unwavering commitment to excellence, safety, and customer
                  satisfaction. Every member of our team, from our professional chauffeurs to our
                  customer service staff, shares our dedication to providing a seamless, luxurious
                  experience.
                </p>
                <p>
                  Today, we're proud to serve corporate clients, private individuals, and special
                  events across London and beyond. Our fleet of over 50 luxury vehicles, combined
                  with our experienced team, ensures we can meet any transportation need with style
                  and professionalism.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1735172149013-46fa702b853e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGF1ZmZldXIlMjBkcml2ZXJ8ZW58MXx8fHwxNzczOTQ0NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional chauffeur"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our history</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <div className="bg-white border rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The professionals behind your perfect journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Professional Chauffeurs</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Fully licensed and insured</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Enhanced DBS checked</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Extensive London knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Customer service trained</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Operations Team</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>24/7 dispatch service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Real-time journey monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Flight tracking specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Route optimization experts</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Dedicated account managers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Multilingual support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>24/7 availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Personalized service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-gray-600">Luxury Vehicles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-600 mb-2">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}