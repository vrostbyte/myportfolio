"use client";

import FadeIn from "@/components/FadeIn";
import { SectionLabel, SectionTitle } from "@/components/SectionHeader";
import { community } from "@/data/content";

export default function Community() {
  return (
    <section id="Community" className="py-[100px] px-6 bg-brand-card">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionLabel label="Giving Back" />
          <SectionTitle>Community &amp; Volunteerism</SectionTitle>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {community.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-7 rounded-xl border border-brand-border bg-brand-dark h-full">
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <span className="text-[13px] text-brand-accent font-semibold">
                    {c.org}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {c.dates}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3 leading-[1.3]">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-400 leading-[1.7]">
                  {c.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
