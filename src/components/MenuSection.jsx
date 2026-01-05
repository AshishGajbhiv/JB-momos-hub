import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const MenuSection = ({ title, items, icon: Icon, id }) => {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 last:mb-0 scroll-mt-32"
        >
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                {Icon && <Icon className="text-orange-500 w-8 h-8" />}
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                    {title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {items.map((item, index) => (
                    <MenuItem
                        key={`${title}-${index}`}
                        {...item}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default MenuSection;
