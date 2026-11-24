import React from "react";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import Contact from "./Contact";
import Message from "./message";

const Home = () => (
  <section
    id="home"
    className="mx-auto grid min-h-[calc(100dvh-48px)] w-full max-w-[1312px] items-center gap-16 bg-[var(--page-bg)] px-4 pb-16 pt-12 text-[var(--text-primary)] md:grid-cols-[1fr_0.9fr] md:gap-16 md:px-8 md:pt-8 lg:px-16"
  >
    {/* Text column */}
    <div className="order-2 text-center md:order-1 md:text-left">
      {/* Eyebrow */}
      <p
        className="mb-4 text-sm text-[var(--text-secondary)]"
        style={{ fontFamily: "var(--ibm-font)" }}
      >
        Fendi Permadi &mdash; Jakarta, Indonesia
      </p>

      {/* Headline */}
      <h1
        className="text-[2.25rem] font-semibold leading-[1.2] text-[var(--text-primary)] sm:text-[2.75rem] lg:text-[3.4375rem]"
        style={{ fontFamily: "var(--ibm-font)" }}
      >
        Building useful things{" "}
        <span style={{ color: "var(--ibm-text-accent)" }}>for the web.</span>
      </h1>

      {/* Sub-heading */}
      <p
        className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:max-w-lg"
        style={{ fontFamily: "var(--ibm-font)" }}
      >
        Software engineer focused on Python, Go, and TypeScript. I build
        production backends, clean data models, and responsive interfaces that
        help people get things done.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-0 md:justify-start">
        <a
          href="#porto"
          className="inline-flex min-h-12 items-center gap-2 bg-[var(--ibm-primary)] px-6 py-4 text-sm text-white hover:bg-[var(--ibm-primary-hover)] active:bg-[var(--ibm-primary-active)]"
          style={{
            transition: "background-color var(--ibm-dur-fast) var(--ibm-ease)",
            fontFamily: "var(--ibm-font)",
          }}
        >
          Explore work <IconArrowRight size={16} stroke={1.5} />
        </a>
        <a
          href="/images/fendisCV.pdf"
          download="CV_Fendi_Permadi.pdf"
          className="inline-flex min-h-12 items-center gap-2 border border-[var(--text-primary)] bg-transparent px-6 py-4 text-sm text-[var(--text-primary)] hover:border-[var(--ibm-text-accent)] hover:bg-[var(--surface-muted)] hover:text-[var(--ibm-text-accent)]"
          style={{
            transition:
              "background-color var(--ibm-dur-fast) var(--ibm-ease), border-color var(--ibm-dur-fast) var(--ibm-ease), color var(--ibm-dur-fast) var(--ibm-ease)",
            fontFamily: "var(--ibm-font)",
          }}
        >
          Download CV <IconDownload size={16} stroke={1.5} />
        </a>
      </div>

      {/* Social / message */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
        <Contact />
        <Message />
      </div>
    </div>

    {/* Image column */}
    <div className="relative order-1 mx-auto w-full max-w-[420px] md:order-2 md:max-w-none">
      {/* Profile photo — sharp corners per IBM spec */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "0.9",
          background: "var(--surface-muted)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <img
          src="/images/profile.jpg"
          alt="Portrait of Fendi Permadi"
          className="h-full w-full object-cover"
        />
      </div>

    </div>
  </section>
);

export default Home;
