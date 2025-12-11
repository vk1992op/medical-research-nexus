import Layout from "@/components/Layout";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in clinical research practices.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with CROs, sponsors, and research sites.",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Maintaining ethical conduct and transparency in all operations.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              About MedSiteSMO
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              We are a dedicated Site Management Organization committed to advancing clinical research through exceptional site management services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="font-display text-2xl font-semibold text-foreground">Our Mission</h2>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                To provide comprehensive site management solutions that accelerate clinical research, ensuring quality outcomes for sponsors, CROs, and ultimately, patients who benefit from medical advancements.
              </p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-primary" />
                <h2 className="font-display text-2xl font-semibold text-foreground">Our Vision</h2>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                To become a leading Site Management Organization recognized for excellence, reliability, and innovation in clinical research support across multiple therapeutic areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the clinical research landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Experienced Team
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Our professionals bring extensive experience in clinical research and site management.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Therapeutic Expertise
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Specialized knowledge across Oncology, Cardiology, CNS, Dermatology, and more.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Quality Focus
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Rigorous quality standards ensuring compliance and data integrity.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Partner-Centric Approach
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Tailored solutions designed to meet the unique needs of each partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;