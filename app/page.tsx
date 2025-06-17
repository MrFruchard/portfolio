"use client";

import { Header } from "@/app/_components/Header";
import { Hero } from "./_components/Hero";
import { Status } from "./_components/Status";
import { DynamicIconCloud } from "./_components/Mastering";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`min-h-screen transition-all duration-1000 ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className={`transition-all duration-700 delay-100 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <Header />
      </div>
      
      <div className={`transition-all duration-700 delay-200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <Hero />
      </div>
      
      <div className={`transition-all duration-700 delay-300 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <Status />
      </div>
      
      <section className={`py-8 transition-all duration-700 delay-500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <DynamicIconCloud />
      </section>
    </main>
  );
}
