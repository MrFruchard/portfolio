
"use client";

import { LoadingAnimation } from "./_components/LoadingAnimation";
import { BentoGrid, BentoCard } from "./_components/BentoGrid";
import { LinkedinIcon } from "./_components/icons/LinkedinIcon";
import { GithubIcon } from "./_components/icons/GithubIcon";
import { GmailIcon } from "./_components/icons/GmailIcon";
import { Zone01Icon } from "./_components/icons/Zone01Icon";
import { Code, Gamepad2, MessageCircle, MapPin, Calendar, User, Camera, UtensilsCrossed, Plane } from "lucide-react";
import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiGo, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiDocker, 
  SiGit,
  SiVercel 
} from "react-icons/si";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    
    // Animation aléatoire des cartes
    const cardIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // 9 cartes
    const shuffledIndexes = [...cardIndexes].sort(() => Math.random() - 0.5);
    const cardDelays = [200, 600, 1000, 1400, 1800, 2200, 2600, 3000, 3400]; // 9 cartes sur 3.4 secondes
    
    cardDelays.forEach((delay, i) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, shuffledIndexes[i]]);
      }, delay);
    });
  };

  if (showLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="min-h-screen bg-background p-2 sm:p-4 transition-all duration-1000 opacity-100">
      <BentoGrid className="max-w-none grid-cols-12 grid-rows-4 gap-2 sm:gap-4 min-h-screen">
        
        {/* Header avec nom et photo */}
        <BentoCard className={`col-span-4 row-span-1 transition-all duration-1000 ease-out ${
          visibleCards.includes(0) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}>
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-2 ring-white/10">
              <Image
                src="/icons/photoR.png"
                alt="Romain Savary"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Romain Savary</h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">FullStack Developer</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>Rouen, France</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Status - Disponible */}
        <BentoCard className={`col-span-2 row-span-1 transition-all duration-1000 ease-out ${
          visibleCards.includes(1) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}>
          <div className="text-center">
            <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 animate-pulse"></div>
            <p className="text-sm font-medium text-white">Disponible</p>
            <p className="text-xs text-muted-foreground">Pour alternance</p>
          </div>
        </BentoCard>

        {/* À propos */}
        <BentoCard className={`col-span-3 row-span-1 transition-all duration-1000 ease-out ${
          visibleCards.includes(2) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}>
          <div className="flex items-start gap-3">
            <User size={24} className="text-blue-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">À propos</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-white">7 ans d&apos;expérience</strong> en management d&apos;équipes jusqu&apos;à 15 personnes. 
                En reconversion dans le développement pour allier vision business et compétences techniques.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Contact */}
        <BentoCard className={`col-span-3 row-span-1 transition-all duration-1000 ease-out ${
          visibleCards.includes(3) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <div className="flex gap-3">
            <Link
              href="https://www.linkedin.com/in/romain-savary1"
              className="p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
            >
              <LinkedinIcon size={20} className="text-white" />
            </Link>
            <Link
              href="https://github.com/MrFruchard"
              className="p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
            >
              <GithubIcon size={20} className="text-white" />
            </Link>
            <Link
              href="mailto:romainsavary1@gmail.com"
              className="p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
            >
              <GmailIcon size={20} className="text-white" />
            </Link>
          </div>
        </BentoCard>

        {/* Formation */}
        <BentoCard className={`col-span-3 row-span-1 transition-all duration-1000 ease-out ${
          visibleCards.includes(4) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}>
          <div className="flex items-start gap-3">
            <Zone01Icon size={24} className="text-blue-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Formation</h3>
              <p className="text-sm text-white font-medium">Zone01 Rouen</p>
              <p className="text-xs text-muted-foreground mb-2">Formation intensive fullstack</p>
              <div className="flex flex-wrap gap-1">
                {["Go", "JavaScript", "HTML", "CSS", "SQL"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-accent/50 rounded text-xs text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Compétences */}
        <BentoCard className={`col-span-3 row-span-1 transition-all duration-1000 ease-out ${
          visibleCards.includes(5) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`} hoverable={false}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-1 sm:gap-2 items-center justify-center p-1 sm:p-2">
{[
              { name: "TypeScript", icon: <SiTypescript size={16} />, color: "bg-blue-500/20 text-blue-400" },
              { name: "JavaScript", icon: <SiJavascript size={16} />, color: "bg-yellow-500/20 text-yellow-400" },
              { name: "React", icon: <SiReact size={16} />, color: "bg-cyan-500/20 text-cyan-400" },
              { name: "Next.js", icon: <SiNextdotjs size={16} />, color: "bg-white/20 text-white" },
              { name: "Go", icon: <SiGo size={16} />, color: "bg-cyan-600/20 text-cyan-300" },
              { name: "HTML5", icon: <SiHtml5 size={16} />, color: "bg-orange-500/20 text-orange-400" },
              { name: "CSS3", icon: <SiCss3 size={16} />, color: "bg-blue-600/20 text-blue-300" },
              { name: "Tailwind", icon: <SiTailwindcss size={16} />, color: "bg-teal-500/20 text-teal-400" },
              { name: "Docker", icon: <SiDocker size={16} />, color: "bg-blue-400/20 text-blue-300" },
              { name: "Git", icon: <SiGit size={16} />, color: "bg-red-500/20 text-red-400" },
              { name: "Vercel", icon: <SiVercel size={16} />, color: "bg-white/20 text-white" }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`px-2 py-1 rounded-lg ${tech.color} backdrop-blur-sm transition-all duration-300 hover:scale-110 animate-pulse`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationDuration: '2s'
                }}
              >
                <div className="flex items-center gap-1">
                  {tech.icon}
                  <span className="text-xs font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Projets */}
        <BentoCard className={`col-span-3 row-span-2 transition-all duration-1000 ease-out ${
          visibleCards.includes(6) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}>
          <h3 className="text-lg font-semibold text-white mb-4">Projets</h3>
          <div className="space-y-3">
            <Link href="https://make-your-game-plum.vercel.app/" className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
              <Gamepad2 size={20} className="text-orange-400" />
              <div>
                <p className="text-sm font-medium text-white">Bomberman</p>
                <p className="text-xs text-muted-foreground">Jeu 2D en JavaScript pur</p>
              </div>
            </Link>
            <div className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg">
              <Code size={20} className="text-blue-400" />
              <div>
                <p className="text-sm font-medium text-white">Portfolio</p>
                <p className="text-xs text-muted-foreground">Site vitrine en Next.js</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg">
              <MessageCircle size={20} className="text-green-400" />
              <div>
                <p className="text-sm font-medium text-white">Chat App</p>
                <p className="text-xs text-muted-foreground">Application de messagerie temps réel</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Hobbies & Voyages */}
        <BentoCard className={`col-span-6 row-span-1 transition-all duration-1000 ease-out ${
          visibleCards.includes(8) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}>
          <div className="flex items-start gap-3">
            <Plane size={24} className="text-green-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Hobbies & Voyages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Camera size={16} className="text-red-400" />
                    <span className="text-sm font-medium text-white">Passions</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">🎬 Cinéma</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">🍕 Gastronomie</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <UtensilsCrossed size={16} className="text-blue-400" />
                    <span className="text-sm font-medium text-white">Destinations</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {["🇬🇷 Crète", "🇺🇸 LA-SF", "🇩🇴 Punta Cana", "🇲🇽 Mexique", 
                      "🇪🇬 Égypte", "🇲🇦 Maroc", "🇵🇹 Porto", "🇮🇸 Islande", "🇮🇹 Venise"].map((destination) => (
                      <span key={destination} className="px-2 py-1 bg-accent/30 rounded text-xs text-muted-foreground">
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Expérience */}
        <BentoCard className={`col-span-3 row-span-1 transition-all duration-1000 ease-out ${
          visibleCards.includes(7) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}>
          <div className="flex items-start gap-3">
            <Calendar size={24} className="text-purple-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Expérience</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-white">Chef de rayon meubles</p>
                  <p className="text-xs text-muted-foreground">BUT • 2023-2024</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Chef de rayon électroménager</p>
                  <p className="text-xs text-muted-foreground">BUT • 2020-2023</p>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

      </BentoGrid>
    </main>
  );
}
