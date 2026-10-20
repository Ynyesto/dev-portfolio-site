import { SITE } from "@/lib/site";
import RecommendationCarousel from "@/components/RecommendationCarousel";

// Selected from the LinkedIn recommendations supplied by Antonio on 20 October 2026.
// English excerpts are verbatim. Carlos's and Ivan's excerpts are translated from Spanish.
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
    translated: true,
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
  {
    author: "Diego Mazo Rosete",
    role: "Senior Product Manager",
    relationship: "Hackathon teammate & product advisor · BitChill",
    quote:
      "He designed and built the protocol and turned it into a live, fully automated product on mainnet. I stayed involved as a product advisor throughout and saw his persistence, his ownership, and how he balanced technical rigour with a clear product vision.",
  },
  {
    author: "Ivan Ortí Fort",
    role: "Solidity Security Researcher and Biomedical Engineer",
    relationship: "Security auditor · BitChill",
    quote:
      "I could see that he is an excellent developer: the code was impeccably structured and everything was very well documented. His strong command of development patterns was clear, as the code was very easy for someone other than its creator to understand.",
    translated: true,
  },
  {
    author: "Borja Neira",
    role: "Tokenized Financial Products & Market Structure · Tempo",
    relationship: "Industry peer",
    quote:
      "We don’t always agree, but he listens, asks good questions, and is willing to change his mind when the argument is good. That makes him someone I enjoy debating with, because he’s after the right answer rather than winning the argument.",
  },
];

export default function Recommendations() {
  return (
    <RecommendationCarousel authors={recommendations.map(({ author }) => author)}>
      {recommendations.map(({ author, role, relationship, quote, translated }) => (
        <figure key={author} className="flex min-w-0 w-full flex-col gap-6 py-8 sm:py-10">
          <p className="font-mono text-xs text-accent">{relationship}</p>
          <blockquote
            cite={SITE.linkedinRecommendations}
            className="max-w-3xl text-xl sm:text-2xl font-medium leading-relaxed tracking-tight"
          >
            <p>“{quote}”</p>
          </blockquote>
          <figcaption className="mt-auto pt-2">
            <p className="font-medium">{author}</p>
            <p className="mt-1 text-sm text-muted leading-relaxed">{role}</p>
            {translated && <p className="mt-2 text-xs text-muted">Translated from Spanish</p>}
          </figcaption>
        </figure>
      ))}
    </RecommendationCarousel>
  );
}
