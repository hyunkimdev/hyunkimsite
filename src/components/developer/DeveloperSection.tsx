import { developer } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { ConnectDiagram } from "./ConnectDiagram";
import { ScaleStats } from "./ScaleStats";
import { IntegrationPath } from "./IntegrationPath";

export function DeveloperSection() {
  return (
    <section
      className="py-24 text-white"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 0%, #0f1d4a 0%, transparent 50%), #06093a",
      }}
    >
      <div className="container-wide">
        <h2 className="text-h-section max-w-[760px] text-white">
          <span>{developer.intro.lead}</span>{" "}
          <span className="text-[#aab1d4]">{developer.intro.rest}</span>
        </h2>
        <div className="flex flex-wrap gap-3 mt-7">
          <Button>{developer.intro.ctaPrimary}</Button>
          <Button variant="darkSecondary">{developer.intro.ctaSecondary}</Button>
        </div>

        <div className="mt-16 pb-8 border-b border-[rgba(255,255,255,0.08)]">
          <h3 className="text-[18px] leading-[1.4] text-white max-w-[640px]">
            <span className="font-medium">{developer.connect.title}</span>{" "}
            <span className="text-[#aab1d4]">{developer.connect.rest}</span>
          </h3>
          <ConnectDiagram />
        </div>

        <ScaleStats />
        <IntegrationPath />
      </div>
    </section>
  );
}
