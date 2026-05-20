import { Rocket, TrendingUp, ShieldAlert } from "lucide-react";
import { platform } from "@/content/copy";
import { Button } from "@/components/ui/Button";

const icons = {
  rocket: Rocket,
  growth: TrendingUp,
  risk: ShieldAlert,
} as const;

export function PlatformTrack() {
  return (
    <section className="bg-white pb-24">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 lg:col-span-7">
            <h3 className="text-[28px] leading-[1.18] font-medium text-[var(--color-ink-900)] max-w-[520px]">
              {platform.intro.lead}
            </h3>
            <div className="mt-6">
              <Button>{platform.intro.cta}</Button>
            </div>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] leading-[1.55] text-[var(--color-ink-500)]">
            {platform.intro.rest}
          </p>
        </div>

        {/* Dashboard illustration */}
        <div className="relative rounded-[20px] overflow-hidden gradient-platform-bg aspect-[2.3/1] min-h-[420px] p-10">
          <PlatformDashboard />
        </div>

        {/* sub cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
          {platform.subCards.map((card) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <div key={card.title} className="flex flex-col">
                <span className="w-8 h-8 rounded-md bg-[var(--color-surface-tint-2)] inline-flex items-center justify-center text-[var(--color-ink-700)] mb-4">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-[14px] leading-[1.55] text-[var(--color-ink-500)]">
                  <span className="font-semibold text-[var(--color-ink-900)]">
                    {card.title}
                  </span>{" "}
                  {card.rest}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-[var(--color-accent-600)] mt-3 hover:underline"
                >
                  {card.cta}
                  <span aria-hidden>›</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlatformDashboard() {
  const rows = [
    { id: "U99", status: "Succeeded", method: "Mastercard ····1234", desc: "Single class" },
    { id: "U99", status: "Disputed", method: "Visa ····4018", desc: "Single class" },
    { id: "$995.00", status: "Succeeded", method: "Klarna", desc: "Annual subscription" },
  ];

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 rounded-[14px] bg-white overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]"
        style={{ width: "82%" }}
      >
        <div className="h-9 bg-[#f3f5f8] border-b border-[#e7ebf1] flex items-center px-3 gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="mx-auto text-[11px] text-[#94a0b5]">
            dashboard.zenflow.com
          </span>
        </div>
        <div className="flex">
          {/* sidebar */}
          <div className="w-40 border-r border-[#eef0f4] py-4 px-3 text-[12px] flex flex-col gap-2">
            <div className="flex items-center gap-1.5 font-semibold text-[var(--color-ink-900)] mb-3">
              <span className="w-4 h-4 rounded-full bg-[var(--color-accent-200)]" />
              ZenFlow
            </div>
            {["Home", "Payments", "Reporting", "Settings"].map((l) => (
              <div
                key={l}
                className={
                  l === "Payments"
                    ? "px-2 py-1 rounded bg-[var(--color-accent-50)] text-[var(--color-accent-600)] font-medium"
                    : "px-2 py-1 text-[#5b687e]"
                }
              >
                {l}
              </div>
            ))}
          </div>
          {/* main content */}
          <div className="flex-1 p-5">
            <div className="text-[14px] font-semibold mb-3">
              Hello, Daybreak Yoga
            </div>
            <div className="rounded-md border border-[#eef0f4] bg-[#fff8ef] text-[11px] p-2.5 mb-4 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#ff8a3d]" />
              <span className="text-[var(--color-ink-700)]">
                Action required
              </span>
              <span className="text-[#94a0b5] ml-1">
                To make sure your business is supportable, we need to collect
                additional information.
              </span>
              <span className="ml-auto px-2 h-6 rounded-full bg-[#ffb7b3] text-[10px] inline-flex items-center text-[#a3231f]">
                Add information
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-md border border-[#eef0f4] p-3">
                <div className="text-[10px] text-[#5b687e]">USD balance</div>
                <div className="text-[18px] font-semibold mt-0.5">$820.56</div>
                <div className="text-[10px] text-[#5b687e]">
                  available to pay out
                </div>
                <div className="mt-2 h-6 rounded-full bg-[var(--color-accent-600)] text-white text-[10px] flex items-center justify-center font-medium px-3 w-fit">
                  Pay out
                </div>
              </div>
              <div className="rounded-md border border-[#eef0f4] p-3">
                <div className="text-[10px] text-[#5b687e]">Expires on Jun 12</div>
                <div className="text-[12px] mt-0.5 font-medium leading-tight">
                  You're pre-qualified for up to $37,000 in financing
                </div>
                <div className="text-[10px] text-[#5b687e] mt-1">
                  If approved, you'll receive funds in as little as one to two
                  business days.
                </div>
                <div className="mt-2 h-6 rounded-full border border-[#dce4ed] text-[10px] flex items-center justify-center px-3 w-fit">
                  Start application
                </div>
              </div>
            </div>
            <div className="rounded-md border border-[#eef0f4]">
              <div className="px-3 py-2 text-[11px] font-semibold text-[var(--color-ink-900)] border-b border-[#eef0f4]">
                Payments
              </div>
              <div className="grid grid-cols-[60px_1fr_1fr_1fr] text-[10px] text-[#94a0b5] uppercase px-3 py-1.5 border-b border-[#eef0f4]">
                <span>ID</span>
                <span>Status</span>
                <span>Payment method</span>
                <span>Description</span>
              </div>
              {rows.map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[60px_1fr_1fr_1fr] text-[10px] px-3 py-1.5 border-b border-[#f4f6f9] last:border-0"
                >
                  <span className="text-[var(--color-ink-900)]">{r.id}</span>
                  <span
                    className={`flex items-center gap-1 ${
                      r.status === "Disputed"
                        ? "text-[#ff8a3d]"
                        : "text-[#3fb950]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        r.status === "Disputed" ? "bg-[#ff8a3d]" : "bg-[#3fb950]"
                      }`}
                    />
                    {r.status}
                  </span>
                  <span className="text-[var(--color-ink-700)]">{r.method}</span>
                  <span className="text-[#5b687e]">{r.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating annotations */}
      <div className="absolute right-0 top-4 w-56 rounded-md bg-white p-3 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.3)] text-[11px]">
        <div className="font-semibold mb-1 text-[var(--color-ink-900)]">
          Notification banner
        </div>
        <div className="text-[#5b687e] leading-relaxed">
          Show a banner listing required actions and onboarding.
        </div>
        <code className="block mt-2 text-[9px] text-[var(--color-ink-700)] font-mono">
          hyunKimConnectInstance.create("notification-banner");
        </code>
      </div>
      <div className="absolute right-2 bottom-4 w-56 rounded-md bg-white p-3 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.3)] text-[11px]">
        <div className="font-semibold mb-1 text-[var(--color-ink-900)]">
          Capital financing promotion
        </div>
        <div className="text-[#5b687e] leading-relaxed">
          Show a connected account's financing offer and allow them to apply.
        </div>
        <code className="block mt-2 text-[9px] text-[var(--color-ink-700)] font-mono">
          hyunKimConnectInstance.create("capital-financing-promotion");
        </code>
      </div>
    </div>
  );
}
