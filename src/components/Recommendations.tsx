import { SITE } from "@/lib/site";

// Selected from the LinkedIn recommendations supplied by Antonio on 20 October 2026.
// English excerpts are verbatim. Carlos's translation retains the original below.
const recommendations = [
  {
    author: "Jose Carlos Montero Gómez",
    role: "Blockchain Security Research Manager · OpenZeppelin",
    relationship: "Former manager · Umbrella Research",
    quote:
      "He owned most of the TypeScript backend, including the indexers, the data API, and the persistence layer (PostgreSQL and Redis infra) in staging and production.",
  },
  {
    author: "Carlos Buendía",
    role: "Umbrella Research co-founder · Formerly ConsenSys and Avantgarde",
    relationship: "Former manager · Umbrella Research",
    quote:
      "He is passionate about what he does, intelligent, and has a solid command of onchain analysis, which brought enormous value to the project.",
    original:
      "Es una persona apasionada por lo que hace, inteligente y con un dominio sólido del análisis onchain, algo que aportó un valor enorme al proyecto.",
  },
  {
    author: "David Felipe Carvajal",
    role: "Tropykus integration advisor · Reviewed my Immunefi report",
    relationship: "Protocol integration & security",
    quote:
      "I reviewed and verified the report myself: it was clear, accurate, and responsibly disclosed, and we addressed it.",
  },
  {
    author: "Alex Gilabert",
    role: "Senior Product Manager · Bitpanda",
    relationship: "Product advisor · BitChill",
    quote:
      "What stands out is that Antonio doesn't just build. He thinks carefully about who the product is for, how to reach them and what to prioritise, and he has owned the strategy and go-to-market side as well as the engineering.",
  },
];

export default function Recommendations() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {recommendations.map(({ author, role, relationship, quote, original }) => (
        <figure key={author} className="panel p-6 sm:p-8 flex flex-col gap-5">
          <p className="font-mono text-xs text-accent">{relationship}</p>
          <blockquote cite={SITE.linkedinRecommendations} className="leading-relaxed">
            <p>“{quote}”</p>
          </blockquote>
          {original && (
            <div className="text-xs text-muted">
              <p>Translated from Spanish</p>
              <details className="mt-2">
                <summary className="w-fit cursor-pointer underline underline-offset-4 hover:text-foreground">
                  Original Spanish excerpt
                </summary>
                <p lang="es" className="mt-3 text-sm leading-relaxed">
                  “{original}”
                </p>
              </details>
            </div>
          )}
          <figcaption className="mt-auto border-t border-white/10 pt-5">
            <p className="font-medium">{author}</p>
            <p className="mt-1 text-sm text-muted leading-relaxed">{role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
