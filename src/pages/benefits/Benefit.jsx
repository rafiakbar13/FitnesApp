import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

const Benefit = ({ icon, title, description }) => {
  return (
    <motion.div 
    variants={childVariant}
    className="mt-5 border-2 border-gray-100 rounded-md px-4 py-8 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">{icon}</div>
      </div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="my-4 ">{description}</p>
      <AnchorLink href="#contactus" className="underline text-gray-500 hover:text-secondary-500 font-bold">
       <p>Learn More</p>
    </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
