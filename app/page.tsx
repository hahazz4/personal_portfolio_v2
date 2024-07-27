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
    <main id="welcome" className="bg-[#0e0217] flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <TracingBeam className="pt-1">
        <div className="pt-20 max-w-7xl w-full">
          <Hero/>
        </div>

        <div id="me" className="pt-20 pb-20">
          <div className="mt-20 mb-60">
            <Me/>
          </div>
        </div>

        <div id="resume" className="pt-20 pb-20">
          <div className="mt-20 mb-60">
            <Resume/>
          </div>
          <div className="mt-10">
            <ScrollButton3 />
          </div>
        </div>

        <div id="projects" className="pt-20 pb-20">
          <div className="mt-20 mb-60">
            <Projects/>
          </div>
        </div>

        <div id="socials" className="pt-20 pb-10">
          <div className="mt-20 mb-60">
            <Socials/>
          </div>
          <div className="mt-10">
            <ScrollButton5 />
          </div>
        </div>
        <div id="footer" className="flex justify-center items-center text-white">
          <p>© 2024 Copyright: Zeerak Asim</p>
        </div>
      </TracingBeam>
    </main>
  );
}