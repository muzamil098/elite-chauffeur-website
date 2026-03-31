import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BookingDialog } from "../components/BookingDialog";
import { CookieBanner } from "../components/CookieBanner";
import { ScrollToTop } from "../components/ScrollToTop";

export function Root() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  // Open booking dialog on page load if hash is #book
  useState(() => {
    if (location.hash === "#book") {
      setBookingOpen(true);
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header onBookNow={() => setBookingOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
      <CookieBanner />
      <ScrollToTop />
    </div>
  );
}