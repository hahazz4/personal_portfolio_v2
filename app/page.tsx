import Image from "next/image";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import { LampDemo } from "@/components/ui/lamp";
import ScrollButton from "@/components/scrollbutton";
import ScrollButton2 from "@/components/scrollbutton2";
import { useRef } from "react";

export default function Home() {
  return (
    <main className="relative bg-[#0e0217] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div id="welcome" className="max-w-7xl w-full">
        <Hero />
      </div>

      <div id="me" className="max-w-7xl w-full mt-20">
        <Hero2/>
      </div>

      <div id="resume" className="max-w-7xl w-full mt-20">
        <Hero2/>
      </div>

      <div id="projects" className="max-w-7xl w-full mt-20">
        <Hero2/>
      </div>

      <div id="socials" className="max-w-7xl w-full mt-20">
        <Hero2/>
      </div>
      
      <div id="contact" className="max-w-7xl w-full mt-20">
        <Hero2/>
      </div>
    </main>
  );
}
