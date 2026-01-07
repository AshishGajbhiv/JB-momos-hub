import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Utensils, Flame, Zap, Soup, Pizza, Beef, Coffee } from 'lucide-react';

const categories = [
    { name: "JB's Special", icon: Sparkles, color: 'bg-red-500', emoji: '⭐', id: 'jbs-special' },
    { name: 'Steam Momos', icon: Utensils, color: 'bg-orange-500', emoji: '🥟', id: 'steam-momos' },
    { name: 'Fried Momos', icon: Flame, color: 'bg-red-600', emoji: '🔥', id: 'fried-momos' },
    { name: 'Kurkure Momos', icon: Zap, color: 'bg-yellow-500', emoji: '🌶️', id: 'kurkure-momos' },
    { name: 'Maggi', icon: Soup, color: 'bg-yellow-400', emoji: '🍜', id: 'maggi' },
    { name: 'Pizza', icon: Pizza, color: 'bg-orange-600', emoji: '🍕', id: 'pizza' },
    { name: 'French Fries', icon: Beef, color: 'bg-amber-500', emoji: '🍟', id: 'french-fries' },
    { name: 'Burger', icon: Soup, color: 'bg-red-700', emoji: '🍔', id: 'burger' },
    { name: 'Coffee & Shakes', icon: Coffee, color: 'bg-amber-800', emoji: '☕', id: 'coffee-shakes' },
];

const Categories = () => {
    return (
        <section className="py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-white mb-4"
                        >
                            Explore Our <span className="text-orange-500">Delicious</span> Categories
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400"
                        >
                            From the streets of India to your plate, we bring you the finest flavors with a modern twist.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/menu" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all underline decoration-2 underline-offset-8">
                            View Full Menu
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="food-card group cursor-pointer overflow-hidden relative"
                        >
                            <Link to={`/menu#${cat.id}`} className="block w-full h-full">
                                <div className="flex items-center justify-between relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                                        <p className="text-gray-500 text-sm font-medium">Explore Variety</p>
                                    </div>
                                    <div className="text-5xl group-hover:scale-125 transition-transform duration-500">
                                        {cat.emoji}
                                    </div>
                                </div>

                                {/* Decorative background shape */}
                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${cat.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`} />

                                <motion.div
                                    className="mt-8 flex items-center text-sm font-bold text-gray-400 group-hover:text-orange-500 transition-colors"
                                >
                                    Explore Category <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
