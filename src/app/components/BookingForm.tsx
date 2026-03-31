import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, Clock, MapPin, User, Mail, Phone, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  notes?: string;
};

export function BookingForm({ onClose }: { onClose?: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Booking submitted:", data);
    
    toast.success("Booking request submitted successfully! We'll send you a confirmation email shortly.");
    
    reset();
    setIsSubmitting(false);
    
    if (onClose) {
      setTimeout(onClose, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name
          </Label>
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

        {/* Email */}
        <div>
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="john@example.com"
            className="mt-1"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Phone
          </Label>
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

        {/* Passengers */}
        <div>
          <Label htmlFor="passengers" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Passengers
          </Label>
          <Input
            id="passengers"
            type="number"
            min="1"
            max="8"
            {...register("passengers", { 
              required: "Number of passengers is required",
              min: { value: 1, message: "At least 1 passenger required" },
              max: { value: 8, message: "Maximum 8 passengers" }
            })}
            placeholder="2"
            className="mt-1"
          />
          {errors.passengers && (
            <p className="text-sm text-red-600 mt-1">{errors.passengers.message}</p>
          )}
        </div>

        {/* Pickup Location */}
        <div>
          <Label htmlFor="pickup" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Pickup Location
          </Label>
          <Input
            id="pickup"
            {...register("pickup", { required: "Pickup location is required" })}
            placeholder="Heathrow Airport Terminal 5"
            className="mt-1"
          />
          {errors.pickup && (
            <p className="text-sm text-red-600 mt-1">{errors.pickup.message}</p>
          )}
        </div>

        {/* Destination */}
        <div>
          <Label htmlFor="destination" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Destination
          </Label>
          <Input
            id="destination"
            {...register("destination", { required: "Destination is required" })}
            placeholder="Central London"
            className="mt-1"
          />
          {errors.destination && (
            <p className="text-sm text-red-600 mt-1">{errors.destination.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <Label htmlFor="date" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Date
          </Label>
          <Input
            id="date"
            type="date"
            {...register("date", { required: "Date is required" })}
            className="mt-1"
          />
          {errors.date && (
            <p className="text-sm text-red-600 mt-1">{errors.date.message}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <Label htmlFor="time" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Time
          </Label>
          <Input
            id="time"
            type="time"
            {...register("time", { required: "Time is required" })}
            className="mt-1"
          />
          {errors.time && (
            <p className="text-sm text-red-600 mt-1">{errors.time.message}</p>
          )}
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          {...register("notes")}
          placeholder="Flight number, special requirements, etc."
          rows={3}
          className="mt-1"
        />
      </div>

      {/* Submit Button */}
      <div className="flex gap-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white"
        >
          {isSubmitting ? "Submitting..." : "Request Booking"}
        </Button>
        {onClose && (
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        )}
      </div>

      <p className="text-sm text-gray-500 text-center">
        We'll send you a confirmation email with your booking details and quote.
      </p>
    </form>
  );
}
