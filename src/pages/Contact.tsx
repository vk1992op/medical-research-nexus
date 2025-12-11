import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@medsitesmo.com", "partnerships@medsitesmo.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Medical Center Drive", "Healthcare City, HC 12345"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday - Sunday: Closed"],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              We welcome inquiries from CROs and Sponsors interested in partnering with us for clinical research site management.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="p-8 bg-card rounded-lg border border-border"
              >
                <info.icon className="h-8 w-8 text-primary mb-4" />
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  {info.title}
                </h2>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="font-body text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Partnership Inquiries
            </h2>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              We are actively seeking partnerships with Clinical Research Organizations (CROs) and Sponsors. Our team is ready to discuss how we can support your clinical trials with our comprehensive site management services.
            </p>
            <div className="p-8 bg-card rounded-lg border border-border text-left">
              <h3 className="font-display text-xl font-medium text-foreground mb-4">
                What to Include in Your Inquiry
              </h3>
              <ul className="space-y-3">
                {[
                  "Your organization name and type (CRO/Sponsor)",
                  "Therapeutic area of interest",
                  "Study phase and estimated timeline",
                  "Geographic regions of interest",
                  "Any specific site management requirements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Our Location
            </h2>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="font-body text-muted-foreground">
                  123 Medical Center Drive, Healthcare City, HC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;