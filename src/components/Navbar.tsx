'use client'
import React, { useState } from 'react';
import { karla } from '../lib/fonts';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //Variants for the menu container animation
  const menuVariants = {
    open: {
      height: '100vh', //Full viewport height
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    closed: {
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChilderen: 0.1,
        staggerDirection: -1
      }
    }
  }

  const linkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  }

  return (
    <nav className={`w-full px-6 ${karla.className}`}>
        <div className="flex items-center justify-between min-w-full py-6">
          {/* Logo/Brand */}
          <div>
            <a href="#" className="hover:text-primary transition-colors">
              <div className="font-semibold text-black heading hidden md:block">SHUBH KHATRI</div>
              <div className="font-semibold text-black heading md:hidden">SHUBH K.</div>
              {/* <div className="text-gray-500 font-bold sub-heading">
                Full Stack & AI Automation Professional
              </div> */}
            </a>
          </div>
 
          {/* Navigation Links - Will be added later */}
          <div className={`hidden md:flex items-center space-x-8`}>
            {/* Navigation items will go here */}
            <a href="#" className="body-text font-light-300 hover:text-primary transition-colors">
              Work
            </a>
            <a href="#" className="body-text hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="body-text transition-colors">
              Contact Me
            </a>
            {/* Minimal custom button will be added here later */}
          </div>

          {/* Mobile Menu Button - Will be implemented later */}
          <button onClick={toggleMenu} className="md:hidden z-30">
            <AnimatePresence mode="wait">
              {isOpen ? (
                // If the menu is open, show the cross icon
                <motion.div 
                key="cross"
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -180, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX size={30} />
              </motion.div>
              ) : (
                //If the menu is closed (default state), show the hamburger icon
                <motion.div
                  key="bars"
                  initial={{ rotate: 180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 180, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiBars3BottomLeft size={30} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-0 left-0 w-full h-[calc(100vh-4rem)] text-5xl flex flex-col items-center justify-center space-y-8 z-20 bg-background"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.a href="/work" variants={linkVariants}>Work</motion.a>
              <motion.a href="/services" variants={linkVariants}>Services</motion.a>
              <motion.a href="/contact" variants={linkVariants}>Contact Me</motion.a>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
}