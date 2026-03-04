import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Star, Shield, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import PricingSection5 from "@/components/ui/pricing";
import { SparklesText } from "@/components/ui/sparkles-text";
import shopInterior from "@/assets/shop-interior.jpeg";
import camaroImage from "@/assets/camaro-detail.jpeg";
import audiImage from "@/assets/audi-mobile.jpeg";
import bmwImage from "@/assets/bmw-interior.jpeg";
import ramTruck from "@/assets/ram-truck.jpeg";
import toyotaAvalon from "@/assets/toyota-avalon.jpeg";
import sprinterShop from "@/assets/sprinter-shop.jpeg";
import ram2500White from "@/assets/ram-2500-white.jpeg";
import shopExterior from "@/assets/shop-exterior.jpeg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: "Exterior Wash",
    carPrice: "$30",
    truckPrice: "$40-$50",
    description: "Hand wash, wheels, tires, and windows",
  },
  {
    name: "Touch Up",
    carPrice: "$60-$80",
    truckPrice: "$80-$100",
    description: "Interior vacuum, wipe down, and exterior wash",
  },
  {
    name: "Full Detail",
    carPrice: "$250+",
    truckPrice: "$300+",
    description: "Complete interior & exterior restoration",
  },
  {
    name: "Premier Package",
    carPrice: "$700+",
    truckPrice: "$850+",
    description: "Ultimate detailing with ceramic coating",
  },
];

const testimonials = [
  {
    name: "U. Westbrook",
    text: "I had a great experience! The pricing was very affordable and the quality of work was outstanding. They were thorough, professional, and paid attention to every detail. My car looks and smells brand new. I'll definitely be back and highly recommend their services!",
    rating: 5,
  },
  {
    name: "Kendall SisTrunk",
    text: "Jeremy was very professional and punctual with his services. Also, my car has never been so clean in its life it looks like I just bought it again.",
    rating: 5,
  },
  {
    name: "Ashley Akin",
    text: "I am extremely happy with my experience with Gleam Mobile Detailing. I requested his services to detail my mother's car for her birthday. Her car was dirty! I am in complete shock and awe at how amazing her car looks. It looks show room ready! He took his time and it shows! He is a very pleasant man with reasonable pricing and I have enjoyed this experience beyond words! I highly recommend Jeremy! You won't be disappointed!",
    rating: 5,
  },
];

const trustBadges = [
  { icon: Shield, text: "Fully Insured" },
  { icon: Award, text: "Premium Products" },
  { icon: Clock, text: "Flexible Scheduling" },
  { icon: Star, text: "5-Star Rated" },
];

const galleryImages = [
  { type: "image", src: "/assets/1.jpg", alt: "Gleam Mobile Detailing Exterior" },
  { type: "image", src: "/assets/2.jpg", alt: "Gleam Mobile Detailing Detail" },
  { type: "image", src: "/assets/3.jpg", alt: "Gleam Mobile Detailing Interior" },
  { type: "image", src: "/assets/4.jpg", alt: "Gleam Mobile Detailing Work" },
  { type: "video", src: "/assets/premierpolishing1-1.mp4", alt: "Gleam Mobile Detailing Process" },
  { type: "image", src: "/assets/5.jpg", alt: "Gleam Mobile Detailing Result" },
  { type: "image", src: "/assets/6.jpg?v=2", alt: "Gleam Mobile Detailing Showcase" },
  { type: "image", src: "/assets/7.jpg?v=2", alt: "Gleam Mobile Detailing Premium" },
  { type: "image", src: "/assets/8.jpg", alt: "Gleam Mobile Detailing Finish" },
];

