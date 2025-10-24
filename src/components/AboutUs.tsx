import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Home, Facebook, Truck } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackMessenger, trackFacebookClick, trackWhatsAppClick } from "@/utils/analytics";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 bg-[hsl(var(--asphalt-grey))]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                ABOUT US
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
              
              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                We are trusted roofing specialists serving Crosshouse, Kilmarnock and surrounding areas. Our professional team specialises in full roof replacements, repairs, chimney work, solar panel services, and guttering systems. Expert installation services with 10-year guarantee, delivering premium roofing solutions that protect and enhance your property.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/REMIROOFINDLTD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackFacebookClick('about_section')}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a 
                  href="https://wa.me/447930951155" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('about_section')}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" color="black" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Video */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="text-center max-w-sm w-full">
              <div className="mb-4 sm:mb-6 mx-auto">
                <video
                  src="/remiroofvid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-lg mx-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                REMI ROOFING
              </h3>
              <p className="text-white/80 text-base sm:text-lg">
                PROFESSIONAL ROOFING SERVICES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;