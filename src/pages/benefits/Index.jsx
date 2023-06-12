import React from "react";
// import { benefits } from "../../constants";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Benefit from "./Benefit";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Experience fitness at its finest with our state-of-the-art facilities.We have spared no expense in creating a cutting-edge.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Discover a world of fitness possibilities with our extensive selection of 100's of diverse classes.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Elevate your fitness journey with the guidance and expertise of our team of expert and pro trainers.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto min-h-screen w-5/6 py-16 my-8">
      <div className=" ">
        <motion.div
          className="my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
            MORE THAN JUST GYM.
          </h1>
          <p className="my-5 text-lg">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Benefit */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {benefits.map((benefit) => (
            <Benefit key={benefit.title} {...benefit} />
          ))}
        </motion.div>
        <div className="mt-16 md:mt-28 md:flex justify-between items-center gap-20">
          <img src={BenefitsPageGraphic} alt="" className="" />
          <div className="">
            <div className="relative">
              <div className=" before:absolute before:content-abstractwaves before:-top-20 md:before:-left-15 before:-left-10 before:z-[-1] mt-20">
                <motion.div>
                  <h1 className="font-bold text-3xl basis-3/5 font-montserrat ">
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500"> FIT</span>
                  </h1>
                </motion.div>
              </div>
            </div>
            <motion.div>
              <p className="my-5">
                a testament to the incredible success of our fitness community. Join the movement and embark on a transformative journey towards a healthier, stronger you. Our dedicated members have experienced remarkable results, and now it's your turn to reap the benefits.
              </p>
              <p>
                At our core, we believe that a fit and vibrant life is within reach for everyone. That's why millions of individuals, just like you, have chosen us as their trusted fitness companion. With our state-of-the-art facilities, expert trainers, and an uplifting community, you'll find the perfect environment to unlock your full potential
              </p>
            </motion.div>
            <div className="relative mt-12">
              <div className="before:absolute before:content-sparkles before:right-8 before:-bottom-10">
                <button className="bg-secondary-500 py-2 px-8 rounded-lg hover:bg-primary-500 font-medium hover:text-white transition duration-300">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
