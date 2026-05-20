import { logos } from "@/content/copy";
import { LogoPlaceholder } from "./LogoPlaceholder";

export function LogoMarquee() {
  return (
    <section className="relative">
      <div className="container-wide">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center justify-items-center gap-x-4 gap-y-8 py-12">
          {logos.topRow.map((name) => (
            <LogoPlaceholder key={name} label={name} tone="muted" />
          ))}
        </div>
      </div>
    </section>
  );
}
