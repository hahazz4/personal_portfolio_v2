import Hero from "@/components/hero";
import Me from "@/components/Me";
import Resume from "@/components/resume";
import Projects from "@/components/projects";
import Socials from "@/components/socials";
import ScrollButton3 from "@/components/scrollbutton3";
import ScrollButton5 from "@/components/scrollbutton5";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home(){
  return (
    <main id="welcome" className="bg-[#0e0217] flex flex-col justify-center items-center mx-auto pl-2">
      <TracingBeam className="pt-1">
        <div className="pt-20 max-w-7xl w-full">
          <Hero/>
        </div>

        <div id="me" className="pt-20 pb-20">
          <div className="mt-20 mb-60" style={{alignItems: "center"}}>
            <Me/>
          </div>
        </div>

        <div id="resume" className="pt-20 pb-20">
          <div className="mt-20 mb-60" style={{alignItems: "center"}}>
            <Resume/>
          </div>
        </div>

        <div id="projects" className="pt-20 pb-20">
          <div className="mt-20 mb-60" style={{alignItems: "center"}}>
            <Projects/>
          </div>
        </div>

        <div id="socials" className="pt-20 pb-20">
          <div className="mt-20 mb-60" style={{alignItems: "center"}}>
            <Socials/>
          </div>
          <div className="mt-10">
            <ScrollButton5 />
          </div>
        </div>
      </TracingBeam>
      <div id="footer" className="flex justify-center items-center pb-10 text-white text-sm md:text-md lg:text-lg">
        <p>© 2024 Copyright Made By Zeerak Asim</p>
      </div>
    </main>
  );
}