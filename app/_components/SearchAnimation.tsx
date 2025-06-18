"use client";

import { useState, useEffect } from "react";

export function SearchAnimation() {
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const searchTerms = [
    "opportunités...",
    "projets...",
    "alternance...",
    "collaboration..."
  ];

  useEffect(() => {
    const currentTerm = searchTerms[currentIndex];
    
    if (isTyping) {
      if (searchText.length < currentTerm.length) {
        const timeout = setTimeout(() => {
          setSearchText(currentTerm.slice(0, searchText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (searchText.length > 0) {
        const timeout = setTimeout(() => {
          setSearchText(searchText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % searchTerms.length);
        setIsTyping(true);
      }
    }
  }, [searchText, currentIndex, isTyping, searchTerms]);

  return (
    <div className="flex flex-col items-center space-y-2 mt-2">
      {/* Barre de recherche animée */}
      <div className="relative w-24 h-5 bg-gray-800/50 rounded-full border border-gray-600/30 overflow-hidden">
        {/* Animation de balayage */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        
        {/* Curseur de recherche */}
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 flex items-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="ml-1 text-[9px] text-blue-400 font-mono truncate">
            {searchText}
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>

      {/* Indicateurs de progression */}
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-1 bg-blue-400/60 rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}