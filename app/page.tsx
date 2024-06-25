import Header from "@/components/Header";
import { Project } from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-neutral-900 text-white dark">

      <Header />
      <div className="h-screen flex justify-center items-center">
        <Project />
      </div>
    </main>
  );
}
