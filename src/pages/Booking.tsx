import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Booking = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showCalendar, setShowCalendar] = useState(false);

    // Video slow-motion + fade effect
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.playbackRate = 0.1;
            video.style.transition = "opacity 0.3s ease";

            const handleLoaded = () => { video.playbackRate = 0.1; };
            const handleTimeUpdate = () => {
                const fadeOutPoint = video.duration - 0.6;
                if (video.currentTime >= fadeOutPoint) {
                    video.style.opacity = "0";
                } else if (video.currentTime < 0.3) {
                    video.style.opacity = "1";
                }
            };

            video.addEventListener("loadeddata", handleLoaded);
            video.addEventListener("timeupdate", handleTimeUpdate);
            return () => {
                video.removeEventListener("loadeddata", handleLoaded);
                video.removeEventListener("timeupdate", handleTimeUpdate);
            };
        }
    }, []);

    // Delay iframe render so GHL can't steal scroll on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
            setShowCalendar(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Lock scroll position while the iframe is first loading
    useEffect(() => {
        if (!showCalendar) return;

        const savedY = window.scrollY;
        let lockCount = 0;
        const maxLocks = 30;

        const interval = setInterval(() => {
            if (window.scrollY !== savedY && lockCount < maxLocks) {
                window.scrollTo(0, savedY);
            }
            lockCount++;
            if (lockCount >= maxLocks) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
    }, [showCalendar]);

    return (
        <Layout>
            <Helmet>
                <title>Book a Detail | Gleam Mobile Detailing Memphis</title>
                <meta name="description" content="Schedule your mobile detailing appointment online. Choose a service, pick a date, and we'll come to you. Serving Memphis & the Mid-South." />
                <link rel="canonical" href="https://gleammobiledetailing.com/booking" />
                <meta property="og:title" content="Book a Mobile Detail | Gleam Mobile Detailing Memphis" />
                <meta property="og:description" content="Schedule your mobile detailing online. Choose a service and pick a date. We come to you in Memphis & the Mid-South." />
                <meta property="og:url" content="https://gleammobiledetailing.com/booking" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
            </Helmet>
            {/* Hero */}
            <section className="relative py-24 md:py-28 overflow-hidden">
                <video
                    key="/assets/booking-final.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/assets/booking-poster.jpg"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                >
                    <source src="/assets/booking-final.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/60" />
                <div className="relative container mx-auto px-4 text-center z-10">
                    <div className="flex items-center justify-center gap-4 mb-6 text-sm">
                        <Link to="/" className="flex items-center gap-1.5 text-gray-300 hover:text-primary transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            Home
                        </Link>
                        <span className="text-gray-500">|</span>
                        <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                            Services
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Book Your <span className="text-red-gradient">Detail</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Select a service and choose a date that works for you.
                    </p>
                </div>
            </section>

            {/* Embedded GHL Calendar */}
            <section className="w-full">
                {showCalendar ? (
                    <iframe
                        src="https://api.smartwebmemphis.com/booking/n6jsbtFEZSPGQpPA0OP6"
                        title="Book a Detail - Gleam Mobile Detailing"
                        className="w-full border-0"
                        style={{ minHeight: "1200px", background: "transparent" }}
                        loading="lazy"
                        allow="payment"
                        tabIndex={-1}
                    />
                ) : (
                    <div className="flex items-center justify-center" style={{ minHeight: "1200px" }}>
                        <div className="animate-pulse text-muted-foreground">Loading calendar...</div>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Booking;
