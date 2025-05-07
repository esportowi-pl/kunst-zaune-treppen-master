
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Seite nicht gefunden</p>
        <p className="mb-8 text-gray-500">
          Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Link to="/">
          <Button className="bg-black text-white flex items-center gap-2">
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
