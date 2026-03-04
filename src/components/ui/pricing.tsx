"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const plans = [
    {
        name: "Deep Interior Detail",
        description:
            "Designed for vehicles that need a deep interior reset. Ideal for buildup, stains, pet hair, and heavily used interiors.",
        price: 165,
        yearlyPrice: 275,
        buttonText: "Book Now",
        buttonVariant: "outline" as const,
        features: [
            { text: "Steam Cleaning", icon: <Briefcase size={20} /> },
            { text: "Upholstery Care", icon: <Database size={20} /> },
            { text: "Odor Treatment", icon: <Server size={20} /> },
        ],
        includes: [
            "Includes:",
            "Thorough Interior Vacuum",
            "Carpet & Seat Steam Cleaning",
            "Upholstery Cleaning & Conditioning",
            "Air-Compressed Vent Cleaning",
            "Door Panels & Console Detailed",
            "Interior Glass Cleaned",
        ],
    },
    {
        name: "Gleam Full Detail",
        description:
            "A comprehensive deep clean inside and out. Ideal for vehicles with moderate to heavy buildup that require extra attention.",
        price: 265,
        yearlyPrice: 325,
        buttonText: "Book Now",
        buttonVariant: "default" as const,
        popular: true,
        features: [
            { text: "Full Interior & Exterior", icon: <Briefcase size={20} /> },
            { text: "Paint Sealant", icon: <Database size={20} /> },
            { text: "Leather Conditioning", icon: <Server size={20} /> },
        ],
        includes: [
            "Includes:",
            "Hand Wash & Dry",
            "Carpet & Seat Steam Cleaning",
            "Leather Cleaned & Conditioned",
            "Full Interior Wipe Down & Sanitation",
            "Door Jambs Cleaned",
            "3–6 Month Paint Sealant",
        ],
    },
    {
        name: "Enhanced Detail",
        description:
            "A balanced service for vehicles that are regularly cleaned but need more than a basic wash.",
        price: 165,
        yearlyPrice: 275,
        buttonText: "Book Now",
        buttonVariant: "outline" as const,
        features: [
            { text: "Hand Wash & Dry", icon: <Briefcase size={20} /> },
            { text: "Interior Touch-Up", icon: <Database size={20} /> },
            { text: "Paint Protection", icon: <Server size={20} /> },
        ],
        includes: [
            "Includes:",
            "Hand Wash & Dry",
            "Interior Vacuum & Wipe Down",
            "Wheel & Tire Cleaning",
            "Tire Dressing",
            "Door Jambs Cleaned",
            "3-Month Paint Sealant",
        ],
    },
];

