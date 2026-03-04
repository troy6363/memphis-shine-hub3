import { Helmet } from "react-helmet";
import { Check, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const packages = [
  {
    name: "Gleam Full Detail",
    priceRange: "Price varies",
    duration: "4 hr 30 min+",
    subtitle: "(Premium Interior + Exterior Service)",
    description: "A comprehensive deep clean designed for vehicles that need full restoration inside and out. Ideal for vehicles with moderate to heavy buildup that require extra attention and time.",
    features: [
      "Hand wash and dry",
      "Exterior plastic trim cleaned and dressed",
      "Wheel faces, barrels, and tires cleaned and dressed",
      "Interior vacuum (carpets, seats, and crevices)",
      "Carpet and seat steam cleaning or shampooing",
      "Leather cleaned and conditioned (if applicable)",
      "Full interior wipe down and sanitation",
      "Air-compressed blowout of cracks and crevices",
      "Door jambs cleaned",
      "Interior glass cleaned",
      "3–6-month paint sealant applied",
      "Long-lasting interior air freshener",
    ],
    note: "*Pricing may vary depending on condition. Excessive pet hair, staining, or buildup may require additional time and cost*",
    options: [
      { label: "Small Vehicle", price: "$265.00", time: "4 hr 30 min" },
      { label: "Midsize Vehicle", price: "$285.00", time: "4 hr 45 min" },
      { label: "Large Size Vehicle", price: "$325.00", time: "5 hr" },
      { label: "Oversized Vehicle", price: "$375.00", time: "5 hr 30 min" },
    ],
    popular: true,
  },
  {
    name: "Enhanced Detail",
    priceRange: "Price varies",
    duration: "2 hr 45 min+",
    description: "A balanced service for vehicles that are regularly cleaned but need more than a basic wash.",
    features: [
      "Hand wash and dry",
      "Interior vacuum",
      "Wipe down of interior surfaces",
      "Door jambs cleaned",
      "Wheel and tire cleaning",
      "Tire dressing",
      "Light interior touch-up",
      "Exterior paint protection (3-month sealant)",
    ],
    note: "*Recommended for: vehicles maintained every 3-4 months*",
    options: [
      { label: "Small size", price: "$165.00", time: "2 hr 45 min" },
      { label: "Midsize Vehicle", price: "$185.00", time: "2 hr 45 min" },
      { label: "Full Size Vehicle", price: "$225.00", time: "3 hr 15 min" },
      { label: "Oversized Vehicle", price: "$275.00", time: "3 hr 35 min" },
    ],
  },
  {
    name: "Maintenance Detail",
    priceRange: "Price varies",
    duration: "2 hr+",
    description: "Designed for newer, well-maintained vehicles or returning clients with light to medium dirt. This is a quick, light detail to refresh your vehicle. Pricing may vary depending on the condition of your vehicle.",
    features: [
      "Hand wash and dry",
      "Interior wipe-down",
      "Vacuuming",
      "Glass cleaning",
      "Wheel cleaning",
      "Tire dressing",
    ],
    note: "*Please do not book this package if your vehicle requires extensive cleaning*",
    options: [
      { label: "Small Vehicle", price: "$125.00", time: "2 hr" },
      { label: "Midsize Vehicle", price: "$145.00", time: "2 hr 10 min" },
      { label: "Full-size Vehicle", price: "$185.00", time: "2 hr 20 min" },
      { label: "Oversized Vehicle", price: "$235.00", time: "2 hr 30 min" },
    ],
  },
  {
    name: "Deep Interior Detail",
    priceRange: "Price varies",
    duration: "3 hr 15 min+",
    description: "Designed for vehicles that need a deep interior reset. Ideal for buildup, stains, pet hair, and heavily used interiors.",
    features: [
      "Thorough interior vacuum",
      "Carpet and seat steam cleaning or shampooing",
      "Upholstery cleaning and conditioning",
      "Steam cleaning of all touch surfaces",
      "Air-compressed cleaning of vents and tight areas",
      "Door panels, cup holders, and consoles detailed",
      "Rubber mats deep cleaned and dressed",
      "Interior glass cleaned",
      "Light odor treatment",
    ],
    note: "*Heavy contamination or biohazard conditions may require additional charges*",
    options: [
      { label: "Small Vehicle", price: "$165.00", time: "3 hr 15 min" },
      { label: "Midsize vehicle", price: "$185.00", time: "3 hr 45 min" },
      { label: "Full Sized Vehicle", price: "$225.00", time: "4 hr" },
      { label: "Oversized Vehicle", price: "$275.00", time: "4 hr 30 min" },
    ],
  },
  {
    name: "Exterior Detail",
    priceRange: "Price varies",
    duration: "1 hr+",
    description: "A focused exterior rejuvenation.",
    features: [
      "Hand wash and dry",
      "Wheel cleaning",
      "Tire dressing",
      "Glass cleaned",
      "Wheel wells cleaned",
    ],
    note: "*Pricing may vary depending on the condition of your vehicle*",
    options: [
      { label: "Small Vehicle", price: "$60.00", time: "1 hr" },
      { label: "Midsize Vehicle", price: "$70.00", time: "1 hr 15 min" },
      { label: "Full Size Vehicle", price: "$90.00", time: "1 hr 30 min" },
      { label: "Oversized Vehicle", price: "$120.00", time: "1 hr 35 min" },
    ],
  },
];

const addons = [
  { name: "Ceramic Coating (1-Year)", price: "Quote" },
  { name: "Ceramic Coating (3-Year)", price: "Quote" },
  { name: "Paint Correction", price: "Quote" },
  { name: "Headlight Restoration", price: "$75+" },
  { name: "Engine Bay Detail", price: "$50+" },
  { name: "Pet Hair Removal", price: "Quote" },
  { name: "Odor Elimination", price: "Quote" },
  { name: "Scratch Removal", price: "Quote" },
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Detailing Services & Pricing | Gleam Mobile Detailing Memphis</title>
        <meta name="description" content="View our detailing packages: Gleam Full Detail from $265, Deep Interior Detail from $165, Enhanced Detail, Exterior Wash & add-ons. Sedan to SUV pricing. Book online." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: `url(/assets/location2.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-background/70" />
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
          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative bg-card border-border flex flex-col h-full ${pkg.popular ? "border-primary red-glow" : ""
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold z-10">
                    Recommended
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">{pkg.priceRange}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                        <Clock className="h-3 w-3" /> {pkg.duration}
                      </p>
                    </div>
                  </div>
                  {pkg.subtitle && <p className="text-primary font-medium text-sm mb-2">{pkg.subtitle}</p>}
                  <p className="text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="grid md:grid-cols-2 gap-6 flex-grow">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">What's Included</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4 border border-border/50">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Pricing Options</h4>
                      <div className="space-y-3">
                        {pkg.options.map((option) => (
                          <div key={option.label} className="flex justify-between items-center pb-2 border-b border-border/30 last:border-0">
                            <div>
                              <p className="text-sm font-medium">{option.label}</p>
                              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                                <Clock className="h-2.5 w-2.5" /> {option.time}
                              </p>
                            </div>
                            <p className="text-sm font-bold text-primary">{option.price}</p>
                          </div>
                        ))}
                      </div>
                      {pkg.note && (
                        <p className="text-[10px] text-muted-foreground mt-4 italic leading-tight">
                          {pkg.note}
                        </p>
                      )}
                    </div>
                  </div>
                  <Button asChild className="w-full mt-8" variant={pkg.popular ? "default" : "outline"}>
                    <Link to="/booking">Book This Package</Link>
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
