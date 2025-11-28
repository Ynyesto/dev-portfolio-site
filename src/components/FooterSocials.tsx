import { SITE } from "@/lib/site";

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-4">
      <a aria-label="Email" className="opacity-80 hover:opacity-100" href={`mailto:${SITE.email}`}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 0 8 7 8-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        aria-label="GitHub"
        className="opacity-80 hover:opacity-100"
        href={SITE.github}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.8.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.25-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.92 1.25 3.23 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .5Z" />
        </svg>
      </a>
      <a
        aria-label="LinkedIn"
        className="opacity-80 hover:opacity-100"
        href="https://www.linkedin.com/in/antonio-maria-rodriguez-ynyesto-sanchez"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98Zm7.5 0H14v1.64h.05c.35-.66 1.22-1.36 2.5-1.36 2.68 0 3.18 1.76 3.18 4.05V21h-3.96v-5.37c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.84V21H10.5V8.98Z" />
        </svg>
      </a>
      <a
        aria-label="X (Twitter)"
        className="opacity-80 hover:opacity-100"
        href={SITE.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.495 11.24H16.17l-5.206-6.807L4.96 21.75H1.65l7.73-8.84L1.25 2.25H8.08l4.713 6.242 5.45-6.242Zm-1.161 17.28h1.833L7.01 4.35H5.046l12.037 15.18Z" />
        </svg>
      </a>
      <a
        aria-label="Telegram"
        className="opacity-80 hover:opacity-100"
        href={SITE.telegram}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.035 15.59 8.86 19.8c.438 0 .628-.188.855-.414l2.055-1.969 4.26 3.117c.781.43 1.336.203 1.547-.719l2.801-13.16c.25-1.172-.445-1.633-1.207-1.34L3.74 9.74C2.605 10.195 2.61 10.83 3.53 11.1l3.98 1.156 9.26-5.84c.435-.263.832-.117.505.147l-7.24 6.587Z" />
        </svg>
      </a>
      <a
        aria-label="Calendly"
        className="opacity-80 hover:opacity-100"
        href={SITE.calendly}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M8 11h5a3 3 0 1 1 0 6H8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        aria-label="Immunefi"
        className="opacity-80 hover:opacity-100"
        href="https://immunefi.com/profile/Ynyesto"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L3 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
