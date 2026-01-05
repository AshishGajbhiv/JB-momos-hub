import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, MapPin, Clock, Utensils } from 'lucide-react';
import aboutImage from '../assets/about_food.png';

const About = () => {
    const highlights = [
        {
            icon: Heart,
            title: "Made with Love",
            desc: "Every order is prepared with fresh ingredients and authentic street-style recipes."
        },
        {
            icon: ShieldCheck,
            title: "Quality First",
            desc: "We prioritize hygiene and taste, ensuring every bite is as safe as it is delicious."
        },
        {
            icon: MapPin,
            title: "Locally Sourced",
            desc: "Supporting our community by sourcing ingredients from local vendors daily."
        },
        {
            icon: Clock,
            title: "Always Fresh",
            desc: "No pre-cooked stuff. Your food is prepared hot only when you order it."
        }
    ];

    return (
        <section id="about" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
            {/* Background highlights */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-500/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-red-500 font-black tracking-widest uppercase text-sm mb-4 block">
                                Our Story
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                                More Than Just a <span className="text-orange-500">Food Hub</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                At JB Momos Hub & Cafeteria, we believe street food is an emotion.
                                What started as a small dream to serve the crunchiest Kurkure Momos has grown into
                                a beloved spot for momo lovers and coffee addicts alike.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors group"
                                >
                                    <item.icon className="text-orange-500 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-orange-500/20 relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <div className="absolute inset-0 flex items-end p-8 z-20">
                                    <div className="bg-orange-600 p-6 rounded-2xl shadow-2xl">
                                        <p className="text-white font-black text-2xl">ESTD.</p>
                                        <p className="text-white/90 font-bold text-4xl mt-1">2025</p>
                                    </div>
                                </div>
                                <img
                                    src={aboutImage}
                                    alt="JB Momos Special"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
