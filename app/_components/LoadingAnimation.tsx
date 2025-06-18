"use client";

import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

export const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstWord, setIsFirstWord] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const words = ["Management", "Développement"];
  const currentWord = words[isFirstWord ? 0 : 1];

  useEffect(() => {
    // Animation du curseur clignotant
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < currentWord.length) {
      const timer = setTimeout(() => {
        setCurrentText(prev => prev + currentWord[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Mot terminé
      const pauseTimer = setTimeout(() => {
        if (isFirstWord) {
          // Passer au deuxième mot
          setCurrentText("");
          setCurrentIndex(0);
          setIsFirstWord(false);
        } else {
          // Animation terminée, fade out
          setFadeOut(true);
          setTimeout(() => {
            onComplete();
          }, 1000);
        }
      }, 1000);

      return () => clearTimeout(pauseTimer);
    }
  }, [currentIndex, currentWord, isFirstWord, onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-1000 ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {currentText}
          <span className={`${showCursor && !fadeOut ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
            |
          </span>
        </h1>
        <div className="mt-4 text-lg text-muted-foreground">
          {isFirstWord ? "Expérience" : "Passion"}
        </div>
      </div>
    </div>
  );
};