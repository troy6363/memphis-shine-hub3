import { Gift, Users, Calendar, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const specials = [
  {
    icon: Gift,
    title: "First-Time Customer",
    discount: "15% OFF",
    description: "Your first detail with Gleam Mobile Detailing",
    terms: "Valid on any service package. Cannot be combined with other offers.",
  },
  {
    icon: Users,
    title: "Referral Reward",
    discount: "$25 Credit",
    description: "When you refer a friend who books",
    terms: "Credit applied after referral's first completed service.",
  },
  {
    icon: Calendar,
    title: "Maintenance Plan",
    discount: "20% OFF",
    description: "Book monthly details and save",
    terms: "Minimum 3-month commitment. Same vehicle.",
  },
];

const Specials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Current <span className="text-red-gradient">Specials</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our exclusive offers and save on premium detailing services.
          </p>
        </div>
      </section>

      {/* Specials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {specials.map((special) => (
              <Card key={special.title} className="bg-card border-border text-center">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <special.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {special.title}
                  </CardTitle>
                  <p className="text-3xl font-bold text-primary">{special.discount}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{special.description}</p>
                  <p className="text-xs text-muted-foreground">{special.terms}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seasonal <span className="text-red-gradient">Promotions</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We regularly offer seasonal specials and limited-time promotions.
              Follow us on Facebook or call to ask about current deals!
            </p>
            <div className="bg-background border border-border rounded-lg p-8">
              <p className="text-lg text-foreground mb-2">Current Season Special</p>
              <p className="text-4xl font-bold text-primary mb-4">Coming Soon</p>
              <p className="text-sm text-muted-foreground">
                Call us to be notified when our next promotion launches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Save?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Mention any of these specials when you book to receive your discount.
          </p>
          <Button asChild size="lg" className="font-semibold">
            <a href="tel:662-310-3732">
              <Phone className="h-5 w-5 mr-2" />
              Call (662) 310-3732
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Specials;
