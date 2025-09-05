'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

type FooterParallaxProps = {
  children: [React.ReactNode, React.ReactNode]; // [lastMainSection, footer]
  className?: string;
};

export default function FooterParallax({ children, className }: FooterParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const yFooter = useTransform(scrollYProgress, [0, 1], ['30%', '0%']);

  return (
    <div ref={containerRef} className={className}>
      <div className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ y: yContent }} className="relative z-10 h-screen will-change-transform">
            {children[0]}
          </motion.div>
          <motion.div style={{ y: yFooter }} className="absolute inset-0 z-0 will-change-transform">
            {children[1]}
          </motion.div>
        </div>
      </div>
    </div>
  );
}