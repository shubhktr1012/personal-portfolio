'use client'
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenPhrases?: number;
  delayBetweenLoops?: number;
  className?: string;
}

// ... existing code ...
const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
    phrases,
    typingSpeed = 70,
    erasingSpeed = 50,
    delayBetweenPhrases = 1000,
    delayBetweenLoops = 10000,
    className,
  }) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      let timer: NodeJS.Timeout;
      const currentPhrase = phrases[currentPhraseIndex];
      const isLastPhraseInArray = currentPhraseIndex === phrases.length - 1;
  
      if (isTyping) {
        if (currentText.length < currentPhrase.length) {
          // Continue typing
          timer = setTimeout(() => {
            setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          // Phrase is fully typed
          if (isLastPhraseInArray) {
            // If it's the last phrase, keep it displayed and then restart the loop after delayBetweenLoops
            timer = setTimeout(() => {
              setCurrentPhraseIndex(0); // Restart from the first phrase
              setCurrentText(''); // Clear text to start typing the first phrase again
              setIsTyping(true);
            }, delayBetweenLoops);
          } else {
            // If not the last phrase, pause before erasing
            timer = setTimeout(() => {
              setIsTyping(false); // Start erasing
            }, delayBetweenPhrases);
          }
        }
      } else {
        // Erasing logic
        if (currentText.length > 0) {
          // Continue erasing
          timer = setTimeout(() => {
            setCurrentText(currentPhrase.substring(0, currentText.length - 1));
          }, erasingSpeed);
        } else {
          // Phrase is fully erased, move to the next phrase
          // This part should only be reached if it's not the last phrase (as the last phrase is not erased)
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setIsTyping(true); // Start typing the next phrase
        }
      }
  
      return () => clearTimeout(timer);
    }, [currentPhraseIndex, currentText, isTyping, phrases, typingSpeed, erasingSpeed, delayBetweenPhrases, delayBetweenLoops]);
  
    return (
      <span className={className}>
        {currentText}
      </span>
    );
  };
  
  export default TypewriterEffect;