import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { BookingForm } from "./BookingForm";

export function BookingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Your Chauffeur Service</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll send you a confirmation with a personalized quote.
          </DialogDescription>
        </DialogHeader>
        <BookingForm onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
