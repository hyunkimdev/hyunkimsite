import { GradientMesh } from "./GradientMesh";
import { LetterCollision } from "./LetterCollision";

export function Hero() {
  return (
    <section
      data-hero
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Mesh constrained to the right portion so text stays readable. */}
      <div className="absolute top-0 right-0 w-full md:w-[58%] h-full pointer-events-none opacity-60 md:opacity-100">
        <GradientMesh />
      </div>

      <div className="container-wide relative flex-1 flex flex-col justify-end">
        {/* letters anchored bottom-left — pulled past container padding so
            they sit closer to the viewport edge. */}
        <div className="pb-10 md:pb-16 -ml-3 sm:-ml-6 md:-ml-8 xl:-ml-10">
          <LetterCollision />
        </div>
      </div>
    </section>
  );
}
