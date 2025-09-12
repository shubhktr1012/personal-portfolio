'use client'
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 0.8, smoothWheel: true, autoRaf: false });
        
        // Debug: log while scrolling
        lenis.on('scroll', ({ scroll, velocity }) => {
            console.log(Math.round(scroll), velocity.toFixed(2));
        });

        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => cancelAnimationFrame(rafId);
    }, []);

    return null;
}