export function PaymentsIllustration({ large = false }: { large?: boolean }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[16px]"
      style={{
        height: large ? 480 : 360,
        background:
          "radial-gradient(70% 100% at 100% 20%, #ffd9b6 0%, transparent 60%), radial-gradient(60% 80% at 0% 100%, #ffb59a 0%, transparent 65%), linear-gradient(180deg, #fff4ec 0%, #ffeede 100%)",
      }}
    >
      {/* phone */}
      <div className="absolute left-[4%] top-[6%] bottom-[6%] w-[34%]">
        <div className="relative w-full h-full rounded-[28px] bg-[#cdb7e8] shadow-[0_30px_80px_-30px_rgba(86,53,138,0.5)] p-3 flex flex-col">
          <div className="rounded-[20px] bg-white flex-1 p-4 flex flex-col">
            <div className="w-9 h-9 rounded-full bg-[#f6f3fb] mx-auto mb-3 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-[#9b6df0] border-l-transparent" />
            </div>
            <div className="text-[10px] text-[#5b687e] text-center">
              Pay Roastery
            </div>
            <div className="text-[24px] font-semibold text-center text-[var(--color-ink-900)] mt-1">
              $5.46
            </div>
            <div className="text-[8px] text-[#94a0b5] text-center mt-1">
              Tap, insert, or swipe to pay
            </div>
            <div className="mt-4 text-[8px] grid grid-cols-2 gap-y-1">
              <span className="text-[#5b687e]">Mocha Latte</span>
              <span className="text-right">$5.50</span>
              <span className="text-[#5b687e]">Loyalty (10% off)</span>
              <span className="text-right">-$0.55</span>
              <span className="text-[#5b687e]">Tax</span>
              <span className="text-right">$0.51</span>
              <span className="font-semibold pt-1 border-t border-[#eef0f4] mt-1">
                Total
              </span>
              <span className="text-right font-semibold pt-1 border-t border-[#eef0f4] mt-1">
                $5.46
              </span>
            </div>
            <div className="mt-auto h-7 rounded-full bg-[#ffd0bb] flex items-center justify-center text-[9px] text-[#ad5235]">
              Continue
            </div>
          </div>
        </div>
      </div>

      {/* checkout window */}
      <div className="absolute right-[3%] top-[8%] bottom-[8%] w-[58%]">
        <div className="relative w-full h-full rounded-[12px] bg-white shadow-[0_30px_80px_-30px_rgba(86,53,138,0.4)] overflow-hidden border border-[#eef0f4]">
          <div className="h-6 bg-[#f3f5f8] border-b border-[#e7ebf1] flex items-center px-2 gap-1">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
            <span className="mx-auto text-[8px] text-[#94a0b5]">
              roastery.com/checkout
            </span>
          </div>
          <div className="p-3 text-[9px]">
            <div className="text-[10px] font-semibold text-[var(--color-ink-900)] mb-2">
              ROASTERY.
            </div>
            <div className="grid grid-cols-[1fr_120px] gap-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-[#5b687e]">Email</span>
                <div className="h-5 rounded border border-[#e7ebf1] flex items-center px-1.5 text-[8px] text-[#94a0b5]">
                  jane.diaz@hyunkim.com
                </div>
                <div className="flex gap-1 mt-1">
                  <div className="flex-1 h-5 rounded bg-[#22c55e] text-white text-[8px] flex items-center justify-center">
                    ◐ link
                  </div>
                  <div className="flex-1 h-5 rounded bg-black text-white text-[8px] flex items-center justify-center">
                    Pay
                  </div>
                </div>
                <span className="text-center text-[7px] text-[#94a0b5]">
                  or
                </span>
                <span className="text-[#5b687e] mt-1">Payment method</span>
                <div className="h-5 rounded border border-[#e7ebf1] flex items-center px-1.5 gap-1 text-[8px]">
                  <span className="w-3 h-2 rounded-sm bg-[#94a0b5]" /> Card
                </div>
                <div className="h-5 rounded border-2 border-[var(--color-accent-600)] flex items-center px-1.5 gap-1 text-[8px]">
                  <span className="w-3 h-3 rounded bg-[#e6f5ed] text-[#22c55e] flex items-center justify-center">
                    A
                  </span>{" "}
                  Affirm
                </div>
                <div className="text-[7px] text-[#94a0b5] -mt-1 pl-4">
                  Pay now or in 4 interest-free payments of $40.73.
                </div>
              </div>
              <div>
                <span className="text-[8px] font-semibold text-[var(--color-ink-900)]">
                  Order summary
                </span>
                <div className="mt-1 rounded bg-[#f9fafc] p-1.5 flex gap-1.5">
                  <div className="w-7 h-7 rounded bg-white" />
                  <div className="flex-1">
                    <div className="text-[7px] leading-tight">
                      Electric Kettle with Temperature Control
                    </div>
                    <div className="text-[7px] text-[#5b687e] mt-0.5">
                      $150.00
                    </div>
                  </div>
                </div>
                <div className="text-[7px] grid grid-cols-2 gap-y-0.5 mt-1.5">
                  <span className="text-[#5b687e]">Subtotal</span>
                  <span className="text-right">$150.00</span>
                  <span className="text-[#5b687e]">Tax</span>
                  <span className="text-right">$15.34</span>
                  <span className="text-[#5b687e]">Shipping</span>
                  <span className="text-right">Free</span>
                  <span className="font-semibold pt-1 border-t border-[#eef0f4] mt-1">
                    Total
                  </span>
                  <span className="text-right font-semibold pt-1 border-t border-[#eef0f4] mt-1">
                    $165.34
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
