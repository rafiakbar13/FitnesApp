import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";
const classes = [
  {
    name: "Weight Training Classes",
    description:
      "Weight Training Classes are an exceptional opportunity for individuals of all fitness levels to build strength, sculpt their physique, and achieve remarkable results. These classes focus on incorporating various weightlifting exercises and techniques to help you reach your fitness goals efficiently and effectively. ",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Yoga Classes provide a serene and rejuvenating space for individuals of all levels to explore the harmonious union of mind, body, and spirit. Rooted in ancient practices, our yoga classes offer a sanctuary where you can cultivate balance, flexibility, strength, and inner peace.",
    image: image2,
  },
  {
    name: "Cardio Classes",
    description:
      "Ignite your cardiovascular fitness and unleash your inner powerhouse with our invigorating Cardio Classes. Designed to get your heart pumping and your energy soaring, these classes offer an exhilarating and effective way to burn calories, improve endurance, and achieve optimal cardiovascular health",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on an extraordinary journey of excitement, discovery, and personal growth with our thrilling Adventure Classes. Designed for adventure enthusiasts and those seeking to break free from the ordinary, these classes offer a unique blend of adrenaline-pumping activities and immersive experiences that will ignite your sense of adventure like never before",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Elevate your fitness journey to new heights with our exceptional Fitness Classes. Whether you're a fitness enthusiast or just starting your wellness path, our diverse range of classes offers something for everyone, helping you achieve your health and fitness goals in a fun and engaging way.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Unleash your full potential and achieve greatness with our transformative Training Classes. Designed to empower individuals of all levels, our classes offer a structured and systematic approach to help you develop the skills, knowledge, and expertise needed to excel in your chosen field.",
    image: image6,
  },
];

const OurClasses = () => {
  return (
    <section id="ourclass" className="w-full py-20 bg-primary-100">
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <h1 className="font-bold text-3xl basis-3/5 font-montserrat">
            OUR CLASSES
          </h1>
          <p className="py-5 text-lg">
            Our classes are the epitome of exhilaration, designed to ignite your passion for fitness and leave you craving for more. Step into a world where every movement is a celebration of strength, flexibility, and pure joy.
          </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((classItem, index) => (
            <Class key={index} {...classItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;
