import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHelmet from '@/components/SEOHelmet';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHelmet 
        title="404 - Page Not Found | Abundant Aussie"
        description="The page you're looking for doesn't exist. Return to the homepage to explore Australia's $19 trillion economic solution."
        type="website"
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
