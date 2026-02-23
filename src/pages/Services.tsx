import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import corvetteImage from "@/assets/corvette-detail.jpeg";

const packages = [
  {
    name: "Exterior Wash",
    carPrice: "$30",
    truckPrice: "$40-$50",
    description: "Quick refresh for your vehicle's exterior",
    features: [
      "Hand wash with premium soap",
      "Wheel and tire cleaning",
      "Tire dressing",
      "Window cleaning",
      "Door jambs wiped",
    ],
    popular: false,
  },
  {
    name: "Touch Up",
    carPrice: "$60-$80",
    truckPrice: "$80-$100",
    description: "Interior and exterior maintenance detail",
    features: [
      "Everything in Exterior Wash",
      "Interior vacuum",
      "Dashboard and console wipe",
      "Cup holders cleaned",
      "Interior windows",
      "Light leather/vinyl wipe",
    ],
    popular: false,
  },
  {
    name: "Full Detail",
    carPrice: "$250+",
    truckPrice: "$300+",
    description: "Complete interior and exterior restoration",
    features: [
      "Full exterior wash and clay bar",
      "One-step polish",
      "Paint sealant application",
      "Deep interior cleaning",
      "Leather conditioning",
      "Carpet shampooing",
      "Engine bay cleaning",
      "Headlight restoration",
    ],
    popular: true,
  },
  {
    name: "Premier Package",
    carPrice: "$700+",
    truckPrice: "$850+",
    description: "Ultimate detailing with long-lasting protection",
    features: [
      "Everything in Full Detail",
      "Multi-step paint correction",
      "Ceramic coating application",
      "Interior ceramic protection",
      "Glass coating",
      "Wheel coating",
      "Premium leather treatment",
      "90-day protection guarantee",
    ],
    popular: false,
  },
];

const addons = [
  { name: "Ceramic Coating (1-Year)", price: "$400+" },
  { name: "Ceramic Coating (3-Year)", price: "$800+" },
  { name: "Paint Correction", price: "$150+" },
  { name: "Headlight Restoration", price: "$75+" },
  { name: "Engine Bay Detail", price: "$50+" },
  { name: "Pet Hair Removal", price: "$50+" },
  { name: "Odor Elimination", price: "$75+" },
  { name: "Scratch Removal", price: "Quote" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${corvetteImage})` }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-red-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional mobile detailing packages tailored to your vehicle's needs and your expectations.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative bg-card border-border ${pkg.popular ? "border-primary red-glow" : ""
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  <div className="pt-4 space-y-1">
                    <p className="text-2xl font-bold text-primary">
                      {pkg.carPrice}
                      <span className="text-sm font-normal text-muted-foreground"> / Cars</span>
                    </p>
                    <p className="text-lg text-foreground">
                      {pkg.truckPrice}
                      <span className="text-sm font-normal text-muted-foreground"> / Trucks & SUVs</span>
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6" variant={pkg.popular ? "default" : "outline"}>
                    <a href="tel:662-310-3732">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Add-On <span className="text-red-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your detail with these premium add-on services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-background border border-border rounded-lg p-4 text-center"
              >
                <p className="text-sm font-medium text-foreground mb-1">{addon.name}</p>
                <p className="text-primary font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-black border-y border-border relative overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not Sure Which Package?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Call us and we'll help you choose the perfect service for your vehicle.
          </p>
          <Button asChild size="lg" className="font-semibold shadow-xl">
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

export default Services;
