import { aiBanner } from "@/content/copy";
import { Button } from "@/components/ui/Button";

export function AISessionsBanner() {
  return (
    <section className="pb-20 bg-white">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[20px] aspect-[3.3/1] min-h-[280px]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 100% at 60% 100%, #6b3bdc 0%, transparent 60%), radial-gradient(70% 100% at 90% 30%, #ff7a3d 0%, transparent 55%), radial-gradient(70% 80% at 30% 0%, #ff4f88 0%, transparent 60%), linear-gradient(120deg, #1a1230 0%, #381d4a 50%, #532759 100%)",
            }}
          />

          {/* concentric arc ribbons */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
            aria-hidden
          >
            {Array.from({ length: 30 }).map((_, i) => {
              const r = 240 + i * 24;
              return (
                <ellipse
                  key={i}
                  cx="700"
                  cy="-40"
                  rx={r * 1.3}
                  ry={r}
                  fill="none"
                  stroke={`rgba(255, ${120 + i * 4}, ${80 + i * 5}, ${0.06 + (i % 6) * 0.025})`}
                  strokeWidth={i % 3 === 0 ? 2 : 1}
                />
              );
            })}
          </svg>

          {/* silhouette placeholder */}
          <div
            aria-hidden
            className="absolute right-[18%] bottom-0 w-32 h-[60%] rounded-t-[80px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,5,30,0.5) 0%, rgba(15,5,30,0.85) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute right-0 left-0 bottom-0 h-[12%]"
            style={{
              background:
                "linear-gradient(0deg, rgba(20,10,30,0.85), transparent)",
            }}
          />

          {/* copy */}
          <div className="relative h-full flex flex-col justify-center px-10 lg:px-14 max-w-[640px]">
            <h2 className="text-[34px] leading-[1.15] tracking-[-0.018em] font-medium text-white">
              {aiBanner.title}
            </h2>
            <div className="mt-6">
              <Button variant="dark">{aiBanner.cta}</Button>
            </div>
          </div>

          {/* sub brand */}
          <div className="absolute bottom-5 right-6 text-white/80 text-[13px] flex items-baseline gap-1">
            <span className="font-semibold">Hyun Kim</span>
            <span className="text-white/60">{aiBanner.brandSub.replace("Hyun Kim ", "")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
