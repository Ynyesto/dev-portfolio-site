"use client";

import {
  Children,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const READING_TIME_MS = 15_000;

export default function RecommendationCarousel({
  authors,
  children,
}: {
  authors: string[];
  children: ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loopReady, setLoopReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const [readingCycle, setReadingCycle] = useState(0);
  const [manualAnnouncement, setManualAnnouncement] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const scrollTargetRef = useRef<number | null>(null);
  const trackWidthRef = useRef(0);
  const settleTimerRef = useRef<number | null>(null);
  const manualScrollRef = useRef(false);
  const trackId = useId();
  const instructionsId = useId();
  const count = authors.length;
  const loopOffset = loopReady && count > 1 ? 1 : 0;

  // The server renders only the seven originals. Add loop copies and align before paint.
  useLayoutEffect(() => {
    if (!loopReady) {
      setLoopReady(true);
      return;
    }
    const track = trackRef.current;
    if (!track) return;
    trackWidthRef.current = track.clientWidth;
    track.scrollTo({
      left: (activeIndexRef.current + loopOffset) * track.clientWidth,
      behavior: "instant",
    });
  }, [loopOffset, loopReady]);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsPlaying(
      !motionPreference.matches && !carouselRef.current?.contains(document.activeElement),
    );
    setIsHovered(
      window.matchMedia("(hover: hover)").matches && (trackRef.current?.matches(":hover") ?? false),
    );

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
    const observer = new ResizeObserver(() => {
      if (trackWidthRef.current === track.clientWidth) return;
      trackWidthRef.current = track.clientWidth;
      scrollTargetRef.current = null;
      track.scrollTo({
        left: (activeIndexRef.current + loopOffset) * track.clientWidth,
        behavior: "instant",
      });
      setActiveIndex(activeIndexRef.current);
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, [loopOffset]);

  const settleLoop = useCallback(() => {
    if (settleTimerRef.current !== null) window.clearTimeout(settleTimerRef.current);
    settleTimerRef.current = null;
    const track = trackRef.current;
    if (!track || !loopOffset || track.clientWidth !== trackWidthRef.current) return;

    const position = Math.round(track.scrollLeft / track.clientWidth);
    if (Math.abs(track.scrollLeft - position * track.clientWidth) > 1) return;
    if (position !== 0 && position !== count + 1) return;

    const index = position === 0 ? count - 1 : 0;
    activeIndexRef.current = index;
    scrollTargetRef.current = null;
    // The copy and original are identical; this reset is outside the visible transition.
    track.scrollTo({ left: (index + 1) * track.clientWidth, behavior: "instant" });
    setActiveIndex(index);
  }, [count, loopOffset]);

  useEffect(
    () => () => {
      if (settleTimerRef.current !== null) window.clearTimeout(settleTimerRef.current);
    },
    [],
  );

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track || count === 0) return;

      // Finish an interrupted boundary move before accepting another arrow action.
      if (loopOffset) {
        const position = Math.round(track.scrollLeft / track.clientWidth);
        if (position === 0 || position === count + 1) {
          const current = position === 0 ? count - 1 : 0;
          track.scrollTo({ left: (current + 1) * track.clientWidth, behavior: "instant" });
        }
      }
      const targetIndex = ((index % count) + count) % count;
      const targetPosition = loopOffset
        ? index < 0
          ? 0
          : index >= count
            ? count + 1
            : targetIndex + 1
        : targetIndex;
      activeIndexRef.current = targetIndex;
      scrollTargetRef.current = targetPosition;
      track.scrollTo({
        left: targetPosition * track.clientWidth,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    },
    [count, loopOffset],
  );

  useEffect(() => {
    if (!isPlaying || isHovered || !isInView || !isPageVisible || count < 2) return;
    const timer = window.setTimeout(() => {
      setManualAnnouncement(false);
      goTo(activeIndex + 1);
    }, READING_TIME_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, count, goTo, isHovered, isInView, isPageVisible, isPlaying, readingCycle]);

  // Pointer navigation resumes rotation. Keyboard navigation, including button clicks with
  // detail 0, keeps it stopped so slides never change under keyboard or screen reader focus.
  function restartReadingPeriod(resume: boolean) {
    setManualAnnouncement(true);
    setReadingCycle((cycle) => cycle + 1);
    setIsPlaying(resume && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function navigateTo(index: number, resume: boolean) {
    restartReadingPeriod(resume);
    goTo(index);
  }

  function beginManualScroll() {
    restartReadingPeriod(true);
    manualScrollRef.current = true;
    scrollTargetRef.current = null;
    activeIndexRef.current = activeIndex;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const targets: Record<string, number> = {
      ArrowLeft: activeIndex - 1,
      ArrowRight: activeIndex + 1,
      Home: 0,
      End: count - 1,
    };
    if (!(event.key in targets)) return;
    event.preventDefault();
    navigateTo(targets[event.key], false);
  }

  const originals = Children.toArray(children).map((content, index) => ({
    content,
    index,
    copy: false,
    key: authors[index],
  }));
  const slides = loopOffset
    ? [
        { ...originals[count - 1], copy: true, key: "loop-before" },
        ...originals,
        { ...originals[0], copy: true, key: "loop-after" },
      ]
    : originals;
  const buttonClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-foreground hover:border-accent/50 hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

  return (
    <div
      ref={carouselRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Professional recommendations"
      className="min-w-0 border-y border-white/10"
      onFocusCapture={(event) => {
        // Clicking a control focuses it in some browsers; only keyboard focus stops rotation.
        if (event.target.matches(":focus-visible")) setIsPlaying(false);
      }}
    >
      <p id={instructionsId} className="sr-only">
        Use the left and right arrow keys to browse recommendations. Use Home or End to reach the
        first or last recommendation. Automatic rotation stops while you browse with the keyboard.
      </p>
      <div
        id={trackId}
        ref={trackRef}
        role="group"
        aria-label="Recommendation slides"
        aria-describedby={instructionsId}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setIsHovered(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setIsHovered(false);
        }}
        onPointerDown={beginManualScroll}
        onWheel={(event) => {
          if (event.deltaX !== 0) beginManualScroll();
        }}
        onScroll={(event) => {
          const track = event.currentTarget;
          if (track.clientWidth !== trackWidthRef.current || count === 0) return;
          if (manualScrollRef.current) {
            manualScrollRef.current = false;
            restartReadingPeriod(true);
          }
          const position = Math.round(track.scrollLeft / track.clientWidth);
          const index = (((position - loopOffset) % count) + count) % count;
          if (scrollTargetRef.current === null) {
            activeIndexRef.current = index;
          } else if (Math.abs(track.scrollLeft - scrollTargetRef.current * track.clientWidth) < 1) {
            scrollTargetRef.current = null;
          }
          setActiveIndex(index);
          // scrollend handles modern browsers; the timer also covers older implementations.
          if (settleTimerRef.current !== null) window.clearTimeout(settleTimerRef.current);
          settleTimerRef.current = window.setTimeout(settleLoop, 150);
        }}
        onScrollEnd={settleLoop}
        className="recommendation-track flex overflow-x-auto snap-x snap-mandatory overscroll-x-contain focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {slides.map(({ content, index, copy, key }) => (
          <div
            key={key}
            role={copy ? undefined : "group"}
            aria-roledescription={copy ? undefined : "slide"}
            aria-label={copy ? undefined : `${index + 1} of ${count}: ${authors[index]}`}
            aria-hidden={copy || index !== activeIndex}
            inert={copy || undefined}
            className="flex w-full min-w-0 shrink-0 snap-start px-1"
          >
            {content}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
        <p
          aria-live={isPlaying && !manualAnnouncement ? "off" : "polite"}
          aria-atomic="true"
          className="font-mono text-sm text-muted"
        >
          <span className="sr-only">Recommendation </span>
          <span className="text-foreground">{String(activeIndex + 1).padStart(2, "0")}</span>
          {" / "}
          {String(count).padStart(2, "0")}
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
              onClick={(event) => navigateTo(index, event.detail > 0)}
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
            onClick={(event) => navigateTo(activeIndex - 1, event.detail > 0)}
            className={buttonClass}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next recommendation"
            aria-controls={trackId}
            onClick={(event) => navigateTo(activeIndex + 1, event.detail > 0)}
            className={buttonClass}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
