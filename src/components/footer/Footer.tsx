import { Globe } from "lucide-react";
import { footer } from "@/content/copy";

type Sub = { heading: string; links: string[] };
type Col = {
  heading: string;
  links: string[];
  developers?: Sub;
  resources?: Sub;
  support?: Sub & { signIn: string };
};

export function Footer() {
  const cols = footer.columns as Col[];
  return (
    <footer className="bg-white border-t border-[var(--color-border-subtle)] pt-16 pb-12">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {cols.map((col) => (
            <div key={col.heading} className="flex flex-col gap-8">
              <FooterCol heading={col.heading} links={col.links} />
              {col.developers && <FooterCol {...col.developers} />}
              {col.resources && <FooterCol {...col.resources} />}
              {col.support && (
                <div className="flex flex-col gap-6">
                  <FooterCol heading={col.support.heading} links={col.support.links} />
                  <a
                    href="#"
                    className="text-[14px] font-medium text-[var(--color-accent-600)] hover:underline inline-flex items-center gap-1"
                  >
                    {col.support.signIn}
                    <span aria-hidden>›</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-6 flex-wrap">
          <div className="flex flex-col gap-3 text-[13px] text-[var(--color-ink-400)]">
            <button className="inline-flex items-center gap-1.5 text-[var(--color-ink-700)] hover:underline">
              <Globe className="h-3.5 w-3.5" />
              {footer.locale}
            </button>
            <span>{footer.copyright}</span>
          </div>
          <div
            className="w-12 h-8 rounded bg-[var(--color-ink-900)]"
            aria-hidden
            title="brand mark placeholder"
          />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-[14px] font-semibold text-[var(--color-ink-900)] mb-3">
        {heading}
      </h3>
      <ul className="flex flex-col gap-1.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-[13px] text-[var(--color-ink-400)] hover:text-[var(--color-accent-600)] transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
