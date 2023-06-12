import React, { useState } from "react";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedbull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import { PlayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Video from "../../components/videoPopup/Video";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/UqFzWx8X5AM";

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full pb-0">
      <motion.div className="md:flex md:flex-row justify-around items-center mx-auto w-5/6 md:h:5/6">
        <div className="mt-32 md:basis-3/5">
          <motion.div
            className=" md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="" />
              </div>
            </div>
            <p className="mt-8 text-lg">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* Action button */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button className="bg-secondary-500 py-2 px-8 rounded-lg hover:bg-primary-500 font-medium hover:text-white transition duration-300 shadow-md">
              Join now
            </button>
            <div className="flex items-center relative">
              <button
                className="rounded-full bg-primary-500  items-center justify-center shadow-xl p-3"
                onClick={openModal}
              >
                <PlayIcon className="h-6 w-6 text-white" />
              </button>
                <Video
                  isOpen={isOpen}
                  videoUrl={videoUrl}
                  onClose={closeModal}
                />
              <p className="px-4">See How It Works</p>
            </div>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-5 md:ml-40 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-pageGraphic" srcset="" />
        </div>
      </motion.div>
      {/* Sponsor */}
      <div className="w-full h-[120px] bg-primary-100 py-10 mt-8">
        <div className="mx-auto md:w-5/6">
          <div className="flex md:w-3/5 md:gap-8 justify-around items-center">
            <img src={SponsorRedbull} alt="Rebull" className="object-cover" />
            <img src={SponsorForbes} alt="Forbes" className="object-cover" />
            <img src={SponsorFortune} alt="Fortune" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
