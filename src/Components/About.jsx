import React from "react";
import SkillsSection from "./skills";

const About = () => (
  <section
    id="about"
    className="border-t border-[var(--border-subtle)] bg-[var(--surface-muted)] py-16 text-[var(--text-primary)] sm:py-20"
  >
    <div className="mx-auto max-w-[1312px] px-4 md:px-8 lg:px-16">
      {/* Section header */}
      <div className="mb-10 max-w-2xl">
        <h2
          className="text-[1.75rem] font-semibold leading-[1.2] text-[var(--text-primary)] sm:text-[2rem]"
          style={{ fontFamily: "var(--ibm-font)" }}
        >
          Curious by nature. Builder by choice.
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-16">
        <p
          className="text-base leading-[1.5] text-[var(--text-secondary)]"
          style={{ fontFamily: "var(--ibm-font)" }}
        >
          I&apos;m studying Information Systems at UPN Veteran Jakarta, where I
          bring together frontend development and an understanding of how
          organizations work. I enjoy turning complex needs into simple,
          responsive experiences that help people get things done.
        </p>

        {/* Skills / Education / Certificates */}
        <div
          className="border-t border-[var(--border-subtle)] pt-6 md:border-0 md:pt-0"
        >
          <SkillsSection />
        </div>
      </div>
    </div>
  </section>
);

export default About;
