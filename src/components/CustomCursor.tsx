'use client'
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({x:0, y:0});
    const [isClicked, setIsClicked] = useState(false);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        //Logic for the hover effect
        const interactiveElements = document.querySelectorAll('a, button, input');

        const onMouseEnter = () => setIsHoveringLink(true);
        const onMouseLeave = () => setIsHoveringLink(false);

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);

            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
              });
        };
    }, []);

    const cursorClasses = `
        cursor
        ${isClicked ? 'clicked' : ''}
        ${isHoveringLink ? 'hovering' : ''}
    `;

    return (
        <div
            className={cursorClasses}
            style={{ left:  `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default CustomCursor;