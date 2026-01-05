import React from 'react';
import { motion } from 'framer-motion';

const MapEmbed = () => {
    // Note: This is a placeholder for JB Momos Hub & Cafeteria location
    // The user can update the 'q' parameter with their actual coordinates or precise address
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.3520436086105!2d75.32330277499707!3d19.86735122665379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb993d52508951%3A0xbc1551f00214b14c!2sJB%20Momos%20Hub%20%26%20Food%20corner!5e0!3m2!1sen!2sin!4v1767642980904!5m2!1sen!2sin";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-full min-h-[450px] rounded-3xl overflow-hidden border-2 border-white/5 relative group bg-neutral-900"
        >
            <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
            <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)' }} // Dark mode style for Google Maps
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JB Momos Hub Location"
                className="grayscale-[0.5] contrast-[1.1]"
            ></iframe>
        </motion.div>
    );
};

export default MapEmbed;
