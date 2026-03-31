import { useParams, Link } from "react-router";
import { Users, Briefcase, CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { SEOHead } from "../components/SEOHead";
import { vehicles } from "../data/vehicles";

export function VehicleDetails() {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const vehicle = vehicles.find((v) => v.id === vehicleId);

  if (!vehicle) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Vehicle Not Found</h2>
          <Button asChild>
            <Link to="/fleet">Back to Fleet</Link>
          </Button>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": vehicle.name,
    "description": vehicle.description,
    "image": vehicle.image,
    "category": vehicle.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
    },
  };

  return (
    <>
      <SEOHead
        title={`${vehicle.name} - Luxury Chauffeur Service`}
        description={vehicle.description}
        canonical={`https://elitechauffeur.com/fleet/${vehicle.id}`}
        schema={schema}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="link" className="text-gray-600 p-0" asChild>
            <Link to="/fleet">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Fleet
            </Link>
          </Button>
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-4 py-2 rounded-full font-medium">
                  {vehicle.category}
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{vehicle.name}</h1>
              <div className="flex items-center gap-6 text-lg mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-600" />
                  <span>Up to {vehicle.passengers} passengers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-yellow-600" />
                  <span>{vehicle.luggage} luggage pieces</span>
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8">{vehicle.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Vehicle Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Ideal For</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.idealFor.map((use, index) => (
                    <span
                      key={index}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-sm flex-1"
                  asChild
                >
                  <a href="#book">Book This Vehicle</a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <a href="tel:+442012345678">
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Inquire
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Professional Service</h3>
                <p className="text-sm text-gray-600">
                  All vehicles come with a professional, uniformed chauffeur trained to provide
                  exceptional service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Immaculate Condition</h3>
                <p className="text-sm text-gray-600">
                  Our vehicles are meticulously maintained and valeted before every journey to
                  ensure pristine condition.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">24/7 Availability</h3>
                <p className="text-sm text-gray-600">
                  Book this vehicle any time of day or night. We're available around the clock for
                  your convenience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Vehicles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Other Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles
              .filter((v) => v.id !== vehicle.id)
              .slice(0, 3)
              .map((v) => (
                <Card key={v.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{v.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{v.description}</p>
                    <Button variant="link" className="text-yellow-600 p-0" asChild>
                      <Link to={`/fleet/${v.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}