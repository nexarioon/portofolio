import React from "react";
import ExpandableCardDemo from "./ui/expandable-card-demo-grid";

const Porto = () => (
  <section
    id="porto"
    className="mx-auto w-full max-w-[1312px] bg-[var(--page-bg)] px-4 py-16 text-[var(--text-primary)] sm:py-20 md:px-8 md:py-24 lg:px-16"
  >
    {/* Section header */}
    <div
      className="mb-12 border-b border-[var(--border-subtle)] pb-8"
      style={{ fontFamily: "var(--ibm-font)" }}
    >
      <h2
        className="text-[1.75rem] font-semibold leading-[1.2] text-[var(--text-primary)] sm:text-[2rem]"
      >
        Projects I&apos;ve worked on
      </h2>
      <p className="mt-3 max-w-xl text-base leading-[1.5] text-[var(--text-secondary)]">
        Selected personal and team projects, with more screenshots to follow.
      </p>
    </div>

    <ExpandableCardDemo />
  </section>
);

export default Porto;
