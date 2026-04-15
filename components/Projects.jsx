"use client";

import FadeIn from "@/components/FadeIn";
import { SectionLabel, SectionTitle } from "@/components/SectionHeader";
import { projects } from "@/data/content";

function ProjectCard({ project, index }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div
        className={`bg-white rounded-xl border border-gray-200 p-7 h-full transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(217,79,61,0.15)] flex flex-col ${
          project.featured ? "border-l-[3px] border-l-accent" : ""
        }`}
      >
        <div className="flex justify-between items-start mb-3">
          <span className="text-[11px] uppercase tracking-[1.5px] text-accent font-semibold">
            {project.category}
          </span>
          <span className="text-xs text-gray-400 font-medium">
            {project.impact}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-[1.3]">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-[1.7] mb-5 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-[20px] bg-accent-light text-accent font-medium tracking-[0.3px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="Projects" className="py-[100px] px-6 max-w-[1200px] mx-auto">
      <FadeIn>
        <SectionLabel label="Portfolio" />
        <SectionTitle>Projects &amp; Impact</SectionTitle>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
