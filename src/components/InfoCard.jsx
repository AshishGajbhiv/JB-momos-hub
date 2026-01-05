import React from 'react';
import { motion } from 'framer-motion';

const InfoCard = ({ icon: Icon, title, content, subContent, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all duration-500 group"
        >
            <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <Icon size={28} />
                </div>
                <div>
                    <h3 className="text-white font-black text-xl mb-3 tracking-tight uppercase">
                        {title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed font-medium">
                        {content}
                    </p>
                    {subContent && (
                        <p className="text-gray-500 mt-2 text-sm">
                            {subContent}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default InfoCard;
