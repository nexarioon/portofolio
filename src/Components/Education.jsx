import React from "react"
import { cn } from "@/lib/utils";

const cardContent = {
  title: "2023-Present",
  subtitles: "UPN \"Veteran\" Jakarta",
  description:
    "Bachelor’s Degree in Information Systems",
};

const CardBody = ({ className = "" }) => (
  <div className={cn("px-2 pt-3 text-start text-[var(--text-primary)] sm:px-4", className)}>
    <h3 className="text-lg font-bold tracking-tighter">
      {cardContent.title}
    </h3>
    <h3 className="text-lg font-bold tracking-tighter mb-1">
      {cardContent.subtitles}
    </h3>
    <p className="text-sm leading-5 text-[var(--text-secondary)]">{cardContent.description}</p>
  </div>
);

export const Education = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] p-2">
      <div className="relative aspect-video">
        <img
          className="absolute inset-0 h-full w-full rounded-xl object-cover shadow-[0_0_10px_var(--border-subtle)]"
          src="/images/upn.jpg"
          alt={'UPN "Veteran" Jakarta campus'}
        />
      </div>
      <CardBody className="mb-2" />
    </div>
  );
};

export default Education;
