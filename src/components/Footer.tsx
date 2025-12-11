import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              MedSite<span className="text-primary/70">SMO</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Your trusted partner in clinical research site management, dedicated to advancing medical science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Contact</h4>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>info@medsitesmo.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Medical Center Drive</p>
              <p>Healthcare City, HC 12345</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-body text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} MedSiteSMO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;