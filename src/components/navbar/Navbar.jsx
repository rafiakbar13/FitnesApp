import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.png";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const isAboveMendiumScreens = window.matchMedia("(min-width: 1060px)").matches;
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className="">
      <div className={`w-full md:flex md:items-center fixed z-50 py-3 px-20 top-0 ${scrolled ? "bg-primary-300 " : "bg-transparent"}`}>
      <Link to="/">
        <img src={logo} alt="" className="object-contain" />
      </Link>
        <div className="md:flex items-center justify-between md:w-5/6 md:mx-auto hidden w-full ">
          <ul className="md:flex gap-4 text-base ">
            { navLinks.map((nav) => (
              <li key={nav.id} className={`${scrolled ? "text-white" : "text-gray-500"} hover:text-primary-500 text-lg font-medium transtion duration-300`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="md:flex items-center justify-center gap-4">
            <button className="">Sign In</button>
            <button className="rounded-md bg-secondary-500 px-4 py-2 hover:bg-primary-500 hover:text-white transition duration-300">Become a member</button>
          </div>
        </div>

          <button 
          className="rounded-full bg-secondary-500 p-2 sm:hidden absolute right-10 top-1 "
          onClick={() => setToggle(!toggle)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
      </div>
      {/* MobileMenu */}
      { toggle && (
        <div className="fixed right-0 z-50 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setToggle(!toggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-base justify-center items-center">
            { navLinks.map((nav) => (
              <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-gray-500"} hover:text-primary-500 text-lg font-medium transtion duration-300`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
           <div className="flex flex-col gap-4 text-base justify-center items-center py-4">
            <button className="text-lg hover:bg-primary-500 px-3 py-2 rounded-md hover:text-white transition duration-300">Sign In</button>
            <button className="rounded-md bg-secondary-500 px-4 py-2 hover:bg-primary-500 hover:text-white transition duration-300">Become a member</button>
        </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