const Index = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = galleryVideoRef.current;
    if (video) {
      // Set playback speed to 75% (slower)
      video.playbackRate = 0.75;

      const handleTimeUpdate = () => {
        const fadePoint = video.duration - 0.5;
        if (video.currentTime >= fadePoint) {
          const fadeProgress = (video.currentTime - fadePoint) / 0.5;
          video.style.opacity = String(1 - (fadeProgress * 0.3));
        } else if (video.currentTime < 0.5) {
          video.style.opacity = String(0.7 + (video.currentTime / 0.5) * 0.3);
        } else {
          video.style.opacity = '1';
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Hero Sequences ---
      if (heroRef.current) {
        const tl = gsap.timeline();

        // 1. Fade up the main text blocks (staggered)
        tl.to(".hero-text-element", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2
        });

        // 2. Animate the individual characters of the gradient text (typewriter effect)
        tl.to(".hero-char-element", {
          opacity: 1,
          duration: 0.2, // Increased duration for a smoother fade-in per letter
          stagger: 0.1, // Increased stagger for a slower typing speed
          ease: "none",
        }, "-=0.3"); // Adjusted start time to account for slower typing

        // 3. Keep the subtle breathing effect on the gradient text wrapper
        gsap.to(".text-red-gradient", {
          scale: 1.05,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2.5
        });

        // 4. Subtle magnetic effect for hero buttons
        const magneticButtons = heroRef.current.querySelectorAll('.button-magnetic-wrapper');
        magneticButtons.forEach((btn) => {
          btn.addEventListener('mousemove', (e: any) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, {
              x: x * 0.2, // Adjust multiplier for strength
              y: y * 0.2,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "elastic.out(1, 0.3)"
            });
          });
        });
      }

      // --- Trust Badges Sequence ---
      const trustBadges = document.querySelectorAll('.gsap-trust-badge');
      if (trustBadges.length > 0) {
        gsap.fromTo(
          trustBadges,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".trust-badges-container",
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // --- Gallery Sequences ---
      const items = galleryRef.current?.querySelectorAll('.gallery-item');
      if (items) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // --- Testimonials Sequence ---
      const testimonials = document.querySelectorAll('.gsap-testimonial');
      if (testimonials.length > 0) {
        gsap.fromTo(
          testimonials,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".testimonials-container",
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // --- CTA Sequence ---
      const ctaElements = document.querySelectorAll('.gsap-cta');
      if (ctaElements.length > 0) {
        gsap.fromTo(
          ctaElements,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".cta-container",
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }); // Scope GSAP to the component

    return () => ctx.revert(); // Cleanup all GSAP animations
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Gleam Mobile Detailing | Memphis & Mid-South Mobile Auto Detailing</title>
        <meta name="description" content="Premium mobile auto detailing in Memphis, Cordova, Germantown, Collierville & the Mid-South. Full details, interior cleaning, paint correction & ceramic coating. We come to you!" />
        <link rel="canonical" href="https://gleammobiledetailing.com/" />
        <meta property="og:title" content="Gleam Mobile Detailing | Memphis Mobile Auto Detailing" />
        <meta property="og:description" content="Premium mobile auto detailing in Memphis & the Mid-South. Full details, interior cleaning, paint correction & ceramic coating. We come to you!" />
        <meta property="og:url" content="https://gleammobiledetailing.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://gleammobiledetailing.com/assets/camaro-detail.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gleam Mobile Detailing | Memphis Mobile Auto Detailing" />
        <meta name="twitter:description" content="Premium mobile auto detailing in Memphis & the Mid-South. We come to you!" />
        <meta name="twitter:image" content="https://gleammobiledetailing.com/assets/camaro-detail.jpeg" />
      </Helmet>
      {/* Hero Section with Scroll Animation */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <video
          key="/assets/carwash1_optimized.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/carwash1_optimized.mp4?v=2" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-20" />
        <div className="relative z-30 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white hero-content-wrapper">
              <p className="hero-text-element text-primary font-semibold tracking-widest uppercase mb-4 opacity-0 translate-y-8">
                Gleam Mobile Detailing
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="hero-text-element block opacity-0 translate-y-8">We Bring The</span>
                <span className="text-red-gradient inline-block mt-2">
                  {"Gleam To You".split("").map((char, index) => (
                    <span
                      key={index}
                      className="hero-char-element opacity-0"
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="hero-text-element text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-xl opacity-0 translate-y-8">
                Premium mobile auto detailing at your convenience. We come to you
                with meticulous attention to detail and showroom-quality results.
              </p>
              <p className="hero-text-element text-lg text-primary font-medium mb-8 opacity-0 translate-y-8 flex items-center gap-2">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>We proudly serve Memphis and surrounding areas.</span>
              </p>
              <div className="hero-text-element flex flex-col sm:flex-row gap-4 opacity-0 translate-y-8">
                <div className="relative group button-magnetic-wrapper inline-block">
                  <Button asChild size="lg" className="text-base md:text-lg font-semibold px-6 md:px-8 shadow-xl shadow-primary/30 w-full sm:w-auto relative group overflow-hidden transition-transform duration-300">
                    <a href="tel:662-310-3732">
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                      <Phone className="h-5 w-5 mr-2" />
                      Call (662) 310-3732
                    </a>
                  </Button>
                </div>
                <div className="relative group button-magnetic-wrapper inline-block">
                  <Button asChild variant="outline" size="lg" className="text-base md:text-lg font-semibold px-6 md:px-8 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto transition-transform duration-300">
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-card border-y border-border py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-12 trust-badges-container"
          >
            {trustBadges.map((badge, i) => (
              <div
                key={badge.text}
                className="gsap-trust-badge flex items-center justify-center gap-3 p-4 rounded-xl transition-[background-color,box-shadow,color,transform] duration-300 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:scale-105 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 rounded-full" />
                  <badge.icon className="h-8 w-8 text-primary relative z-10" />
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-light">
        <PricingSection5 />
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-red-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the Gleam Mobile Detailing difference. Every vehicle receives meticulous attention to detail.
            </p>
          </div>
          <div
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages.map((item, i) => (
              <div
                key={i}
                className="gallery-item relative overflow-hidden rounded-xl group shadow-lg shadow-black/20 ring-1 ring-white/5"
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay" />
                {item.type === "video" ? (
                  <video
                    ref={galleryVideoRef}
                    key={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[250px] md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out transition-opacity"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-[250px] md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 md:py-32 bg-background border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 testimonials-header">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-red-gradient">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 testimonials-container">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="gsap-testimonial transition-transform duration-300 hover:-translate-y-2 h-full"
              >
                <Card className="bg-card border-border hover:border-white/10 shadow-xl hover:shadow-2xl transition-[background-color,border-color,box-shadow] duration-300 h-full group">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                      <Star className="w-24 h-24 text-foreground" />
                    </div>
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500 transition-transform hover:scale-125" />
                      ))}
                    </div>
                    <p className="text-foreground/90 mb-6 italic text-base md:text-lg leading-relaxed relative z-10">"{review.text}"</p>
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-foreground font-bold">{review.name.charAt(0)}</span>
                      </div>
                      <p className="text-foreground font-semibold tracking-wide">{review.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-card via-background to-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10 cta-container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="gsap-cta text-4xl md:text-5xl font-bold text-foreground">
              Ready for the <SparklesText text="Ultimate Detail?" colors={{ first: '#FFD700', second: '#FFA500' }} className="inline-block" />
            </h2>
            <p className="gsap-cta text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your appointment today and experience the Gleam Mobile Detailing difference.
              Mobile service available throughout Memphis and the Mid-South area.
            </p>
            <div className="gsap-cta flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
                <Button asChild size="lg" className="h-14 text-lg font-semibold px-10 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-shadow duration-300 w-full sm:w-auto">
                  <a href="tel:662-310-3732">
                    <Phone className="h-5 w-5 mr-3 animate-pulse" />
                    Call Now
                  </a>
                </Button>
              </div>
              <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
                <Button asChild size="lg" variant="outline" className="h-14 text-lg font-semibold px-10 border-primary/30 hover:bg-primary/10 hover:border-primary text-foreground transition-[background-color,border-color,color] duration-300 w-full sm:w-auto">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
