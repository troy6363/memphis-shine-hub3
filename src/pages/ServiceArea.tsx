import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MapPin, Star, Shield, Award, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const cityData: Record<string, { image: string, description: string }> = {
    atoka: {
        image: "/assets/1.jpg",
        description: "Premium mobile detailing services in Atoka, TN. We bring showroom-quality care to your doorstep."
    },
    eads: {
        image: "/assets/2.jpg",
        description: "Expert auto detailing in Eads, TN. Professional cleaning and protection for your luxury vehicles."
    },
    bartlett: {
        image: "/assets/3.jpg",
        description: "The best mobile detailing in Bartlett, TN. Meticulous interior and exterior restoration services."
    },
    germantown: {
        image: "/assets/4.jpg",
        description: "High-end mobile detailing for Germantown, TN. We specialize in luxury and exotic vehicle care."
    },
    byhalia: {
        image: "/assets/5.jpg",
        description: "Quality mobile detailing in Byhalia, MS. Full-service car care that comes to you."
    },
    lakeland: {
        image: "/assets/6.jpg",
        description: "Professional mobile detailing in Lakeland, TN. Reliable and thorough cleaning for all vehicle types."
    },
    cordova: {
        image: "/assets/2.jpg",
        description: "Top-rated mobile detailing in Cordova, TN. Convenient service with exceptional results."
    },
    memphis: {
        image: "/assets/1.jpg",
        description: "Comprehensive mobile detailing across Memphis, TN. Showroom quality at your home or office."
    },
    collierville: {
        image: "/assets/5.jpg",
        description: "Elegant mobile detailing in Collierville, TN. Meticulous care for your prized vehicles."
    },
    arlington: {
        image: "/assets/7.jpg",
        description: "Trusted mobile detailing in Arlington, TN. Professional service with a personal touch."
    },
    millington: {
        image: "/assets/8.jpg",
        description: "Mobile auto detailing in Millington, TN. We make your car look new again without you leaving home."
    },
    oakland: {
        image: "/assets/3.jpg",
        description: "Mobile detailing experts in Oakland, TN. Advanced cleaning and protection services."
    },
    covington: {
        image: "/assets/2.jpg",
        description: "Mobile detailing in Covington, TN. Professional grade results delivered to your driveway."
    }
};

const ServiceArea = () => {
    const { city } = useParams<{ city: string }>();
    const cityKey = city?.toLowerCase() || "";
    const data = cityData[cityKey] || cityData.memphis;
    const cityName = city?.charAt(0).toUpperCase() + city!.slice(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [city]);

    return (
        <Layout>
            <Helmet>
                <title>Mobile Detailing in {cityName}, TN | Gleam Mobile Detailing</title>
                <meta name="description" content={`Professional mobile auto detailing in ${cityName}. Interior detailing, exterior washing, and ceramic coating delivered to your door.`} />
            </Helmet>

            {/* Hero */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src={data.image}
                    alt={`Mobile Detailing in ${cityName}`}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 h-full flex items-center">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl"
                        >
                            <p className="text-primary font-semibold tracking-widest uppercase mb-4">
                                Serving {cityName}
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Mobile Auto Detailing in <span className="text-primary">{cityName}</span>
                            </h1>
                            <p className="text-xl text-gray-200 mb-8">
                                {data.description} Experience the convenience of professional car care that comes directly to you.
                            </p>
                            <Button asChild size="lg" className="text-lg">
                                <a href="tel:662-310-3732">
                                    <Phone className="h-5 w-5 mr-2" />
                                    Call Now (662) 310-3732
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Why Choose Our <span className="text-red-gradient">Mobile Service</span> in {cityName}?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We understand that your time is valuable. That's why we bring our fully equipped mobile detailing unit to your location in {cityName}. Whether you're at home, work, or anywhere else, we provide showroom-quality results without the hassle of a traditional shop.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-xl h-fit">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">We Save You Time</h4>
                                        <p className="text-muted-foreground">No more waiting in lobby areas or dropping off your car. We work while you go about your day.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-xl h-fit">
                                        <Shield className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Precision & Care</h4>
                                        <p className="text-muted-foreground">We use only premium products and techniques to ensure your vehicle is treated with the utmost respect.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-xl h-fit">
                                        <Award className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Showroom Quality</h4>
                                        <p className="text-muted-foreground">From basic washes to full interior and exterior restoration, we deliver results that exceed expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl group"
                            >
                                <img
                                    src={data.image}
                                    alt={`Professional detailing in ${cityName}`}
                                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <p className="text-white font-medium">Professional grade results in {cityName}</p>
                                </div>
                            </motion.div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Callout */}
            <section className="py-20 bg-card border-y border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Services in {cityName}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-background border-border">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Interior Detail</h3>
                                <p className="text-muted-foreground mb-6">Deep cleaning, vacuuming, and conditioning of all interior surfaces. We remove stains and odors to make your cabin fresh again.</p>
                                <Link to="/services" className="text-primary font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                                    View Full Services <ArrowRight className="h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                        <Card className="bg-background border-border">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Exterior Polish</h3>
                                <p className="text-muted-foreground mb-6">Hand washing, decontamination, and protection. We bring back the shine to your paint and protect it from the elements.</p>
                                <Link to="/services" className="text-primary font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                                    View Full Services <ArrowRight className="h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                        <Card className="bg-background border-border">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Full Restoration</h3>
                                <p className="text-muted-foreground mb-6">Our most comprehensive package for {cityName} residents. Includes complete interior and exterior restoration with premium finishes.</p>
                                <Link to="/services" className="text-primary font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                                    View Full Services <ArrowRight className="h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-card border border-border shadow-2xl">
                        <h2 className="text-4xl font-bold mb-6">Ready to Book in {cityName}?</h2>
                        <p className="text-xl text-muted-foreground mb-10">
                            Join our satisfied customers in {cityName} and let Gleam Mobile Detailing take care of your vehicle. Showroom results are just a phone call away.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button asChild size="lg" className="h-16 text-xl px-12">
                                <a href="tel:662-310-3732">
                                    Call or Text (662) 310-3732
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-16 text-xl px-12">
                                <Link to="/contact">Request Special Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceArea;
