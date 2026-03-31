import { useState } from "react";
import { Link } from "react-router";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { SEOHead } from "../components/SEOHead";
import { vehicles } from "../data/vehicles";

const categories = ["All", "Executive Sedan", "Luxury SUV", "Vintage", "Van"] as const;

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": vehicles.map((vehicle, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": vehicle.name,
      "description": vehicle.description,
      "image": vehicle.image,
    },
  })),
};

export function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");

  const filteredVehicles =
    selectedCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Our Luxury Fleet - Mercedes, BMW, Range Rover & More"
        description="Explore our premium fleet of luxury vehicles including Mercedes S-Class, BMW 7 Series, Range Rover, and vintage Rolls-Royce. Professional chauffeur service."
        keywords="luxury car fleet London, Mercedes S-Class hire, BMW 7 Series, Range Rover chauffeur, Rolls Royce wedding car"
        canonical="https://elitechauffeur.com/fleet"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[350px] md:h-[400px] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1764013290141-63b13e311906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBnYXJhZ2UlMjBjb2xsZWN0aW9uJTIwcHJlbWl1bSUyMHZlaGljbGVzfGVufDF8fHx8MTc3NDAzOTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our luxury fleet"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Luxury Fleet</h1>
            <p className="text-lg text-gray-200">
              Experience the finest collection of luxury vehicles, meticulously maintained and
              equipped with premium amenities. From executive sedans to vintage classics, we have
              the perfect vehicle for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{vehicle.passengers} passengers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{vehicle.luggage} bags</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{vehicle.description}</p>
                  <div className="flex gap-2">
                    <Button variant="link" className="text-yellow-600 p-0" asChild>
                      <Link to={`/fleet/${vehicle.id}`}>
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Vehicles Include</h2>
            <p className="text-gray-300">Premium amenities and professional service as standard</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold mb-1">Professional Chauffeur</div>
              <div className="text-sm text-gray-400">Licensed & experienced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold mb-1">Complimentary Wi-Fi</div>
              <div className="text-sm text-gray-400">Stay connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold mb-1">Refreshments</div>
              <div className="text-sm text-gray-400">Water & amenities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold mb-1">Phone Chargers</div>
              <div className="text-sm text-gray-400">All device types</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Luxury Chauffeur</h2>
          <p className="text-gray-600 mb-8">
            Choose your preferred vehicle and experience luxury travel with EliteChauffeur.
          </p>
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-sm" asChild>
            <a href="#book">Book Your Chauffeur Now</a>
          </Button>
        </div>
      </section>
    </>
  );
}