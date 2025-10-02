'use client'
import React, { useState, Fragment } from 'react';
import { karla } from '../lib/fonts';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { HiX, HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Menu, Transition, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shubhkhatri1209/', icon: '/linkedin.svg' },
  { name: 'GitHub', href: 'https://github.com/shubhktr1012', icon: '/github.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/shubh_khatri12', icon: '/instagram.svg' },
];

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
    <nav className={`w-full px-6 ${karla.className} relative border-b border-gray-400/20`}>
      <div className="flex items-center justify-between min-w-full py-6 relative z-30">
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
          <a href="/" className="body-text hover:text-primary transition-colors">
            Home
          </a>
          <a href="/services" className="body-text hover:text-primary transition-colors">
            Work & Services
          </a>
          <a href="/contact" className="body-text hover:text-primary transition-colors">
            Contact Me
          </a>
          
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center items-center body-text hover:text-primary transition-colors">
                Socials
                <HiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white border-2 border-black focus:outline-none z-10">
                <div className="py-1">
                  {socialLinks.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active: itemActive }) => (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            itemActive ? 'bg-black text-white' : 'text-black'
                          } group flex items-center w-full px-4 py-3 text-sm`}
                        >
                          <Image 
                            src={item.icon} 
                            alt={item.name} 
                            width={20} 
                            height={20} 
                            className={`mr-3 filter ${itemActive ? 'brightness-0 invert' : 'brightness-0'}`}
                          />
                          {item.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden z-40">
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
            className={`md:hidden fixed top-0 left-0 w-full h-screen text-5xl flex flex-col items-center justify-center space-y-8 z-20 bg-white`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{ pointerEvents: 'auto' }}
          >
            <motion.a href="/" variants={linkVariants}>Home</motion.a>
            <motion.a href="/services" variants={linkVariants}>Work & Services</motion.a>
            <motion.a href="/contact" variants={linkVariants}>Contact Me</motion.a>
            <motion.div 
              variants={linkVariants} 
              className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-x-6"
            >
              <a href="https://www.linkedin.com/in/shubhkhatri1209/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={46} height={46} className="filter brightness-0" />
              </a>
              <a href="https://github.com/shubhktr1012" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="GitHub" width={46} height={46} className="filter brightness-0" />
              </a>
              <a href="https://www.instagram.com/shubh_khatri12" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="Instagram" width={46} height={46} className="filter brightness-0" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}