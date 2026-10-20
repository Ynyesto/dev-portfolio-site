"use client";

import {
  Children,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const READING_TIME_MS = 15_000;

export default function RecommendationCarousel({
  authors,
  children,
}: {
  authors: string[];
  children: ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const scrollTargetRef = useRef<number | null>(null);
  const trackWidthRef = useRef(0);
  const playbackIntentRef = useRef<boolean | null>(null);
  const trackId = useId();
  const instructionsId = useId();

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsPlaying(
      !motionPreference.matches && !carouselRef.current?.contains(document.activeElement),
    );
    setIsHovered(carouselRef.current?.matches(":hover") ?? false);

    const stopForReducedMotion = () => {
      if (motionPreference.matches) setIsPlaying(false);
    };
    const updatePageVisibility = () => setIsPageVisible(document.visibilityState === "visible");
    updatePageVisibility();
    motionPreference.addEventListener("change", stopForReducedMotion);
    document.addEventListener("visibilitychange", updatePageVisibility);
    return () => {
      motionPreference.removeEventListener("change", stopForReducedMotion);
      document.removeEventListener("visibilitychange", updatePageVisibility);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.5),
      { threshold: 0.5 },
    );
    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Resizing during smooth scrolling must keep the selected recommendation in view.
    const observer = new ResizeObserver(() => {
      if (trackWidthRef.current === track.clientWidth) return;
      trackWidthRef.current = track.clientWidth;
      scrollTargetRef.current = null;
      track.scrollTo({ left: activeIndexRef.current * trackWidthRef.current, behavior: "instant" });
      setActiveIndex(activeIndexRef.current);
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track || authors.length === 0) return;

      const targetIndex = ((index % authors.length) + authors.length) % authors.length;
      const wraps = index < 0 || index >= authors.length;
      activeIndexRef.current = targetIndex;
      scrollTargetRef.current = targetIndex;
      track.scrollTo({
        left: targetIndex * track.clientWidth,
        // Jump directly when looping rather than sweeping past every intermediate slide.
        behavior:
          wraps || window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
      });
    },
    [authors.length],
  );

  useEffect(() => {
    if (!isPlaying || isHovered || !isInView || !isPageVisible || authors.length < 2) return;

    const timer = window.setTimeout(() => goTo(activeIndex + 1), READING_TIME_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, authors.length, goTo, isHovered, isInView, isPageVisible, isPlaying]);

  function navigateTo(index: number) {
    setIsPlaying(false);
    goTo(index);
  }

  function stopForManualScroll() {
    setIsPlaying(false);
    scrollTargetRef.current = null;
    activeIndexRef.current = activeIndex;
  }

  function togglePlayback() {
    // Pointer focus stops playback before click. Preserve the action the reader pressed.
    setIsPlaying(playbackIntentRef.current ?? !isPlaying);
    playbackIntentRef.current = null;
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
    navigateTo(targets[event.key]);
  }

  const buttonClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-foreground hover:border-accent/50 hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

  return (
    <div
      ref={carouselRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Professional recommendations"
      className="min-w-0 border-y border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsPlaying(false)}
    >
      <div className="flex justify-end pt-4">
        <button
          type="button"
          aria-label={
            isPlaying ? "Pause automatic recommendations" : "Play automatic recommendations"
          }
          aria-controls={trackId}
          onPointerDown={() => {
            playbackIntentRef.current = !isPlaying;
          }}
          onPointerCancel={() => {
            playbackIntentRef.current = null;
          }}
          onKeyDown={() => {
            playbackIntentRef.current = null;
          }}
          onClick={togglePlayback}
          className="inline-flex h-9 items-center gap-2 rounded-md px-2 text-sm text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {isPlaying ? (
            <Pause size={14} aria-hidden="true" />
          ) : (
            <Play size={14} aria-hidden="true" />
          )}
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
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
        onPointerDown={stopForManualScroll}
        onWheel={(event) => {
          if (event.deltaX !== 0) stopForManualScroll();
        }}
        onScroll={(event) => {
          const track = event.currentTarget;
          // A resize can clamp scrollLeft before ResizeObserver realigns the selected slide.
          if (track.clientWidth !== trackWidthRef.current) return;
          const index = Math.max(
            0,
            Math.min(authors.length - 1, Math.round(track.scrollLeft / track.clientWidth)),
          );
          if (scrollTargetRef.current === null) {
            activeIndexRef.current = index;
          } else if (Math.abs(track.scrollLeft - scrollTargetRef.current * track.clientWidth) < 1) {
            scrollTargetRef.current = null;
          }
          setActiveIndex(index);
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
        <p
          aria-live={isPlaying ? "off" : "polite"}
          aria-atomic="true"
          className="font-mono text-sm text-muted"
        >
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
              onClick={() => navigateTo(index)}
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
            onClick={() => navigateTo(activeIndex - 1)}
            className={buttonClass}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next recommendation"
            aria-controls={trackId}
            onClick={() => navigateTo(activeIndex + 1)}
            className={buttonClass}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
