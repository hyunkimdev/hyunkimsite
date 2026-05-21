/**
 * Splits a string into per-character spans for GSAP letter-explosion targeting.
 *
 * No randomness here — keeping SSR output deterministic. The per-letter speed
 * is assigned at mount time by LetterCollision so SSR and client HTML match.
 */

interface LetterDisplayProps {
  word: string;
  /**
   * Marks these glyphs as belonging to the secondary (below-the-fold) lines,
   * which get a random viewport-wide starting position at mount.
   */
  secondary?: boolean;
  /** Paints these glyphs in the accent color. */
  highlight?: boolean;
  /** Keeps these glyphs above the surrounding letter field. */
  priority?: boolean;
  /**
   * Adds a small horizontal margin (in em) to each glyph — used to give
   * the "&" a slim breathing gap without a full-width space character.
   */
  gapEm?: number;
}

export function LetterDisplay({
  word,
  secondary,
  highlight,
  priority,
  gapEm,
}: LetterDisplayProps) {
  // Unicode-aware split (한글 음절은 BMP single code point라 split('')도
  // 안전하지만, 향후 이모지/조합 문자 섞일 가능성 대비)
  const chars = Array.from(word);

  return (
    <>
      {chars.map((char, i) => {
        const isSpace = char === " " || char === " ";
        if (isSpace) {
          return (
            <span
              key={i}
              aria-hidden
              className="inline-block w-[0.16em] sm:w-[0.2em]"
            />
          );
        }
        return (
          <span
            key={i}
            className="letter inline-block leading-none will-change-transform"
            data-secondary={secondary ? "true" : undefined}
            data-priority-letter={priority ? i : undefined}
            style={
              highlight || priority || gapEm !== undefined
                ? {
                    color: highlight ? "var(--color-accent-600)" : undefined,
                    position: priority ? "relative" : undefined,
                    zIndex: priority ? 50 : undefined,
                    marginInline:
                      gapEm !== undefined ? `${gapEm}em` : undefined,
                  }
                : undefined
            }
          >
            {char}
          </span>
        );
      })}
    </>
  );
}
