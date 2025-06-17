"use client";

import { LoadingAnimation } from "./_components/LoadingAnimation";
import { BentoGrid, BentoCard } from "./_components/BentoGrid";
import { LinkedinIcon } from "./_components/icons/LinkedinIcon";
import { GithubIcon } from "./_components/icons/GithubIcon";
import { GmailIcon } from "./_components/icons/GmailIcon";
import { Zone01Icon } from "./_components/icons/Zone01Icon";
import { Code, Gamepad2, MessageCircle, MapPin, Calendar, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  if (showLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <main className={`min-h-screen bg-background p-4 transition-all duration-1000 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`}>
      <BentoGrid className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        
        {/* Header avec nom et photo */}
        <BentoCard className={`md:col-span-4 lg:col-span-3 transition-all duration-700 delay-100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center gap-8">
            <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-white/10">
              <Image
                src="/icons/photoR.png"
                alt="Romain Savary"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Romain Savary</h1>
              <p className="text-lg text-muted-foreground">FullStack Developer</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>Rouen, France</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Status - Disponible */}
        <BentoCard className={`md:col-span-2 lg:col-span-1 transition-all duration-700 delay-150 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center">
            <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 animate-pulse"></div>
            <p className="text-sm font-medium text-white">Disponible</p>
            <p className="text-xs text-muted-foreground">Pour alternance</p>
          </div>
        </BentoCard>

        {/* Contact */}
        <BentoCard className={`md:col-span-2 lg:col-span-2 transition-all duration-700 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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

        {/* À propos */}
        <BentoCard className={`md:col-span-4 lg:col-span-3 transition-all duration-700 delay-250 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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

        {/* Formation */}
        <BentoCard className={`md:col-span-2 lg:col-span-3 transition-all duration-700 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-start gap-3">
            <Zone01Icon size={24} className="text-blue-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Formation</h3>
              <p className="text-sm text-white font-medium">Zone01 Rouen</p>
              <p className="text-xs text-muted-foreground mb-2">Formation intensive backend</p>
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
        <BentoCard className={`md:col-span-2 lg:col-span-3 transition-all duration-700 delay-350 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} hoverable={false}>
          <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
          <div className="h-48 flex flex-wrap gap-3 items-center justify-center p-4">
            {[
              { name: "TypeScript", icon: "🔷", color: "bg-blue-500/20 text-blue-400" },
              { name: "JavaScript", icon: "🟨", color: "bg-yellow-500/20 text-yellow-400" },
              { name: "React", icon: "⚛️", color: "bg-cyan-500/20 text-cyan-400" },
              { name: "Next.js", icon: "▲", color: "bg-white/20 text-white" },
              { name: "Go", icon: "🐹", color: "bg-cyan-600/20 text-cyan-300" },
              { name: "HTML5", icon: "🌐", color: "bg-orange-500/20 text-orange-400" },
              { name: "CSS3", icon: "🎨", color: "bg-blue-600/20 text-blue-300" },
              { name: "Tailwind", icon: "💨", color: "bg-teal-500/20 text-teal-400" },
              { name: "Docker", icon: "🐳", color: "bg-blue-400/20 text-blue-300" },
              { name: "Git", icon: "📝", color: "bg-red-500/20 text-red-400" },
              { name: "VS Code", icon: "💻", color: "bg-blue-500/20 text-blue-400" },
              { name: "Vercel", icon: "🚀", color: "bg-white/20 text-white" }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`px-3 py-2 rounded-lg ${tech.color} backdrop-blur-sm transition-all duration-300 hover:scale-110 animate-pulse`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationDuration: '2s'
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Projets */}
        <BentoCard className={`md:col-span-4 lg:col-span-3 transition-all duration-700 delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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

        {/* Expérience */}
        <BentoCard className={`md:col-span-2 lg:col-span-3 transition-all duration-700 delay-450 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
