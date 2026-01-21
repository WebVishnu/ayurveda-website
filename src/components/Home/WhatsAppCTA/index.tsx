"use client"
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const WhatsAppCTA = () => {
    return (
        <section className="lg:py-16 py-12 bg-linear-to-r from-primary to-secondary">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" data-aos="fade-up">
                        WHATSAPP ORDERING SERVICE
                    </h2>
                    <p className="text-white/90 text-lg mb-6" data-aos="fade-up" data-aos-delay="100">
                        PLACE YOUR ORDERS AT{" "}
                        <Link 
                            href="https://wa.me/919667794027" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:underline inline-flex items-center gap-2"
                        >
                            <Icon icon="mdi:whatsapp" className="text-2xl" />
                            +91-9667794027
                        </Link>
                    </p>
                    <Link
                        href="https://wa.me/919667794027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Icon icon="mdi:whatsapp" className="text-2xl" />
                        Order on WhatsApp
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhatsAppCTA;
