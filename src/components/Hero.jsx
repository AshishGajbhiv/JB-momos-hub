import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Pizza, Coffee, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 font-semibold text-sm mb-8"
                >
                    <Utensils size={16} />
                    Best Street Food in Town
                </motion.div>

                {/* Big Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black text-white leading-tight mb-6"
                >
                    Hot <span className="text-red-500">Momos</span>,<br />
                    Cheesy <span className="text-orange-500">Pizza</span> & <br />
                    <span className="text-gradient">Fresh Coffee</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                >
                    Explore a world of flavors at JB Momos Hub & Cafeteria. From sizzling street favorites to cozy café vibes, we serve love in every bite.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 mt-12"
                >
                    <Link
                        to="/menu"
                        className="btn-primary group flex items-center justify-center gap-2 text-lg px-10 py-5"
                    >
                        View Full Menu
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                    <FloatingIcon icon={<Pizza className="text-red-500/20" size={64} />} x="10%" y="20%" delay={0} />
                    <FloatingIcon icon={<Coffee className="text-orange-500/20" size={48} />} x="85%" y="15%" delay={2} />
                    <FloatingIcon icon={<Utensils className="text-yellow-500/20" size={56} />} x="15%" y="70%" delay={4} />
                    <div className="absolute top-[40%] right-[10%] text-white/5 text-9xl font-black select-none">TASTY</div>
                    <div className="absolute bottom-[20%] left-[5%] text-white/5 text-9xl font-black select-none">FRESH</div>
                </div>
            </div>
        </section>
    );
};

const FloatingIcon = ({ icon, x, y, delay }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            y: [0, -20, 0],
        }}
        transition={{
            opacity: { duration: 1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }
        }}
        className="absolute"
        style={{ left: x, top: y }}
    >
        {icon}
    </motion.div>
);

export default Hero;
