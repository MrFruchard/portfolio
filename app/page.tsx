import { Header } from "@/app/_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { DynamicIconCloud } from "./_components/Mastering";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="sm" />
      <Hero />
      <Spacing size="sm" />
      <Status />
      <Spacing size="sm" />
      <DynamicIconCloud />
    </main>
  );
}
