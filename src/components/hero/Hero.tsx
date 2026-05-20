import { GradientMesh } from "./GradientMesh";
import { LetterCollision } from "./LetterCollision";

export function Hero() {
  return (
    <section
      data-hero
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Mesh constrained to the right portion so text stays readable. */}
      <div className="absolute top-0 right-0 w-full md:w-[58%] h-full pointer-events-none opacity-60 md:opacity-100">
        <GradientMesh />
      </div>

      {/* letters anchored bottom-left — bypass container padding to sit
          very close to the viewport edge. nav stays inside container. */}
      <div className="relative flex-1 flex flex-col justify-end">
        <div className="pl-4 sm:pl-5 md:pl-6 pb-8 md:pb-12">
          <LetterCollision />
        </div>
      </div>
    </section>
  );
}
