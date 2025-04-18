import { Button, buttonVariants } from "@/components/ui/button";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Section } from "@/app/_components/Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { GmailIcon } from "./icons/GmailIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 backdrop-blur-md bg-background/80 border-b border-border/40">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Romain.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          Contact me on{" "}
          <Link
            href="https://www.linkedin.com/in/romain-savary1"
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "outline",
                className: "size-6 p-0",
              })
            )}
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://github.com/MrFruchard"
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "outline",
                className: "size-6 p-0",
              })
            )}
            aria-label="GitHub profile"
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="mailto:romainsavary1@gmail.com"
            className={cn(
              buttonVariants({
                variant: "outline",
                className: "size-6 p-0",
              })
            )}
            aria-label="Email me"
          >
            <GmailIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
