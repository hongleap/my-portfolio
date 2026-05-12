"use client";
import { FadeIn } from "@/components/ui/text-reveal";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-muted">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 justify-center items-center">
        <div className="max-w-6xl mx-auto text-center justify-center">
          <div className="my-16 text-4xl font-bold">
            Pho Hongleap |{" "}
            <span className="text-emerald-600">Backend Developer</span>
          </div>

          <div className="grid grid-cols-2 gap-4 justify-center mx-16">
            <div>
              <FadeIn delay={0.6}>
                <h1 className="text-base sm:text-2xl bold text-white max-w-2xl mx-auto mb-8 rounded-md text-left">
                  Developer who continues{" "}
                  <u className="text-blue-500">learning</u> and{" "}
                  <u className="text-blue-500">growing.</u>
                </h1>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p className="text-base sm:text-lg text-white bg-black mb-8 max-w-2xl mx-auto p-8 rounded-md text-left">
                  " Welcome to my little corner of the internet where{" "}
                  <span className="text-red-700">bugs</span> are temporary, but
                  learning is forever 🚀. "
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="text-base sm:text-lg text-white bg-rgba(60, 60, 60, 0.1) rounded-md  border border-white mb-8 max-w-2xl mx-auto p-8 rounded-md text-left">
                  👋 See me on
                  <br></br>
                  <div className="grid grid-cols-1 gap-2 justify-center pt-3">
                    <a href="https://github.com/hongleap" target="_blank" rel="noopener noreferrer" className="text-slate-500 underline">Github</a>
                    <a href="https://www.linkedin.com/in/phohongleap/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Linkedin</a>
                  </div>
                </div>  
              </FadeIn>
            </div>
            <div>
              <Image
                src="/hongleap.jpg"
                alt="Profile"
                width={420}
                height={420}
                className="rounded-md opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
