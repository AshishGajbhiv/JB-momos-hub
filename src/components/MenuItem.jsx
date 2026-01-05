import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const MenuItem = ({ name, description, price, isSpecial }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className={`relative flex justify-between items-start p-4 rounded-2xl transition-all duration-300 group
        ${isSpecial
                    ? 'bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 shadow-lg shadow-orange-500/5'
                    : 'hover:bg-white/5 border border-transparent hover:border-white/5'
                }`}
        >
            <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-1">
                    <h4 className={`text-lg font-bold ${isSpecial ? 'text-orange-400' : 'text-white'}`}>
                        {name}
                    </h4>
                    {isSpecial && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500 text-[10px] font-black uppercase text-black">
                            <Star size={10} fill="currentColor" /> JB's Special
                        </span>
                    )}
                </div>
                {description && (
                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            {price && (
                <div className="text-right">
                    <span className={`text-lg font-black ${isSpecial ? 'text-red-500' : 'text-orange-500'}`}>
                        ₹{price}
                    </span>
                </div>
            )}

            {/* Subtle hover indicator */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-500 transition-all group-hover:h-3/4 rounded-full" />
        </motion.div>
    );
};

export default MenuItem;
