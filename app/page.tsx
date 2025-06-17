import { Header } from "@/app/_components/Header";
import { Hero } from "./_components/Hero";
import { Status } from "./_components/Status";
import { DynamicIconCloud } from "./_components/Mastering";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Status />
      <section className="py-8">
        <DynamicIconCloud />
      </section>
    </main>
  );
}