const PricingSwitch = ({
    onSwitch,
    value,
    className,
}: {
    onSwitch: (value: string) => void;
    value: string;
    className?: string;
}) => {
    const handleSwitch = (newValue: string) => {
        if (value !== newValue) {
            onSwitch(newValue);
        }
    };

    return (
        <div className={cn("flex justify-center", className)}>
            <div className="relative z-10 mx-auto flex w-fit rounded-xl bg-card border border-border p-1">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSwitch("0")
                    }}
                    className={cn(
                        "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
                        value === "0"
                            ? "text-white" // Text becomes dark on red background
                            : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    {value === "0" && (
                        <motion.span
                            layoutId={"switch"}
                            className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-sm shadow-primary/50 border-primary bg-gradient-to-t from-primary via-primary/80 to-primary"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative">Coupe / Sedan</span>
                </button>

                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSwitch("1")
                    }}
                    className={cn(
                        "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
                        value === "1"
                            ? "text-black"
                            : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    {value === "1" && (
                        <motion.span
                            layoutId={"switch"}
                            className="absolute top-0 left-0  h-12 w-full rounded-xl border-4 shadow-sm shadow-primary/50 border-primary bg-gradient-to-t from-primary via-primary/80 to-primary"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative flex items-center gap-2">
                        SUV / Truck
                        <span className="rounded-full bg-background/20 px-2 py-0.5 text-xs font-medium text-foreground">
                            Larger
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default function PricingSection5() {
    const [isYearly, setIsYearly] = useState(false); // Using 'isYearly' to represent 'isSUV' for minimal logic change
    const pricingRef = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.2, // Faster staggered animation
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: -20,
            opacity: 0,
        },
    };

    const togglePricingPeriod = (value: string) =>
        setIsYearly(Number.parseInt(value) === 1);

    return (
        <div
            className="px-4 py-12 md:py-24 min-h-screen max-w-7xl mx-auto relative"
            ref={pricingRef}
            id="pricing"
        >
            <article className="text-left mb-6 space-y-4 max-w-2xl mx-auto text-center">
                <h2 className="md:text-6xl text-3xl capitalize font-medium text-foreground mb-4">
                    <VerticalCutReveal
                        splitBy="words"
                        staggerDuration={0.15}
                        staggerFrom="first"
                        reverse={true}
                        containerClassName="justify-center text-red-gradient"
                        autoStart={false}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 40,
                            delay: 0,
                        }}
                    >
                        Most Booked Services
                    </VerticalCutReveal>
                </h2>

                <TimelineContent
                    as="p"
                    animationNum={0}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                    className="md:text-base text-sm text-muted-foreground w-full mx-auto"
                >
                    Professional detailing packages tailored to your vehicle's needs. From maintenance washes to ceramic coatings.
                </TimelineContent>

                <TimelineContent
                    as="div"
                    animationNum={1}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                >
                    <PricingSwitch
                        onSwitch={togglePricingPeriod}
                        value={isYearly ? "1" : "0"}
                        className="w-fit mx-auto mt-6"
                    />
                </TimelineContent>
            </article>

            <div className="grid md:grid-cols-3 gap-6 py-6">
                {plans.map((plan, index) => (
                    <TimelineContent
                        key={plan.name}
                        as="div"
                        animationNum={2 + index}
                        timelineRef={pricingRef}
                        customVariants={revealVariants}
                        className="flex"
                    >
                        <Card
                            className={`relative border h-full flex flex-col justify-between w-full ${plan.popular
                                ? "ring-2 ring-primary bg-primary/5 hover:bg-primary/10 border-primary/50"
                                : "bg-card hover:bg-card/80 border-border"
                                } transition-colors duration-300`}
                        >
                            <CardHeader className="text-left">
                                <div className="flex justify-between items-start">
                                    <h3 className="xl:text-2xl md:text-xl text-2xl font-semibold text-foreground mb-2">
                                        {plan.name}
                                    </h3>
                                    {plan.popular && (
                                        <div className="">
                                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                                                Popular
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <p className="min-h-[40px] xl:text-sm md:text-xs text-sm text-muted-foreground mb-4">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-semibold text-foreground">
                                        $
                                        <NumberFlow
                                            format={{
                                                currency: "USD",
                                            }}
                                            value={isYearly ? plan.yearlyPrice : plan.price}
                                            className="text-4xl font-semibold text-foreground"
                                        />
                                    </span>
                                    <span className="text-muted-foreground ml-1">
                                        + starting
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-0 flex-grow flex flex-col justify-end">
                                <Link to="/booking" className="w-full">
                                    <button
                                        className={`w-full mb-6 p-4 text-lg rounded-xl transition-[background-color,border-color,color,box-shadow,filter] duration-300 ${plan.popular
                                            ? "bg-gradient-to-t from-primary to-primary/80 shadow-lg shadow-primary/20 border border-primary text-primary-foreground hover:brightness-110"
                                            : "bg-card border border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </Link>

                                <div className="space-y-3 pt-4 border-t border-border">
                                    <h4 className="font-medium text-base text-foreground mb-3">
                                        {plan.includes[0]}
                                    </h4>
                                    <ul className="space-y-2 font-medium">
                                        {plan.includes.slice(1).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <span className="h-5 w-5 bg-card border border-primary rounded-full flex items-center justify-center mt-0.5 mr-3 shrink-0">
                                                    <CheckCheck className="h-3 w-3 text-primary" />
                                                </span>
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                ))}
            </div>
        </div>
    );
}
