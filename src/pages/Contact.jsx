import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import InfoCard from '../components/InfoCard';
import MapEmbed from '../components/MapEmbed';
import { MapPin, Clock, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            content: "Beside Tara Pan Center, Gurudwara Road, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
            subContent: "Open in Google Maps for directions"
        },
        {
            icon: Clock,
            title: "Opening Hours",
            content: "11:00 AM - 10:30 PM",
            subContent: "Monday - Sunday (Open all 7 days)"
        },
        {
            icon: Phone,
            title: "Phone Number",
            content: "+91 9766269290",
            subContent: "Call us for home delivery or bulk orders"
        },
        {
            icon: Mail,
            title: "Email Address",
            content: "jitendrabhise707@gmail.com",
        }
    ];

    return (
        <div className="min-h-screen bg-[#0f0f0f]">
            <Navbar />

            <div className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-sm tracking-widest uppercase"
                        >
                            Visit Us
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6"
                        >
                            Come for the <span className="text-gradient">Taste</span>,<br />
                            Stay for the <span className="text-orange-500">Vibe</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg max-w-2xl mx-auto"
                        >
                            Find us in the heart of the city. We're serving up hot momos and fresh vibes daily.
                            Drop by for a quick bite or a relaxed coffee.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Info Cards Side */}
                        <div className="grid grid-cols-1 gap-6">
                            {contactInfo.map((info, index) => (
                                <InfoCard
                                    key={info.title}
                                    {...info}
                                    delay={index * 0.1}
                                />
                            ))}

                            {/* Social Media Strip */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 p-8 rounded-3xl bg-orange-500/10 border border-orange-500/20"
                            >
                                <span className="text-white font-bold whitespace-nowrap">Follow our journey:</span>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/jb_momos_hub" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-neutral-900 border border-white/5 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all">
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Map Side */}
                        <div className="h-full min-h-[500px]">
                            <MapEmbed />
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2025 JB Momos Hub & Cafeteria. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
