import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MenuSection from '../components/MenuSection';
import { Utensils, Flame, Pizza as PizzaIcon, Beef, Droplets, Coffee, Sparkles, Zap } from 'lucide-react';

const menuData = [
    {
        title: "JB's Special",
        id: "jbs-special",
        icon: Sparkles,
        items: [
            { name: "JB's Special Thick Cold Coffee", price: 120, isSpecial: true },
            { name: "JB's Special Chicken Popcorn", price: 150, isSpecial: true },
            { name: "Cheese Corn Steam Momos", price: 100, isSpecial: true },
            { name: "Cheese Corn Fried Momos", price: 110, isSpecial: true },
            { name: "Cheese Corn Kurkure Momos", price: 120, isSpecial: true },
            { name: "Cold Coffee with Ice Cream", price: 100, isSpecial: true },
            { name: "Cold Coffee with Choco Chips", price: 110, isSpecial: true },
        ]
    },
    {
        title: "Steam Momos",
        id: "steam-momos",
        icon: Utensils,
        items: [
            { name: "Mix Veg Momos", price: 60 },
            { name: "Paneer Momos", price: 70 },
            { name: "Corn Momos", price: 70 },
            { name: "Chicken Momos", price: 70 },
            { name: "Cheese Corn Momos", price: 100 },
        ]
    },
    {
        title: "Fried Momos",
        id: "fried-momos",
        icon: Flame,
        items: [
            { name: "Mix Veg Momos", price: 70 },
            { name: "Paneer Momos", price: 80 },
            { name: "Corn Momos", price: 80 },
            { name: "Chicken Momos", price: 80 },
            { name: "Cheese Corn Momos", price: 110 },
        ]
    },
    {
        title: "Kurkure Momos",
        id: "kurkure-momos",
        icon: Zap,
        items: [
            { name: "Mix Veg Momos", price: 90 },
            { name: "Paneer Momos", price: 90 },
            { name: "Corn Momos", price: 90 },
            { name: "Chicken Momos", price: 90 },
            { name: "Cheese Corn Momos", price: 120 },
        ]
    },
    {
        title: "Maggi",
        id: "maggi",
        icon: Droplets,
        items: [
            { name: "Masala Maggi", price: 50 },
            { name: "Vegetable Maggi", price: 60 },
            { name: "Cheese Maggi", price: 70 },
        ]
    },
    {
        title: "Pizza",
        id: "pizza",
        icon: PizzaIcon,
        items: [
            { name: "Margarita Pizza", price: 110 },
            { name: "Paneer Pizza", price: 150 },
            { name: "Corn Pizza", price: 150 },
            { name: "Veg Exotic Pizza", price: 140 },
        ]
    },
    {
        title: "French Fries",
        id: "french-fries",
        icon: Beef,
        items: [
            { name: "Salted Fries", price: 80 },
            { name: "Chatpata Fries", price: 90 },
            { name: "Peri Peri Fries", price: 90 },
        ]
    },
    {
        title: "Burger",
        id: "burger",
        icon: (props) => <Utensils {...props} />, // Using Utensils as placeholder for Burger
        items: [
            { name: "Veg Burger", price: 80 },
            { name: "Cheese Burger", price: 90 },
        ]
    },
    {
        title: "Coffee & Shakes",
        id: "coffee-shakes",
        icon: Coffee,
        items: [
            { name: "Hot Coffee", price: 30 },
            { name: "Classic Cold Coffee", price: 70 },
            { name: "Oreo Shake", price: 110 },
            { name: "KitKat Shake", price: 110 },
            { name: "Chocolate Shake", price: 110 },
        ]
    }
];

const Menu = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="min-h-screen bg-[#0f0f0f]">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-sm tracking-widest uppercase"
                        >
                            JB's Menu
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6"
                        >
                            Savor the <span className="text-gradient">Flavors</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg max-w-2xl mx-auto"
                        >
                            Explore our curated selection of hot momos, cheesy snacks, and refreshing shakes.
                            Crafted fresh, served daily.
                        </motion.p>
                    </div>

                    {/* Categories Loop */}
                    <div className="space-y-24">
                        {menuData.map((category) => (
                            <MenuSection key={category.title} {...category} />
                        ))}
                    </div>

                    {/* Footer Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-32 pt-8 border-t border-white/5 text-center"
                    >
                        <p className="text-gray-500 text-sm italic">
                            * Menu items and prices may vary according to availability and season.
                        </p>
                        <div className="mt-8 flex justify-center gap-6 text-gray-400">
                            <span className="flex items-center gap-2 text-xs md:text-sm"><Utensils size={16} className="text-orange-500" /> Freshly Prepared</span>
                            <span className="flex items-center gap-2 text-xs md:text-sm"><Flame size={16} className="text-red-500" /> Street Style</span>
                            <span className="flex items-center gap-2 text-xs md:text-sm"><Coffee size={16} className="text-amber-500" /> Cafe Vibes</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
