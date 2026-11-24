import React from "react";
import Contact from "./Contact";

const navLinks = [
  { name: "Home",     link: "#home"    },
  { name: "About",    link: "#about"   },
  { name: "Projects", link: "#porto"   },
  { name: "Contact",  link: "#contact" },
];

const Footer = () => (
  <footer
    className="border-t border-[var(--border-subtle)] bg-[var(--surface-muted)] text-[var(--text-primary)]"
    style={{ fontFamily: "var(--ibm-font)" }}
  >
    {/* Main footer row */}
    <div className="mx-auto max-w-[1312px] px-4 py-12 md:px-8 lg:px-16">
      <div className="grid gap-8 md:grid-cols-[1fr_1fr_auto]">
        {/* Brand */}
        <div>
          <p className="text-base font-semibold text-[var(--text-primary)]">Fendi Permadi</p>
          <p
            className="mt-2 max-w-xs text-sm leading-[1.5]"
            style={{ color: "var(--text-secondary)" }}
          >
            Software engineer based in Jakarta, building production systems
            end-to-end.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            Navigation
          </p>
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="text-sm"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color var(--ibm-dur-fast) var(--ibm-ease)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ibm-text-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            Connect
          </p>
          <Contact />
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div
      className="border-t"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="mx-auto flex max-w-[1312px] items-center justify-between px-4 py-4 md:px-8 lg:px-16">
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          Copyright &copy; 2025 Fendi Permadi
        </p>
        <a
          href="#home"
          className="text-xs"
          style={{
            color: "var(--text-secondary)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            transition: "color var(--ibm-dur-fast) var(--ibm-ease)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ibm-text-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          Back to top &uarr;
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
