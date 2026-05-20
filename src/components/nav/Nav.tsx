"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, Wand2, X } from "lucide-react";
import { motion } from "framer-motion";
import { nav } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/*
        Absolute positioning so the nav sits in the natural document flow
        and scrolls away with the hero — only visible at the very top.
      */}
      <header className="absolute inset-x-0 top-0 z-40 bg-transparent">
        <nav className="container-wide flex items-center h-[88px] gap-8">
          <a href="#" aria-label="Home" className="shrink-0">
            <Logo />
          </a>

          <ul className="hidden lg:flex items-center gap-2 ml-4">
            {nav.links.map((link) => (
              <li key={link.label}>
                <button className="group inline-flex items-center gap-1.5 px-4 h-11 rounded-md text-[16px] font-medium text-[var(--color-ink-700)] hover:text-[var(--color-ink-900)] hover:bg-[var(--color-surface-tint-2)] transition-colors">
                  {link.label}
                  {link.hasMenu && (
                    <ChevronDown
                      className="h-4 w-4 -mr-0.5 text-[var(--color-ink-300)] group-hover:rotate-180 transition-transform duration-200"
                      strokeWidth={2.5}
                    />
                  )}
                </button>
              </li>
            ))}
            <li className="ml-2">
              <button className="inline-flex items-center gap-2 px-4 h-11 rounded-md text-[16px] font-medium text-[var(--color-accent-600)] hover:bg-[var(--color-accent-50)] transition-colors">
                <Wand2 className="h-4 w-4" strokeWidth={2.5} />
                {nav.guideMe}
              </button>
            </li>
          </ul>

          <div className="ml-auto flex items-center gap-3">
            <button className="hidden md:inline-flex items-center px-4 h-10 rounded-full text-[16px] font-medium text-[var(--color-ink-700)] hover:bg-[var(--color-surface-tint-2)] transition-colors">
              {nav.signIn}
            </button>
            <Button size="md" className="h-10 px-5 text-[15px]">{nav.contact}</Button>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-ink-700)] hover:bg-[var(--color-surface-tint-2)]"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white lg:hidden"
        >
          <div className="flex items-center h-[60px] px-6 border-b border-[var(--color-border-subtle)]">
            <Logo />
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="ml-auto inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-[var(--color-surface-tint-2)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-6 py-4 flex flex-col">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center justify-between py-4 text-[18px] font-medium text-[var(--color-ink-900)] border-b border-[var(--color-border-subtle)]"
              >
                {link.label}
                {link.hasMenu && (
                  <ChevronDown className="h-4 w-4 text-[var(--color-ink-300)]" />
                )}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center gap-2 py-4 text-[18px] font-medium text-[var(--color-accent-600)] border-b border-[var(--color-border-subtle)]"
            >
              <Wand2 className="h-4 w-4" />
              {nav.guideMe}
            </a>
            <div className="mt-6 flex gap-2">
              <Button variant="secondary" className="flex-1" withArrow={false}>
                {nav.signIn}
              </Button>
              <Button className="flex-1">{nav.contact}</Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
