import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Categories from '../components/Categories';

const Home = () => {
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <div className="min-h-screen bg-[#0f0f0f]">
            <Navbar />
            <Hero />
            <About />
            <Categories />

            {/* Footer Placeholder */}
            <footer id="contact" className="py-12 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-7xl auto px-4 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2024 JB Momos Hub & Cafeteria. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
