'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface TocItem {
  id: string;
  label: string;
}

interface PageSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedLink {
  href: string;
  title: string;
  description: string;
  accent?: 'cyan' | 'amber' | 'purple';
}

interface SeoContentPageProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  intro: ReactNode;
  toc: TocItem[];
  sections: PageSection[];
  faqs: FAQItem[];
  relatedLinks: RelatedLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const accentClasses = {
  cyan: {
    title: 'text-optics-cyan',
    card: 'hover:border-optics-cyan/50',
  },
  amber: {
    title: 'text-optics-amber',
    card: 'hover:border-optics-amber/50',
  },
  purple: {
    title: 'text-optics-purple',
    card: 'hover:border-optics-purple/50',
  },
} as const;

export default function SeoContentPage({
  breadcrumbs,
  title,
  intro,
  toc,
  sections,
  faqs,
  relatedLinks,
  ctaLabel = 'Jump to Tool ↓',
  ctaHref,
}: SeoContentPageProps) {
  const primaryHref = ctaHref ?? `#${toc[0]?.id ?? 'overview'}`;

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60 flex-wrap">
            {breadcrumbs.map((item, index) => (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="hover:text-optics-cyan transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-optics-cyan">{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 ? <span>/</span> : null}
              </li>
            ))}
          </ol>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            {title}
          </h1>
          <div className="text-xl text-optics-blue/80 leading-relaxed">
            {intro}
          </div>
          <a
            href={primaryHref}
            className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all"
          >
            {ctaLabel}
          </a>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-blue/30"
        >
          <h2 className="text-xl font-semibold text-optics-cyan mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-optics-blue/80">
            {toc.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-optics-cyan transition-colors">
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </motion.section>

        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id={section.id}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-glow mb-6">
              {index + 1}. {section.title}
            </h2>
            {section.body}
          </motion.section>
        ))}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="faq"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            {sections.length + 1}. FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">{item.question}</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Related Tools & Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-glass-strong rounded-xl p-4 border border-optics-blue/30 transition-all h-full ${
                    accentClasses[item.accent ?? 'cyan'].card
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${accentClasses[item.accent ?? 'cyan'].title}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-optics-blue/70 text-sm">{item.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
