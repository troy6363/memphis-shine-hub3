import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const ThankYou = () => {
    return (
        <Layout>
            <section className="py-24 md:py-32 min-h-[70vh] flex items-center">
                <div className="container mx-auto px-4">
                    <Card className="max-w-2xl mx-auto bg-card border-border overflow-hidden">
                        {/* Accent bar */}
                        <div className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />

                        <CardContent className="p-8 md:p-12 text-center">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                                <CheckCircle className="h-10 w-10 text-primary" />
                            </div>

                            {/* Heading */}
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                                Thank <span className="text-red-gradient">You!</span>
                            </h1>

                            {/* Message */}
                            <p className="text-lg text-muted-foreground mb-2">
                                Your request has been received.
                            </p>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                A member of our team will reach out to you shortly and to
                                answer questions that you may have.
                            </p>

                            {/* Divider */}
                            <div className="border-t border-border my-8" />

                            {/* Call prompt */}
                            <p className="text-sm text-muted-foreground mb-2">
                                Need immediate assistance?
                            </p>
                            <a
                                href="tel:1-877-460-1756"
                                className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors mb-8"
                            >
                                <Phone className="h-5 w-5" />
                                1-877-460-1756
                            </a>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild variant="outline">
                                    <Link to="/">
                                        <ArrowLeft className="h-4 w-4 mr-2" />
                                        Back to Home
                                    </Link>
                                </Button>
                                <Button asChild>
                                    <Link to="/services">
                                        View Our Services
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </Layout>
    );
};

export default ThankYou;
