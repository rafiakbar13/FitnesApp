import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "../../assets/contactUsPageGraphic.png";
const ContactUs = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  const inputStyle = `w-full mt-5 rounded-lg bg-primary-500 px-8 py-3 placeholder-white`;
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-20 pb-32">
      <motion.div className="md:w-3/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      >
        <h1 className="font-bold text-3xl basis-3/5 font-montserrat">
          <span className="text-primary-500">JOIN NOW </span>
          TO GET IN SHAPE
        </h1>
        <p className="my-5">
          Transform your body and reclaim your fitness journey by joining us now. Get in shape, unlock your full potential, and experience a new level of vitality and confidence that will positively impact every aspect of your life..
        </p>
      </motion.div>

      <div className="mt-10 md:flex justify-between gap-8">
        <motion.div className="basis-3/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        >
          <form 
          action="https://formsubmit.co/talefairy400@gmail.com" 
          onSubmit={onSubmit} 
          target="_blank"
          method="POST"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="NAME"
              className={inputStyle}
              {...register("name", {
                required: true,
                maxLength: 50
              })}
            />
            {errors.name && (
                <p className="mt-1 text-red-500 text-sm">
                    {errors.name.type === "required" && "This field required."}
                    {errors.name.type === "maxLength" && "Max length is 50."}
                </p>
            )}
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className={inputStyle}
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            />
            {errors.email && (
                <p className="mt-1 text-red-500 text-sm">
                    {errors.email.type === "required" && "This field required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </p>
            )}
            <textarea
              name="message"
              id="message"
              cols={50}
              rows={4}
              placeholder="Message"
              className={inputStyle}
              {...register("message", {
                required: true,
                maxLength: 1000
                })
              }
            />
            {errors.message &&(
                <p className="text-red-500 text-sm">
                    {errors.message.type === "required" && "This field required."}
                    {errors.message.type === "maxLength" && "Max length is 1000 char."}
                </p>
            )}
            <button type="submit" className="mt-5 rounded-lg font-medium bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
          </form>
        </motion.div>
        <motion.div className="relative mt-9 md:mt-0 basis-2/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        >
            <div className="before:absolute before:content-evolvetext before:z-[-1] w-full before:-bottom-20 before:-right-5">
                <img className="w-full mt-4" src={ContactUsPageGraphic} alt="" />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
