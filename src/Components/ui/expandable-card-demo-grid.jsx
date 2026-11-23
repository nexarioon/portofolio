"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import projects from "@/Components/projectData";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] h-full w-full"
            style={{ background: "var(--modal-overlay)" }}
          />
        )}
      </AnimatePresence>

      {/* Expanded modal */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 z-[101] grid place-items-center p-4">
            {/* Close button — mobile only */}
            <Motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center bg-[var(--modal-bg)] text-[var(--text-primary)] lg:hidden"
              style={{ border: "1px solid var(--border-subtle)" }}
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </Motion.button>

            {/* Modal card — sharp IBM corners */}
            <Motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden bg-[var(--modal-bg)] text-[var(--text-primary)]"
              style={{
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
                fontFamily: "var(--ibm-font)",
              }}
            >
              {/* Hero image */}
              <Motion.div
                layoutId={`image-${active.title}-${id}`}
                className="flex h-56 w-full items-center justify-center overflow-hidden bg-[var(--surface-muted)] sm:h-72"
              >
                {active.image ? (
                  <img
                    src={active.image}
                    alt={`${active.title} project preview`}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <span className="px-4 text-center text-sm text-[var(--text-secondary)]">
                    Project image coming soon
                  </span>
                )}
              </Motion.div>

              {/* Content */}
              <div className="p-6">
                <Motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-[1.375rem] font-semibold leading-[1.2] text-[var(--text-primary)]"
                  style={{ fontFamily: "var(--ibm-font)" }}
                >
                  {active.title}
                </Motion.h3>
                <div
                  className="relative mt-4 max-h-56 overflow-y-auto text-sm leading-[1.5] text-[var(--text-secondary)]"
                  style={{ fontFamily: "var(--ibm-font)" }}
                >
                  <Motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <p>{active.description}</p>
                    {active.role && <p><strong>Peran:</strong> {active.role}</p>}
                    {active.stack && <p><strong>Stack:</strong> {active.stack}</p>}
                    {active.year && <p><strong>Tahun:</strong> {active.year}</p>}
                    {active.repo && (
                      <a
                        href={active.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold"
                        style={{ color: "var(--ibm-text-accent)", textDecoration: "underline" }}
                      >
                        View repository &rarr;
                      </a>
                    )}
                  </Motion.div>
                </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card grid */}
      <ul
        className="mx-auto grid w-full grid-cols-1 gap-px bg-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-3"
        style={{ border: "1px solid var(--border-subtle)" }}
      >
        {projects.map((project, index) => (
          <li key={`${project.title}-${index}`} className={index === 0 ? "sm:col-span-2" : ""}>
            <Motion.button
              type="button"
              layoutId={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className="group flex h-full w-full cursor-pointer flex-col bg-[var(--surface)] text-left text-[var(--text-primary)]"
              style={{
                transition: "background-color var(--ibm-dur-fast) var(--ibm-ease)",
                fontFamily: "var(--ibm-font)",
              }}
              whileHover={{ backgroundColor: "var(--surface-hover)" }}
            >
              <Motion.div
                layoutId={`image-${project.title}-${id}`}
                className="flex h-48 w-full items-center justify-center overflow-hidden bg-[var(--surface-muted)]"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <span className="px-4 text-center text-sm text-[var(--text-secondary)]">
                    Project image coming soon
                  </span>
                )}
              </Motion.div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <Motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className="text-[1.125rem] font-semibold leading-snug text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--ibm-font)" }}
                  >
                    {project.title}
                  </Motion.h3>
                  {project.year && (
                    <p className="mt-1 text-xs text-[var(--text-secondary)]">{project.year}</p>
                  )}
                  <p className="mt-3 text-sm leading-[1.5] text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                </div>
                <span
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{
                    color: "var(--ibm-text-accent)",
                    textDecoration: "underline",
                    fontFamily: "var(--ibm-font)",
                  }}
                >
                  View project details &rarr;
                </span>
              </div>
            </Motion.button>
          </li>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <Motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[var(--text-primary)]"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </Motion.svg>
);
