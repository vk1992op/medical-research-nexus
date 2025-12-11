import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Users, ClipboardCheck, Building2, Heart, Brain, Pill, Microscope, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      icon: Users,
      title: "Patient Recruitment",
      description: "Strategic recruitment solutions to meet enrollment timelines efficiently.",
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory Compliance",
      description: "Ensuring full compliance with local and international regulations.",
    },
    {
      icon: Building2,
      title: "Site Coordination",
      description: "Seamless coordination between sponsors, CROs, and research sites.",
    },
  ];

  const therapeuticAreas = [
    { icon: Microscope, name: "Oncology" },
    { icon: Heart, name: "Cardiology" },
    { icon: Brain, name: "CNS / Neurology" },
    { icon: Pill, name: "Dermatology" },
    { icon: Stethoscope, name: "General Medicine" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-cream">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Excellence in Clinical Research Site Management
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Partner with us to accelerate your clinical trials. We provide comprehensive site management services that ensure quality, compliance, and successful outcomes for CROs and Sponsors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-body">
                <Link to="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Site Management Services
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to support successful clinical trial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="font-body">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Therapeutic Areas
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across multiple therapeutic areas to meet diverse research needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {therapeuticAreas.map((area) => (
              <div
                key={area.name}
                className="flex items-center gap-3 px-6 py-4 bg-card rounded-full border border-border"
              >
                <area.icon className="h-5 w-5 text-primary" />
                <span className="font-body font-medium text-foreground">{area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="font-body text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let's discuss how our site management expertise can support your clinical research objectives.
          </p>
          <Button asChild variant="secondary" size="lg" className="font-body">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;