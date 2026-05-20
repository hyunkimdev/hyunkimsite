"use client";

import { useState } from "react";
import { developer } from "@/content/copy";
import { cn } from "@/lib/cn";

const codeTabs = [
  {
    label: "Node",
    lines: [
      ["const ", "hk", " = ", "require", "(", "'hyun-kim'", ")(", "'sk_test_abc123'", ");"],
      [],
      ["await hk.", "accountLinks", ".create({"],
      ["  ", "account", ": ", "'acct_456'", ","],
      ["  ", "refresh_url", ": ", "'https://example.com/reauth'", ","],
      ["  ", "return_url", ": ", "'https://example.com/return'", ","],
      ["  ", "type", ": ", "'account_onboarding'", ","],
      ["});"],
    ],
  },
];

export function IntegrationPath() {
  const [tab] = useState(0);

  return (
    <div className="mt-16">
      <h3 className="text-[18px] leading-[1.4] text-white max-w-[640px]">
        <span className="font-medium">{developer.integration.title}</span>{" "}
        <span className="text-[#aab1d4]">{developer.integration.rest}</span>
      </h3>

      <div className="grid grid-cols-12 gap-6 mt-10">
        {/* Path tiles - 3 visuals on left */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-3">
          <PathVisual variant="no-code" />
          <PathVisual variant="platform" />
          <PathVisual variant="dev" />
        </div>

        {/* Code block on right */}
        <div className="col-span-12 lg:col-span-5">
          <div className="rounded-[12px] bg-[#0a1330] border border-[rgba(255,255,255,0.08)] overflow-hidden h-full min-h-[260px]">
            <div className="flex border-b border-[rgba(255,255,255,0.08)]">
              {codeTabs.map((t, i) => (
                <button
                  key={t.label}
                  className={cn(
                    "px-3 py-2 text-[11px] font-mono",
                    tab === i
                      ? "text-white border-b-2 border-[var(--color-accent-400)]"
                      : "text-[#7a86b8]",
                  )}
                >
                  {t.label}
                </button>
              ))}
              <div className="ml-auto px-3 py-2 text-[10px] text-[#7a86b8] font-mono">
                NORMAL  server.js               ··0% # 8/8 ln : 4
              </div>
            </div>
            <pre className="p-4 font-mono text-[11px] leading-[1.55] text-[#aab1d4]">
              {codeTabs[tab].lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-[#4a567f] w-6 shrink-0">{i + 1}</span>
                  <span>
                    {line.map((tok, j) => {
                      const isString = tok.startsWith("'") && tok.endsWith("'");
                      const isKeyword = ["const ", "require", "await hk."].includes(tok);
                      return (
                        <span
                          key={j}
                          className={cn(
                            isString && "text-[#ff8a3d]",
                            isKeyword && "text-[#ff5a8a]",
                          )}
                        >
                          {tok}
                        </span>
                      );
                    })}
                  </span>
                </div>
              ))}
              <div className="text-[#3fb950] mt-2 pl-6">
                $ node server.js && hk listen
              </div>
              <div className="text-[#aab1d4] pl-6">{">"} Ready! Waiting for requests...</div>
            </pre>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {developer.integration.paths.map((p) => (
          <div key={p.title} className="flex flex-col">
            <p className="text-[14px] leading-[1.55] text-[#aab1d4]">
              <span className="font-semibold text-white">{p.title}</span>{" "}
              {p.rest}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-[#a48cff] mt-3 hover:underline"
            >
              {p.cta}
              <span aria-hidden>›</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function PathVisual({ variant }: { variant: "no-code" | "platform" | "dev" }) {
  if (variant === "no-code") {
    return (
      <div className="rounded-[10px] bg-[#0a1330] border border-[rgba(255,255,255,0.08)] aspect-square p-3 flex flex-col">
        <div className="rounded-md bg-[#0f1a40] p-2 text-[10px] flex-1 flex flex-col gap-1.5">
          <div className="flex items-start gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[var(--color-accent-400)] shrink-0" />
            <div className="rounded bg-[#1a2658] px-1.5 py-1 text-[#aab1d4]">
              Hi, I&apos;m looking for a simple day cream with SPF?
            </div>
          </div>
          <div className="rounded bg-[#1a2658] px-1.5 py-1 text-[#aab1d4]">
            Sure. In that case, I&apos;d recommend our pure glow cream?
          </div>
          <div className="mt-auto rounded bg-[#1a2658] p-1.5 flex items-center gap-1.5">
            <div className="w-8 h-8 rounded bg-white" />
            <div className="text-[8px] flex-1">
              <div className="text-white">Pure glow cream</div>
              <div className="text-[#aab1d4]">$19.99</div>
            </div>
          </div>
        </div>
        <div className="text-[8px] text-[#7a86b8] mt-1.5 break-all">
          https://buy.hyunkim.com/test_abc12345
        </div>
      </div>
    );
  }
  if (variant === "platform") {
    const tiles = ["WIX", "S", "F", "M", "®"];
    return (
      <div className="rounded-[10px] bg-[#0a1330] border border-[rgba(255,255,255,0.08)] aspect-square p-3">
        <div className="grid grid-cols-3 grid-rows-3 gap-1.5 h-full">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded bg-[#0f1a40] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-white text-[12px] font-bold"
            >
              {tiles[i % tiles.length]}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-[10px] bg-[#0a1330] border border-[rgba(255,255,255,0.08)] aspect-square p-3 flex items-center justify-center">
      <div className="font-mono text-[10px] text-[#aab1d4] leading-[1.6]">
        <div className="text-[#3fb950]">
          $ hk init
        </div>
        <div>setting up project...</div>
        <div className="text-[#ff8a3d]">applePayDomains</div>
        <div className="text-[#ff8a3d]">applicationFees</div>
        <div className="text-[#ff8a3d]">balances</div>
      </div>
    </div>
  );
}
