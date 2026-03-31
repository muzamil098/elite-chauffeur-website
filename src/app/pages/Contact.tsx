import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { SEOHead } from "../components/SEOHead";
import { toast } from "sonner";
import { BookingForm } from "../components/BookingForm";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "EliteChauffeur",
    "telephone": "+442012345678",
    "email": "info@elitechauffeur.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Park Lane",
      "addressLocality": "London",
      "postalCode": "W1K 7AA",
      "addressCountry": "GB",
    },
  },
};

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    toast.success("Thank you for contacting us! We'll get back to you within 24 hours.");
    reset();
  };

  return (
    <>
      <SEOHead
        title="Contact Us - EliteChauffeur London"
        description="Contact EliteChauffeur for luxury chauffeur services. Call +44 20 1234 5678 or email info@elitechauffeur.com. 24/7 service available."
        keywords="contact EliteChauffeur, chauffeur booking London, luxury car hire contact, request quote"
        canonical="https://elitechauffeur.com/contact"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[300px] md:h-[350px] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762805080834-16bea28c87b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMGNhciUyMG5pZ2h0JTIwY2l0eSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzQwMzkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact EliteChauffeur"
            className="w-full h-full object-cover opacity-45"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-200">
              Get in touch with our team for bookings, inquiries, or to discuss your transportation
              needs. We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+442012345678"
                        className="text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        +44 20 1234 5678
                      </a>
                      <p className="text-sm text-gray-500 mt-1">24/7 Availability</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@elitechauffeur.com"
                        className="text-gray-600 hover:text-yellow-600 transition-colors break-all"
                      >
                        info@elitechauffeur.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We reply within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Park Lane
                        <br />
                        London, W1K 7AA
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        (Service available 24/7)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          {...register("name", { required: "Name is required" })}
                          placeholder="John Doe"
                          className="mt-1"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          placeholder="john@example.com"
                          className="mt-1"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone", { required: "Phone is required" })}
                          placeholder="+44 20 1234 5678"
                          className="mt-1"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          {...register("subject", { required: "Subject is required" })}
                          placeholder="General Inquiry"
                          className="mt-1"
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-600 mt-1">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        {...register("message", { required: "Message is required" })}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="mt-1"
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Or Book Directly</h2>
            <p className="text-lg text-gray-600">
              Ready to book? Fill in the booking form below or call us for immediate assistance.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <BookingForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="w-full h-[400px] bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <MapPin className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
              <p className="text-gray-600">123 Park Lane, London, W1K 7AA</p>
              <p className="text-sm text-gray-500 mt-2">
                (Interactive map would be integrated here)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}