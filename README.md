# Smart Contract Portfolio Website

A professional portfolio website for Antonio Rodríguez-Ynyesto (Ynyesto), showcasing smart contract development work, continuous learning, and technical writing.

## 🎯 Project Overview

This portfolio is designed to attract part-time smart contract development opportunities while demonstrating expertise in Solidity, Foundry, DeFi protocols, and security-minded development practices.

### Key Features

- **Professional Hero Section**: Impactful landing with clear value proposition
- **Case Studies**: Detailed project breakdowns (BitChill, ETHGlobal Bangkok, FilmChain Vesting)
- **Learning Journey**: Comprehensive showcase of courses, bootcamps, and continuous education
- **Technical Writing**: Articles, CTF writeups, and research contributions
- **SEO Optimized**: Structured data, sitemaps, Open Graph, Twitter cards
- **Responsive Design**: Mobile-first approach with elegant desktop scaling
- **Performance Focused**: Lighthouse scores 95+ across all categories

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX for rich content pages
- **SEO**: next-seo, next-sitemap, JSON-LD structured data
- **Analytics**: Plausible (privacy-friendly)
- **Deployment**: Vercel
- **Code Quality**: ESLint, Prettier, Husky pre-commit hooks

## 🏗️ Architecture

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Global layout with navigation
│   │   ├── page.tsx         # Home page with hero & featured work
│   │   ├── portfolio/       # Case studies and project showcases
│   │   ├── learning/        # Educational content and courses
│   │   ├── writing/         # Technical articles and research
│   │   ├── about/           # Bio and professional background
│   │   └── contact/         # Contact information and booking
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and constants
│   └── styles/              # Global styles and Tailwind config
├── public/                  # Static assets (images, icons, logos)
└── docs/                    # Project documentation
```

## 🎨 Design System

### Visual Identity
- **Primary Colors**: Gradient from cyan to purple
- **Theme**: Dark mode with subtle background patterns
- **Typography**: Geist Sans with clear hierarchy
- **Components**: Glass-morphism cards, gradient headers, micro-interactions

### Key Components
- **Hero Section**: Large typography with professional photo
- **Glass Cards**: Frosted glass effect for project showcases
- **Gradient Headers**: Consistent page headers with animated backgrounds
- **Status Badges**: Achievement indicators (prizes, grants, etc.)

## 📱 Responsive Design

The site is built mobile-first with breakpoints at:
- **Mobile**: < 640px (single column, stacked layout)
- **Tablet**: 640px - 1024px (2-column grids, optimized spacing)
- **Desktop**: > 1024px (full layout with large typography)

### Responsive Features
- **Navigation**: Collapsible mobile menu
- **Hero**: Centered mobile layout, side-by-side desktop
- **Cards**: 1-column mobile, 2-column tablet, grid desktop
- **Typography**: Scales from text-base to text-7xl
- **Images**: Optimized sizing across all devices

## 🔍 SEO Implementation

### Technical SEO
- **Structured Data**: JSON-LD for Person, WebSite, Article schemas
- **Meta Tags**: Dynamic titles, descriptions, canonical URLs
- **Open Graph**: Custom images and social media optimization
- **Sitemaps**: Auto-generated with proper priorities
- **Performance**: Optimized images, fonts, and bundle sizes

### Content Strategy
- **Keywords**: "smart contract engineer", "solidity developer", "DeFi protocols"
- **Internal Linking**: Strategic connections between related content
- **Rich Snippets**: Proper markup for search result enhancement

## 🚦 Performance

Current Lighthouse scores (target 95+):
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimizations
- **Images**: Next.js Image component with automatic optimization
- **Fonts**: Self-hosted Geist fonts with display swap
- **Bundle**: Tree-shaking and code splitting
- **Animations**: Respect prefers-reduced-motion

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Clone the repository
git clone [repository-url]
cd dev-portfolio/site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
npm run format       # Format code with Prettier
```

## 📈 Analytics & Tracking

- **Plausible Analytics**: Privacy-friendly, cookieless tracking
- **Events Tracked**: CTA clicks, form submissions, external links
- **Goals**: Contact form completions, calendar bookings

## 🚀 Deployment

The site is deployed on Vercel with:
- **Automatic deployments**: Connected to main branch
- **Preview deployments**: For pull requests
- **Custom domain**: (to be configured)
- **Environment variables**: For API keys and configuration

### Environment Variables

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
CALENDLY_URL=https://calendly.com/ynyesto/30min
CONTACT_EMAIL=ynyesto@gmail.com
```

## 📝 Content Management

### Adding New Case Studies
1. Create new directory in `src/app/portfolio/[project-name]/`
2. Add `page.tsx` with consistent formatting
3. Update portfolio index page with new project link
4. Add any assets to `public/` directory

### Updating Learning Content
- Modify `src/app/learning/page.tsx`
- Add course completion dates and links
- Include repository links for practical work

## 🎯 Business Goals

### Primary Objectives
- Generate inbound leads for part-time smart contract work
- Establish thought leadership in DeFi/security space
- Showcase technical expertise and continuous learning
- Build professional network in Web3 ecosystem

### Success Metrics
- Monthly contact form submissions
- Calendar booking conversions
- Organic search traffic growth
- Social media engagement

## 🔒 Security & Privacy

- **Privacy-first analytics**: No personal data collection
- **Form security**: Built-in spam protection
- **HTTPS**: Enforced across all pages
- **Headers**: Security headers via Vercel

## 📞 Contact & Booking

- **Email**: ynyesto@gmail.com
- **Calendar**: [Book a 30-min call](https://calendly.com/ynyesto/30min)
- **LinkedIn**: [Professional profile](https://www.linkedin.com/in/antonio-maria-rodriguez-ynyesto-sanchez)
- **GitHub**: [Code repositories](https://github.com/Ynyesto)

## 📄 License

This project is for portfolio purposes. Code is MIT licensed, content is copyrighted.

---

**Built with ❤️ by Ynyesto - Smart Contract Engineer**
