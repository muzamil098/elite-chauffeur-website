import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "./ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-700">
                We use cookies to enhance your experience and analyze site traffic. By clicking
                "Accept", you consent to our use of cookies.{" "}
                <a href="#" className="text-yellow-600 hover:underline">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              onClick={declineCookies}
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none"
            >
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              className="bg-yellow-600 hover:bg-yellow-700 text-white flex-1 sm:flex-none"
              size="sm"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
