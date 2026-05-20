import { startup } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { StartupCarousel } from "./StartupCarousel";

export function StartupTrack() {
  return (
    <section className="bg-white pt-4 pb-24">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <h3 className="text-[28px] leading-[1.18] font-medium text-[var(--color-ink-900)] max-w-[480px]">
              {startup.intro.lead}
            </h3>
            <div className="mt-6">
              <Button>{startup.intro.cta}</Button>
            </div>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] leading-[1.55] text-[var(--color-ink-500)]">
            {startup.intro.rest}
          </p>
        </div>

        <StartupCarousel />

        {/* programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {startup.programs.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-[14px] overflow-hidden p-6 flex flex-col ${p.gradientClass} min-h-[140px]`}
            >
              <p className="text-white text-[14px] leading-[1.5] max-w-[420px] relative z-10">
                <span className="font-semibold">{p.title}</span>{" "}
                <span className="text-white/85">{p.rest}</span>
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-white relative z-10 self-start hover:underline"
              >
                {p.cta}
                <span aria-hidden>›</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
