import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/assets/gleam-logo.png"
                alt="Gleam Mobile Detailing"
                className="h-32 md:h-40 w-auto transition-transform hover:scale-105 rounded-2xl"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              />
            </Link>
            <p className="text-sm text-muted-foreground italic">
              "We Bring The Gleam To You"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {[
                "Memphis", "Cordova", "Bartlett", "Germantown",
                "Collierville", "Lakeland", "Arlington", "Millington",
                "Atoka", "Covington", "Oakland", "Eads", "Byhalia"
              ].map((city) => (
                <Link
                  key={city}
                  to={`/locations/${city.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:662-310-3732"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                (662) 310-3732
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Cordova, TN 38016<br />Mobile Service - We Come To You!</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Mon-Sat: 8AM - 6PM<br />Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://facebook.com/GleamMobileDetailing17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
              <a
                href="https://instagram.com/gleammobiledetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gleam Mobile Detailing. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/80 mt-2">
            Powered by <a href="https://smartwebmemphis.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SmartWeb Memphis</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
