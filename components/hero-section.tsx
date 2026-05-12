"use client";
import { FadeIn } from "@/components/ui/text-reveal";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Pho Hongleap |{" "}
            <u className="text-emerald-600">Application Developer</u>
          </div>

          {/* Two-column on lg+, stacked on mobile */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-12">
            {/* Left: Text content */}
            <div className="flex-1 w-full">
              <FadeIn delay={0.3}>
                <h1 className="text-xl sm:text-2xl font-bold text-white max-w-2xl mb-4 rounded-md text-left">
                  Developer who continues{" "}
                  <u className="text-blue-500">learning</u> and{" "}
                  <u className="text-blue-500">growing.</u>
                </h1>
              </FadeIn>

              <FadeIn delay={0.5}>
                <p className="text-sm sm:text-base lg:text-lg text-white bg-black mb-4 max-w-2xl p-6 sm:p-8 rounded-md text-left">
                  &ldquo; Welcome to my little corner of the internet where{" "}
                  <span className="text-red-700">bugs</span> are temporary, but
                  learning is forever 🚀. &rdquo;
                </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="text-sm sm:text-base lg:text-lg text-white rounded-md border border-white mb-4 max-w-2xl p-6 sm:p-8 rounded-md text-left grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">👋 See me on</p>
                    <div className="flex flex-col gap-2">
                      <a href="https://www.linkedin.com/in/phohongleap/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-400 transition-colors">LinkedIn</a>
                      <a href="https://web.facebook.com/pho.hongleap.2025/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 underline hover:text-emerald-400 transition-colors">Facebook</a>
                      <a href="https://github.com/hongleap" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline hover:text-slate-300 transition-colors">GitHub</a>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">👇 Contact me</p>
                    <div className="flex flex-col gap-2">
                      <a href="https://t.me/hongleap" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-400 transition-colors">Telegram</a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Profile image */}
            <div className="flex-shrink-0 w-48 sm:w-64 lg:w-96">
              <Image
                src="/hongleap.jpg"
                alt="Profile photo of Pho Hongleap"
                width={420}
                height={420}
                className="rounded-xl opacity-90 w-full h-auto object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
