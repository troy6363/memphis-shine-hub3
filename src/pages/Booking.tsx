import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Booking = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Monitor for URL changes that might be redirects failing to unmount
    useEffect(() => {
        console.log("[DEBUG-GHL] Location changed:", location.pathname + location.search + location.hash);
        if (location.pathname.includes('thank-you')) {
            console.log("[DEBUG-GHL] Direct path match for thank-you detected.");
        }
    }, [location]);

    // Listen for GHL messages to handle successful booking
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Log everything with a unique prefix for easy identification
            console.log("[DEBUG-GHL] Message received:", event.data);

            // Keywords to look for
            const successKeywords = [
                'confirmed', 'success', 'order-placed', 'booking-complete',
                'appointment-confirmed', 'payment_success', 'thank-you',
                'thankyou', 'placed', 'complete', 'done', 'thank'
            ];

            const checkValue = (val: any): boolean => {
                if (typeof val === 'string') {
                    const lower = val.toLowerCase();
                    return successKeywords.some(k => lower.includes(k));
                }
                if (typeof val === 'object' && val !== null) {
                    return Object.values(val).some(v => checkValue(v));
                }
                return false;
            };

            if (checkValue(event.data) || (event.data && event.data.status === 'success')) {
                console.log("[DEBUG-GHL] SUCCESS DETECTED via recursive scan. Redirecting...");
                // Double-tap redirect: React router first, then hard browser redirect
                navigate('/thank-you');
                setTimeout(() => {
                    window.location.href = '/thank-you';
                }, 100);
            }
        };

        window.addEventListener('message', handleMessage);

        // Fallback: Detect if iframe redirects to our own domain (requires GHL Redirect URL setting)
        const checkRedirect = setInterval(() => {
            try {
                if (iframeRef.current && iframeRef.current.contentWindow) {
                    const iframeUrl = iframeRef.current.contentWindow.location.href;
                    // If we can read the URL, it means it's same-origin (redirected to our site)
                    if (iframeUrl.includes('/thank-you') || iframeUrl.includes('thank') || iframeUrl.includes('confirm')) {
                        console.log("[DEBUG-GHL] Same-origin redirect detected via checkRedirect. Redirecting parent...");
                        navigate('/thank-you');
                        window.location.href = '/thank-you';
                        clearInterval(checkRedirect);
                    }
                }
            } catch (e) {
                // Ignore cross-origin errors
            }
        }, 1000);

        return () => {
            window.removeEventListener('message', handleMessage);
            clearInterval(checkRedirect);
        };
    }, [navigate]);

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
        console.log("[DEBUG-GHL] Booking component mounted/re-mounted. Scrolling to top.");
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
                        ref={iframeRef}
                        src="https://api.smartwebmemphis.com/booking/n6jsbtFEZSPGQpPA0OP6"
                        title="Book a Detail - Gleam Mobile Detailing"
                        className="w-full border-0"
                        style={{ minHeight: "1200px", background: "transparent" }}
                        loading="lazy"
                        allow="payment"
                        onLoad={() => console.log("[DEBUG-GHL] Iframe loaded/reloaded")}
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
