import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-yellow-600 mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It may have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-sm w-full sm:w-auto" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}