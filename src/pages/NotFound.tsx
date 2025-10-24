import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>404 - Page Not Found | Remi Roofing</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Remi Roofing homepage for professional roofing services in Glasgow & Ayrshire." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://remiroofing.netlify.app/404" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-[hsl(var(--grass-green))] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[hsl(var(--asphalt-grey))] mb-4">Page Not Found</h2>
          <p className="text-lg text-[hsl(var(--asphalt-grey))] mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-4">
            <a 
              href="/" 
              className="inline-block bg-[hsl(var(--grass-green))] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Return to Homepage
            </a>
            
            <div className="text-sm text-[hsl(var(--asphalt-grey))]">
              <p className="mb-2">Or explore our services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/#services" className="text-[hsl(var(--grass-green))] hover:underline">Our Services</a>
                <a href="/#about" className="text-[hsl(var(--grass-green))] hover:underline">About Us</a>
                <a href="/#contact-form" className="text-[hsl(var(--grass-green))] hover:underline">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
