import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  ClipboardCheck,
  Building2,
  FileText,
  UserCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Patient Recruitment",
      description:
        "Strategic patient identification and recruitment solutions designed to meet enrollment targets within timelines. We leverage diverse recruitment channels and community engagement to ensure successful patient enrollment.",
      features: [
        "Recruitment strategy development",
        "Community outreach programs",
        "Patient screening and pre-qualification",
        "Enrollment tracking and optimization",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory Compliance",
      description:
        "Comprehensive regulatory support ensuring full compliance with ICH-GCP guidelines, local regulations, and sponsor requirements throughout the study lifecycle.",
      features: [
        "Ethics committee submissions",
        "Regulatory document preparation",
        "Protocol compliance monitoring",
        "Audit readiness support",
      ],
    },
    {
      icon: Building2,
      title: "Site Coordination",
      description:
        "Seamless coordination between sponsors, CROs, and research sites to ensure efficient study conduct and clear communication across all stakeholders.",
      features: [
        "Study startup coordination",
        "Investigator and site liaison",
        "Meeting coordination",
        "Issue resolution management",
      ],
    },
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Meticulous management of essential documents, ensuring regulatory compliance and inspection readiness throughout the trial.",
      features: [
        "TMF/ISF maintenance",
        "Document version control",
        "Archival services",
        "eTMF support",
      ],
    },
    {
      icon: UserCheck,
      title: "Staff Training",
      description:
        "Comprehensive training programs for site staff to ensure protocol adherence and quality data collection.",
      features: [
        "GCP training",
        "Protocol-specific training",
        "System and process training",
        "Ongoing education programs",
      ],
    },
    {
      icon: BarChart3,
      title: "Study Monitoring Support",
      description:
        "Support services for monitoring activities, ensuring data quality and regulatory compliance.",
      features: [
        "Pre-visit preparation",
        "Query resolution",
        "Data quality reviews",
        "Follow-up coordination",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Site Management Services
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Comprehensive site management solutions designed to support successful clinical trial execution for CROs and Sponsors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-body text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Benefits for CROs & Sponsors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Accelerated Timelines
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Efficient site management processes that help meet enrollment and study completion targets.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Quality Assurance
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Rigorous quality standards ensuring data integrity and regulatory compliance.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Cost Efficiency
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Streamlined operations reducing overhead while maintaining high-quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="font-body text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Contact us to learn how our site management services can support your clinical research objectives.
          </p>
          <Button asChild variant="secondary" size="lg" className="font-body">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;