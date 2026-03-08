import { Helmet } from "react-helmet";
import { Shield, Award, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import shopExterior from "@/assets/shop-exterior.jpeg";
import { useRef, useEffect } from "react";

const values = [
  {
    icon: Shield,
    title: "Quality Products",
    description: "We use only premium detailing products trusted by professionals worldwide.",
  },
  {
    icon: Award,
    title: "Expert Techniques",
    description: "Years of experience and continuous training ensure exceptional results.",
  },
  {
    icon: Heart,
    title: "Passion for Cars",
    description: "We treat every vehicle like it's our own, with care and attention to detail.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We don't stop until you're impressed.",
  },
];

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback speed to 75% (slower)
    video.playbackRate = 0.75;

    const handleTimeUpdate = () => {
      const fadePoint = video.duration - 0.5; // Start fade 0.5s before end
      if (video.currentTime >= fadePoint) {
        const fadeProgress = (video.currentTime - fadePoint) / 0.5;
        video.style.opacity = String(1 - (fadeProgress * 0.3)); // Fade to 70% opacity
      } else if (video.currentTime < 0.5) {
        // Fade in at start
        video.style.opacity = String(0.7 + (video.currentTime / 0.5) * 0.3);
      } else {
        video.style.opacity = '1';
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About Us | Gleam Mobile Detailing - Memphis Auto Detailing Since 2017</title>
        <meta name="description" content="Meet the team behind Memphis's top-rated mobile detailing service. A+ BBB rated with 8+ years of experience. Quality products, expert techniques, and customer-first service." />
        <link rel="canonical" href="https://gleammobiledetailing.com/about" />
        <meta property="og:title" content="About Gleam Mobile Detailing | Memphis Since 2017" />
        <meta property="og:description" content="A+ BBB rated mobile detailing with 8+ years of experience serving Memphis & the Mid-South." />
        <meta property="og:url" content="https://gleammobiledetailing.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${shopExterior})` }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-red-gradient">Gleam Mobile Detailing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Memphis' trusted mobile auto detailing service since 2017.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-red-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground text-xl block mb-2">Meet Jeremy Lewis, Owner of Gleam Mobile Detailing.</strong>
                  Since 2017, our mission has been simple: to deliver exceptional mobile detailing that exceeds expectations, one vehicle at a time. We bring premium products and expert techniques directly to your location for ultimate convenience.
                </p>
                <p>
                  We offer our customers consistent quality service and workmanship. We offer many services such as; Full Detailing, Interior and Exterior packages, Paint correction, Ceramic coating, Headlight restoration, and Steam cleaning to name a few.
                </p>
                <p>
                  We proudly serve the Memphis and Cordova, TN area with comprehensive mobile detailing services. Whether it's your daily driver, luxury vehicle, or fleet—we bring the gleam to you, wherever you are.
                </p>
                <p>
                  With an A+ BBB rating and over 8 years in business, Gleam Mobile Detailing has built a reputation for quality, reliability, and customer satisfaction that speaks for itself.
                </p>
                <p className="text-primary font-bold italic text-xl pt-4">
                  "Thank you for choosing Gleam Mobile Detailing."
                </p>
              </div>
            </div>
            <div className="relative">
              <video
                ref={videoRef}
                src="/assets/about gleam.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-xl w-full transition-opacity duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                Mobile Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us <span className="text-red-gradient">Apart</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-background border-border text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience the <span className="text-red-gradient">Gleam Difference</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule your detail today and see why Memphis chooses Gleam Mobile Detailing.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <a href="tel:1-877-460-1756">Call 1-877-460-1756</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
