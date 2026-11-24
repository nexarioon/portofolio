import React from "react";

const certificates = [
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    image: "/images/react-sertif.jpg",
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    image: "/images/frontend-sertif.jpg",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    image: "/images/web-sertif.jpg",
  },
  {
    title: "Belajar Data Structured Query Language",
    image: "/images/sql-sertif.jpg",
  },
  {
    title: "Belajar Dasar AI",
    image: "/images/ai-sertif.jpg",
  },
  {
    title: "Belajar Dasar Data Science",
    image: "/images/datascience-sertif.jpg",
  },
  {
    title: "Belajar Dasar Manajemen Proyek",
    image: "/images/mapro-sertif.jpg",
  },
  {
    title: "Implementasi Business Model Canvas",
    image: "/images/bmc-sertif.png",
  },
  {
    title: "Enterprise Resource Planning",
    image: "/images/erp-sertif.png",
  },
  {
    title: "Legalitas Startup Digital",
    image: "/images/legalitas-sertif.png",
  },
  {
    title: "Manajemen Startup",
    image: "/images/manajemen-sertif.png",
  },
  {
    title: "Pitchdek",
    image: "/images/pitcdeck-sertif.png",
  },
  {
    title: "SPSS untuk Analisa Data",
    image: "/images/spss-sertif.png",
  },
  {
    title: "Analisis SWOT dalam Perencanaan Bisnis",
    image: "/images/swot-sertif.png",
  },
];

export const Sertif = () => (
  <ul
    className="grid grid-cols-1 gap-px border border-[var(--border-subtle)] bg-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-3"
    style={{ fontFamily: "var(--ibm-font)" }}
  >
    {certificates.map((certificate) => (
      <li key={certificate.title}>
        <a
          href={certificate.image}
          target="_blank"
          rel="noreferrer"
          className="flex h-full flex-col bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
          style={{ transition: "background-color var(--ibm-dur-fast) var(--ibm-ease)" }}
        >
          <div className="aspect-[1.414/1] w-full overflow-hidden bg-[var(--surface-muted)]">
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between gap-3 px-4 py-4">
            <h3 className="text-sm font-semibold leading-snug">
              {certificate.title}
            </h3>
            <span
              className="text-xs font-semibold"
              style={{ color: "var(--ibm-text-accent)", textDecoration: "underline" }}
            >
              View certificate &rarr;
            </span>
          </div>
        </a>
      </li>
    ))}
  </ul>
);
