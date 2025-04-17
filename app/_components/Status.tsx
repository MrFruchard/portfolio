import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, Gamepad2, Home, LucideIcon, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-6 py-8 w-full">
      <Card className="flex-[1.5] w-full p-4 flex flex-col gap-2 w-full">
        <p className="text-lg w-full text-muted-foreground">
          Side, Fun projects
        </p>
        <div className="flex flex-col gap-4">
          {SIDE_PROJECTS.map((project, index) => (
            <SideProject
              key={index}
              Logo={project.Logo}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </Card>
      <div className="flex-1 w-full h-full flex flex-col gap-4">
        <Card className="p-2 flex-2">
          <p className="text-lg w-full text-muted-foreground">Works </p>
          <div className="flex flex-col gap-2">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Gamepad2,
    title: "Bomberman",
    description: "A 2D game made with JS, html and css only",
    url: "https://make-your-game-plum.vercel.app/",
  },
  {
    Logo: Code,
    title: "Portfolio",
    description: "This website showcasing my work",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "Chat App",
    description: "A real-time messaging application",
    url: "https://github.com/MrFruchard/", // Update with actual URL when available
  },
];

const WORKS: WorkProps[] = [
  {
    image: "/images/zone01.png", // Remplacez par le chemin vers l'image de Zone01
    title: "Zone01",
    role: "Fullstack Developer Junior",
    date: "2023 - Present",
    url: "https://zone01rouennormandie.org/",
  },
  {
    image: "/images/but.png", // Remplacez par le chemin vers l'image de BUT
    title: "BUT",
    role: "Chef de rayon meubles",
    date: "2023 - 2024",
    url: "https://but.fr/",
  },
  {
    image: "/images/but.png", // Remplacez par le chemin vers l'image de BUT
    title: "BUT",
    role: "Chef de rayon électroménager",
    date: "2020 - 2023",
    url: "https://but.fr/",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};
type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="no-underline inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <div className="relative w-10 h-10 rounded-md overflow-hidden">
        <Image
          src={props.image}
          alt={props.title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
        </div>
        <p className="text-xs w-full text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="no-underline inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-md font-semibold">{props.title}</p>
        <p className="text-md w-full text-muted-foreground">
          {props.description}
        </p>
      </div>
    </Link>
  );
};
