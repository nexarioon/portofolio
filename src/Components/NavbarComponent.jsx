import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/Components/ui/resizable-navbar.jsx";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home",     link: "#home"    },
  { name: "About",    link: "#about"   },
  { name: "Projects", link: "#porto"   },
  { name: "Contact",  link: "#contact" },
];

export function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody className="bg-[var(--nav-bg)]">
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 ml-auto flex items-center border-l border-[var(--border-subtle)]">
          <ThemeToggle compact />
        <a
          href="#contact"
          className="relative z-20 hidden lg:inline-flex items-center justify-center bg-[var(--ibm-primary)] px-6 py-4 text-sm text-white hover:bg-[var(--ibm-primary-hover)] active:bg-[var(--ibm-primary-active)]"
          style={{ transition: "background-color var(--ibm-dur-fast) var(--ibm-ease)" }}
        >
          Contact
        </a>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle compact />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-4 py-3 text-sm text-[var(--text-primary)] hover:bg-[var(--surface-muted)] hover:text-[var(--ibm-text-accent)]"
              style={{ transition: "background-color var(--ibm-dur-fast) var(--ibm-ease), color var(--ibm-dur-fast) var(--ibm-ease)" }}
            >
              {item.name}
            </a>
          ))}
          <div className="border-t border-[var(--border-subtle)] px-4 pt-3 pb-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center bg-[var(--ibm-primary)] px-6 py-4 text-sm text-white hover:bg-[var(--ibm-primary-hover)]"
              style={{ transition: "background-color var(--ibm-dur-fast) var(--ibm-ease)" }}
            >
              Contact
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarComponent;
