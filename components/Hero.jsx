"use client";

import FadeIn from "@/components/FadeIn";
import { stats } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute w-[600px] h-[600px] rounded-full top-[10%] right-[-10%] blur-[80px] pointer-events-none [background:radial-gradient(circle,rgba(217,79,61,0.15)_0%,transparent_70%)]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bottom-[10%] left-[-5%] blur-[60px] pointer-events-none [background:radial-gradient(circle,rgba(217,79,61,0.08)_0%,transparent_70%)]" />

      <div className="text-center px-6 max-w-[900px] relative z-10">
        <FadeIn>
          <div className="inline-block px-5 py-1.5 rounded-[30px] border border-brand-border bg-[rgba(217,79,61,0.08)] mb-8">
            <span className="text-[13px] text-brand-accent font-medium tracking-[0.5px]">
              Insightful. Strategic. Innovative.
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-[40px] md:text-7xl font-black text-slate-50 tracking-[-3px] leading-[1.05] mb-6">
            Josh
            <br />
            <span className="text-brand-accent">Griffith</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl text-slate-400 max-w-[640px] mx-auto mb-12 leading-[1.6] font-light">
            AI &amp; Agile Practice Coach building scalable, tech-enabled
            solutions that transform how organizations work. Over 12 years
            turning complex processes into measurable results.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#Projects"
              className="px-8 py-3.5 bg-brand-accent text-white rounded-lg no-underline font-semibold text-[15px] transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#Contact"
              className="px-8 py-3.5 bg-transparent text-slate-100 rounded-lg no-underline font-semibold text-[15px] border border-brand-border transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </FadeIn>

        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-brand-border py-2">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={0.5 + i * 0.1} distance={20} duration={0.6}>
                <div className="text-center py-6 px-4">
                  <div className="text-4xl font-extrabold text-brand-accent tracking-[-1px] leading-[1.1]">
                    {s.value}
                  </div>
                  <div className="text-[13px] text-slate-400 mt-2 uppercase tracking-[1.5px] font-medium">
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
