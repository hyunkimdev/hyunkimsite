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
}

export function LetterDisplay({ word, secondary }: LetterDisplayProps) {
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
              className="inline-block w-[0.32em] sm:w-[0.4em]"
            />
          );
        }
        return (
          <span
            key={i}
            className="letter inline-block leading-none will-change-transform"
            data-secondary={secondary ? "true" : undefined}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}
