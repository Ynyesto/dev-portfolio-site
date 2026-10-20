import RecommendationCarousel from "@/components/RecommendationCarousel";

// Selected from the LinkedIn recommendations supplied by Antonio on 20 October 2026.
// Highlights are adapted for clarity; Carlos's and Ivan's are also translated from Spanish.
// Engineering evidence leads because the first slides are the most likely to be read.
const recommendations = [
  {
    author: "José Carlos Montero Gómez",
    role: "Umbrella Research co-founder · Blockchain Security Research Manager at OpenZeppelin",
    relationship: "Former manager · Umbrella Research",
    highlight:
      "Antonio owned most of the TypeScript backend of our multi-chain liquidation engine and worked on its Solidity contract. We trusted him with gas funds and our execution wallet infrastructure. I’d happily work with him again.",
  },
  {
    author: "David Felipe Carvajal",
    role: "Co-Founder & CTO · Tropykus",
    relationship: "Protocol integration & security",
    highlight:
      "Antonio read our contracts before building on them, and his Immunefi report on them was clear, accurate, and responsibly disclosed. Builders who read the code they depend on are exactly who you want in DeFi.",
  },
  {
    author: "Ivan Ortí Fort",
    role: "Solidity Security Researcher",
    relationship: "Security auditor · BitChill",
    highlight:
      "Antonio’s code was impeccably structured, well documented, and easy to follow for someone who hadn’t written it. To me, that is the real mark of a good developer.",
  },
  {
    author: "Diego Mazo Rosete",
    role: "Co-Founder & CEO · Tropykus",
    relationship: "Hackathon teammate & product advisor · BitChill",
    highlight:
      "Most hackathon projects end at the demo. Antonio designed and built BitChill’s protocol and turned it into a live, fully automated product on mainnet. That says a lot about the kind of engineer he is.",
  },
  {
    author: "Carlos Buendía",
    role: "Umbrella Research co-founder · Formerly ConsenSys and Avantgarde",
    relationship: "Former manager · Umbrella Research",
    highlight:
      "Antonio’s solid command of on-chain analysis brought enormous value to Umbrella. He took on more and more backend responsibility, with excellent results. Any team that hires him will gain a great professional.",
  },
  {
    author: "Álex Gilabert",
    role: "Senior Product Manager · Bitpanda",
    relationship: "Product advisor · BitChill",
    highlight:
      "Antonio doesn’t just build. He thinks carefully about who the product is for, how to reach them, and what to prioritize. That combination of technical depth, product judgment, and ownership is rare.",
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
