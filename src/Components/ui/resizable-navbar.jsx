"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion as Motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  return (
    <Motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { visible }) : child
      )}
    </Motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => (
  <Motion.div
    animate={{
      boxShadow: visible
        ? "0 1px 0 var(--border-subtle), 0 4px 16px rgba(0,0,0,0.08)"
        : "0 1px 0 var(--border-subtle)",
      backdropFilter: visible ? "blur(8px)" : "none",
      backgroundColor: "var(--nav-bg)",
    }}
    transition={{ duration: 0.15, ease: [0, 0, 0.38, 0.9] }}
    style={{ minWidth: 0 }}
    className={cn(
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start bg-[var(--nav-bg)] px-8 py-0 lg:flex",
      className
    )}
  >
    {children}
  </Motion.div>
);

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <Motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm lg:flex",
        className
      )}
    >
      {items.map((item) => (
        <a
          key={`link-${item.name}`}
          href={item.link}
          onMouseEnter={() => setHovered(item.name)}
          onClick={onItemClick}
          className="relative px-4 py-5 text-[length:14px] text-[var(--text-primary)] transition-colors duration-[70ms]"
          style={{ borderBottom: hovered === item.name ? "2px solid var(--ibm-primary)" : "2px solid transparent" }}
        >
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </Motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => (
  <Motion.div
    animate={{
      boxShadow: visible
        ? "0 1px 0 var(--border-subtle), 0 4px 16px rgba(0,0,0,0.08)"
        : "0 1px 0 var(--border-subtle)",
    }}
    transition={{ duration: 0.15 }}
    className={cn(
      "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-[var(--nav-bg)] px-4 py-0 lg:hidden",
      className
    )}
  >
    {children}
  </Motion.div>
);

export const MobileNavHeader = ({ children, className }) => (
  <div className={cn("flex h-12 w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({ children, className, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <Motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.15, ease: [0, 0, 0.38, 0.9] }}
        className={cn(
          "w-full overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--nav-bg)]",
          className
        )}
      >
        <div className="flex flex-col py-2">
          {children}
        </div>
      </Motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }) =>
  isOpen ? (
    <IconX
      aria-label="Close menu"
      size={20}
      className="cursor-pointer text-[var(--text-primary)]"
      onClick={onClick}
    />
  ) : (
    <IconMenu2
      aria-label="Open menu"
      size={20}
      className="cursor-pointer text-[var(--text-primary)]"
      onClick={onClick}
    />
  );

export const NavbarLogo = () => (
  <a
    href="#home"
    className="relative z-20 flex items-center py-5 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--ibm-text-accent)]"
    style={{ transition: "color var(--ibm-dur-fast) var(--ibm-ease)" }}
  >
    Fendi Permadi
  </a>
);

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const base =
    "inline-flex cursor-pointer items-center justify-center px-6 py-4 text-sm font-normal leading-none transition-colors";
  const variants = {
    primary:
      "bg-[var(--ibm-primary)] text-white hover:bg-[var(--ibm-primary-hover)] active:bg-[var(--ibm-primary-active)]",
    secondary:
      "border border-[var(--text-primary)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-muted)] hover:border-[var(--ibm-text-accent)] hover:text-[var(--ibm-text-accent)]",
    ghost:
      "bg-transparent text-[var(--text-primary)] hover:bg-[hsla(0,0%,55.3%,0.12)] active:bg-[var(--ibm-bg-active)]",
  };

  return (
    <a
      href={href || undefined}
      className={cn(base, variants[variant] ?? variants.primary, className)}
      style={{ transitionDuration: "var(--ibm-dur-fast)", transitionTimingFunction: "var(--ibm-ease)" }}
      {...props}
    >
      {children}
    </a>
  );
};
