"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { SectionLabel, SectionTitle } from "@/components/SectionHeader";
import { community } from "@/data/content";

export default function Community() {
  return (
    <section id="Community" className="py-[100px] px-6 bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden mb-12 md:mb-16">
            <Image
              src="/images/community-volunteer.png"
              alt="Community volunteer event in the Arizona desert"
              fill
              className="object-cover object-center"
            />
          </div>
        </FadeIn>

        <FadeIn>
          <SectionLabel label="Giving Back" />
          <SectionTitle>Community &amp; Volunteerism</SectionTitle>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {community.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="rounded-xl border border-gray-200 bg-white h-full p-7">
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <span className="text-[13px] text-accent font-semibold">
                    {c.org}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {c.dates}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-[1.3]">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 leading-[1.7]">
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
