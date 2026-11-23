import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiC,
  SiVite,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";
import Education from "./Education";
import { Sertif } from "./sertif";

const skills = [
  { name: "HTML",       icon: <FaHtml5 /> },
  { name: "CSS",        icon: <FaCss3Alt /> },
  { name: "Tailwind",   icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React",      icon: <FaReact /> },
  { name: "MySQL",      icon: <SiMysql /> },
  { name: "Next.js",    icon: <SiNextdotjs /> },
  { name: "C",          icon: <SiC /> },
  { name: "Vite",       icon: <SiVite /> },
  { name: "Git",        icon: <SiGit /> },
];

const tabs = [
  { id: "skills",       label: "Tech stack"    },
  { id: "education",    label: "Education"     },
  { id: "certificates", label: "Certificates"  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="skills" className="w-full" style={{ fontFamily: "var(--ibm-font)" }}>
      {/* Tab bar — IBM nav-link style */}
      <div
        className="mb-6 flex flex-wrap border-b border-[var(--border-subtle)]"
        role="tablist"
        aria-label="Background details"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative -mb-px px-4 py-4 text-sm transition-colors"
            style={{
              fontFamily: "var(--ibm-font)",
              color: activeTab === tab.id ? "var(--ibm-text-accent)" : "var(--text-secondary)",
              borderBottom: activeTab === tab.id
                ? "2px solid var(--ibm-text-accent)"
                : "2px solid transparent",
              fontWeight: activeTab === tab.id ? 600 : 400,
              transitionDuration: "var(--ibm-dur-fast)",
              transitionTimingFunction: "var(--ibm-ease)",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      {activeTab === "skills" && (
        <div className="grid grid-cols-2 gap-px bg-[var(--border-subtle)] sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 bg-[var(--surface)] px-4 py-4 text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
              style={{
                transition: "background-color var(--ibm-dur-fast) var(--ibm-ease)",
                fontFamily: "var(--ibm-font)",
                fontSize: "14px",
              }}
            >
              <span
                className="text-xl"
                aria-hidden="true"
                style={{ color: "var(--ibm-text-accent)" }}
              >
                {skill.icon}
              </span>
              {skill.name}
            </div>
          ))}
        </div>
      )}

      {activeTab === "education" && (
        <div className="py-2">
          <Education />
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="py-2">
          <Sertif />
        </div>
      )}
    </div>
  );
}
