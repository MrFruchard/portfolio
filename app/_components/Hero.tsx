import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";
import { Zone01Icon } from "./icons/Zone01Icon";

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
    <Section className="flex max-lg:flex-col items-start gap-6 py-8">
      <div className="flex-[3.3] w-full space-y-4">
        <h2 className="text-5xl font-bold">Romain Savary</h2>
        <h3 className="text-2xl font-caption text-muted-foreground">
          FullStack Developer | Spécialisation Cyber-sécurité
        </h3>
        <div className="text-md leading-relaxed space-y-3 text-muted-foreground">
          <p>
            Fort de 7 ans d'expérience en management et pilotage de projets,
            j'ai dirigé des équipes jusqu'à 15 personnes. Aujourd'hui, je me
            reconvertis dans le développement pour apporter cette vision
            business au monde tech.
          </p>
          <p>
            Actuellement en formation intensive backend à
            <span className="whitespace-nowrap">
              {" "}
              <Link
                href="https://zone01rouennormandie.org/"
                className="no-underline"
              >
                <Code className="items-center cursor-pointer">
                  <Zone01Icon
                    size={35}
                    className="inline text-blue-500 mr-[-14px]"
                  />
                  Zone01
                </Code>
              </Link>
            </span>
            , je développe mes compétences en HTML, CSS, JavaScript, Go et SQL,
            avec une spécialisation en cyber-sécurité prévue pour la dernière
            partie de ma formation.
          </p>
          <p>
            Passionné d'apprentissage continu et orienté solutions, je recherche
            activement des opportunités d'alternance. Voici mon
            <span className="whitespace-nowrap">
              {" "}
              <Link
                href="https://www.linkedin.com/in/romain-savary1"
                className="no-underline"
              >
                <Code className="items-center gap-2 cursor-pointer">
                  <LinkedinIcon size={15} className="inline" />
                  LinkedIn!
                </Code>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="flex-[2] max-lg:w-full max-md:m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHY9PEL0TE2dQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720985472893?e=1744848000&v=beta&t=aNE9z1xwoR1dNE5JpxiVelk8DrjiPLuPSkkUSDj_rWk"
          className="w-full h-auto rounded-full shadow-lg aspect-square object-cover max-ms:w-48"
          alt="Romain's picture"
        />
      </div>
    </Section>
  );
};
