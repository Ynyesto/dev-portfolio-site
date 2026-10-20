"use client";

import { Children, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function RecommendationCarousel({
  authors,
  children,
}: {
  authors: string[];
  children: ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackId = useId();
  const instructionsId = useId();

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;

    const targetIndex = Math.max(0, Math.min(authors.length - 1, index));
    track.scrollTo({
      left: targetIndex * track.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    const targets: Record<string, number> = {
      ArrowLeft: activeIndex - 1,
      ArrowRight: activeIndex + 1,
      Home: 0,
      End: authors.length - 1,
    };
    if (!(event.key in targets)) return;

    event.preventDefault();
    goTo(targets[event.key]);
  }

  const buttonClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-foreground hover:border-accent/50 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Professional recommendations"
      className="min-w-0 border-y border-white/10"
    >
      <p id={instructionsId} className="sr-only">
        Use the left and right arrow keys to browse recommendations. Use Home or End to reach the
        first or last recommendation.
      </p>
      <div
        id={trackId}
        ref={trackRef}
        role="group"
        aria-label="Recommendation slides"
        aria-describedby={instructionsId}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={(event) => {
          const track = event.currentTarget;
          setActiveIndex(
            Math.max(
              0,
              Math.min(authors.length - 1, Math.round(track.scrollLeft / track.clientWidth)),
            ),
          );
        }}
        className="recommendation-track flex overflow-x-auto snap-x snap-mandatory overscroll-x-contain focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {Children.map(children, (child, index) => (
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${authors.length}: ${authors[index]}`}
            aria-hidden={index !== activeIndex}
            className="flex w-full min-w-0 shrink-0 snap-start px-1"
          >
            {child}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
        <p aria-live="polite" aria-atomic="true" className="font-mono text-sm text-muted">
          <span className="sr-only">Recommendation </span>
          <span className="text-foreground">{String(activeIndex + 1).padStart(2, "0")}</span>
          {" / "}
          {String(authors.length).padStart(2, "0")}
          <span className="sr-only">: {authors[activeIndex]}</span>
        </p>
        <div
          role="group"
          aria-label="Choose a recommendation"
          className="order-last flex w-full justify-center sm:order-none sm:w-auto"
        >
          {authors.map((author, index) => (
            <button
              key={author}
              type="button"
              aria-label={`Show recommendation by ${author}`}
              aria-controls={trackId}
              aria-current={index === activeIndex ? "true" : undefined}
              aria-disabled={index === activeIndex}
              onClick={() => goTo(index)}
              className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full transition-colors ${index === activeIndex ? "bg-accent" : "bg-white/25 hover:bg-white/50"}`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous recommendation"
            aria-controls={trackId}
            disabled={activeIndex === 0}
            onClick={() => goTo(activeIndex - 1)}
            className={buttonClass}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next recommendation"
            aria-controls={trackId}
            disabled={activeIndex === authors.length - 1}
            onClick={() => goTo(activeIndex + 1)}
            className={buttonClass}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
