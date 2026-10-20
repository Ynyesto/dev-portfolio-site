import RecommendationCarousel from "@/components/RecommendationCarousel";

// Selected from the LinkedIn recommendations supplied by Antonio on 20 October 2026.
// Highlights are adapted for clarity; Carlos's and Ivan's are also translated from Spanish.
const recommendations = [
  {
    author: "Jose Carlos Montero Gómez",
    role: "Blockchain Security Research Manager · OpenZeppelin",
    relationship: "Former manager · Umbrella Research",
    highlight:
      "Antonio owned most of our production backend, from indexers and APIs to PostgreSQL and Redis. He is reliable, takes ownership, and I’d happily work with him again.",
  },
  {
    author: "Carlos Buendía",
    role: "Umbrella Research co-founder · Formerly ConsenSys and Avantgarde",
    relationship: "Former manager · Umbrella Research",
    highlight:
      "Antonio brought strong onchain analysis to Umbrella and took on increasing backend responsibility with excellent results. Any team that hires him gains an excellent professional.",
  },
  {
    author: "David Felipe Carvajal",
    role: "Tropykus integration advisor · Reviewed my Immunefi report",
    relationship: "Protocol integration & security",
    highlight:
      "Antonio read and understood our contracts before relying on them. His Immunefi report was clear, accurate, and responsibly disclosed. I’d recommend him to any team building on-chain.",
  },
  {
    author: "Alex Gilabert",
    role: "Senior Product Manager · Bitpanda",
    relationship: "Product advisor · BitChill",
    highlight:
      "Antonio combines technical depth with product judgement. He considers users, priorities, and go-to-market strategy, and can turn an idea into a real product.",
  },
  {
    author: "Diego Mazo Rosete",
    role: "Senior Product Manager",
    relationship: "Hackathon teammate & product advisor · BitChill",
    highlight:
      "Antonio took BitChill from a hackathon prototype to a live, automated protocol on mainnet. He combines technical rigour, persistence, ownership, and a clear product vision.",
  },
  {
    author: "Ivan Ortí Fort",
    role: "Solidity Security Researcher and Biomedical Engineer",
    relationship: "Security auditor · BitChill",
    highlight:
      "As BitChill’s security auditor, I found Antonio’s code exceptionally well structured, documented, and easy to review.",
  },
  {
    author: "Borja Neira",
    role: "Tokenized Financial Products & Market Structure · Tempo",
    relationship: "Industry peer",
    highlight:
      "Any team would benefit from Antonio’s mix of conviction and openness. He listens, asks good questions, and changes his mind when the argument is good.",
  },
];

export default function Recommendations() {
  return (
    <RecommendationCarousel authors={recommendations.map(({ author }) => author)}>
      {recommendations.map(({ author, role, relationship, highlight }) => (
        <figure key={author} className="flex min-w-0 w-full flex-col gap-6 py-8 sm:py-10">
          <p className="font-mono text-xs text-accent">{relationship}</p>
          <p className="max-w-3xl text-xl sm:text-2xl font-medium leading-relaxed tracking-tight">
            {highlight}
          </p>
          <figcaption className="mt-auto pt-2">
            <p className="font-medium">{author}</p>
            <p className="mt-1 text-sm text-muted leading-relaxed">{role}</p>
          </figcaption>
        </figure>
      ))}
    </RecommendationCarousel>
  );
}
