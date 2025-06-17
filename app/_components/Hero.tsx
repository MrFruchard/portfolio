import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";
import { Zone01Icon } from "./icons/Zone01Icon";
import Image from "next/image";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-bold hover:bg-accent/50 transition-colors px-2 py-0.5 text-primary border border-accent rounded-sm inline-center items-center",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-8 py-12">
      <div className="flex-[3] w-full space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Romain Savary
          </h2>
          <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
            FullStack Developer | Spécialisation Cyber-sécurité
          </h3>
        </div>
        <div className="text-base leading-relaxed space-y-4 text-muted-foreground max-w-2xl">
          <p className="text-lg">
            <strong>7 ans d&apos;expérience</strong> en management et pilotage de projets, 
            avec des équipes jusqu&apos;à 15 personnes. Aujourd&apos;hui en reconversion 
            pour apporter cette vision business au monde tech.
          </p>
          <p>
            Actuellement en formation intensive backend à{" "}
            <Link
              href="https://zone01rouennormandie.org/"
              className="no-underline"
            >
              <Code className="items-center cursor-pointer hover:scale-105 transition-transform">
                <Zone01Icon
                  size={24}
                  className="inline text-blue-500 mr-1"
                />
                Zone01
              </Code>
            </Link>
            , je développe mes compétences en{" "}
            <span className="font-medium text-foreground">
              HTML, CSS, JavaScript, Go et SQL
            </span>
            , avec une spécialisation en cyber-sécurité.
          </p>
          <p>
            Passionné d&apos;apprentissage continu, je recherche des opportunités d&apos;alternance.{" "}
            <Link
              href="https://www.linkedin.com/in/romain-savary1"
              className="no-underline"
            >
              <Code className="items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <LinkedinIcon size={16} className="inline" />
                Contactez-moi
              </Code>
            </Link>
          </p>
        </div>
      </div>
      <div className="flex-[2] max-lg:w-full max-md:m-auto ml-auto relative">
        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative overflow-hidden rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ring-4 ring-accent/20">
          <Image
            src="/icons/photoR.png"
            alt="Romain Savary - Développeur FullStack"
            fill
            sizes="(max-width: 768px) 256px, 320px"
            priority
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </Section>
  );
};
