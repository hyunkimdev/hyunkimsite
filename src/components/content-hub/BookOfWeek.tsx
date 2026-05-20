import { bookOfWeek } from "@/content/copy";

export function BookOfWeek() {
  return (
    <section className="bg-white pb-24">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-h-section text-[var(--color-ink-900)]">
              {bookOfWeek.title}
            </h2>
            <p className="text-[18px] text-[var(--color-ink-300)] mt-2">
              {bookOfWeek.subtitle}
            </p>
          </div>
          <span
            aria-hidden
            className="hidden md:inline-flex w-10 h-10 rounded-full border border-[var(--color-border-strong)] items-center justify-center"
          >
            <span className="block w-5 h-5 rounded-full border border-[var(--color-ink-700)]" />
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* book cover placeholder */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="aspect-[1/1.18] w-full max-w-[360px] rounded-[2px] overflow-hidden relative"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 50%, #2a2a2a 0%, #0d0d0d 90%)",
              }}
              aria-label="book cover placeholder"
            >
              <div
                className="absolute inset-x-[15%] inset-y-[5%]"
                style={{
                  background:
                    "linear-gradient(180deg, #ff4f1f 0%, #d83807 100%)",
                }}
              >
                <div className="h-full grid grid-rows-[1fr_auto] p-5">
                  <div
                    className="self-center text-white font-black tracking-tight"
                    style={{ fontSize: "clamp(28px, 3.4vw, 56px)", lineHeight: 0.95 }}
                  >
                    Opener
                  </div>
                  <div className="rounded bg-white px-2.5 py-1 text-[10px] text-[var(--color-ink-900)] self-end">
                    Conjectures and refutations
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 flex flex-col">
            <h3 className="text-[22px] font-medium text-[var(--color-ink-900)] leading-[1.25]">
              {bookOfWeek.bookTitle}
              <br />
              <span className="text-[var(--color-ink-500)] text-[16px] font-normal">
                {bookOfWeek.author}
              </span>
            </h3>
            <p className="text-[14px] leading-[1.65] text-[var(--color-ink-500)] mt-5">
              {bookOfWeek.body}
            </p>

            <div className="mt-8 text-[13px] text-[var(--color-ink-500)]">
              For more ideas on economic progress and technological advancement,
              see our in-house publications:
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-3 h-8 rounded-full text-[13px] font-medium border border-[var(--color-border-strong)] text-[var(--color-ink-900)] hover:bg-[var(--color-surface-tint)]"
              >
                <span
                  aria-hidden
                  className="w-3 h-3 rounded-sm bg-[var(--color-ink-900)]"
                />
                {bookOfWeek.pressCta}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-3 h-8 rounded-full text-[13px] font-medium border border-[var(--color-border-strong)] text-[var(--color-ink-900)] hover:bg-[var(--color-surface-tint)]"
              >
                <span
                  aria-hidden
                  className="w-3 h-3 rounded-sm bg-[#ff7a3d]"
                />
                {bookOfWeek.worksCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
