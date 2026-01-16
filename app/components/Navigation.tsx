'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    label: 'Calculators',
    children: [
      { href: '/focal-length', label: 'Focal Length' },
      { href: '/refractive-index', label: 'Refractive Index' },
      { href: '/radius-r1', label: 'Radius R₁' },
      { href: '/radius-r2', label: 'Radius R₂' },
    ],
  },
  {
    label: 'Advanced',
    children: [
      { href: '/thick-lens', label: 'Thick Lens' },
      { href: '/lens-combination', label: 'Lens Combination' },
      { href: '/magnification', label: 'Magnification' },
    ],
  },
  {
    label: 'Learn',
    children: [
      { href: '/optics-lens-maker-formula', label: 'Optics Formula Guide' },
      { href: '/tutorial', label: 'Tutorial' },
      { href: '/examples', label: 'Examples' },
      { href: '/glossary', label: 'Glossary' },
      { href: '/materials', label: 'Materials' },
    ],
  },
];

// Flat list for mobile
const allNavItems = [
  { href: '/', label: 'Home' },
  { href: '/focal-length', label: 'Focal Length' },
  { href: '/refractive-index', label: 'Refractive Index' },
  { href: '/radius-r1', label: 'Radius R₁' },
  { href: '/radius-r2', label: 'Radius R₂' },
  { href: '/thick-lens', label: 'Thick Lens' },
  { href: '/lens-combination', label: 'Lens Combination' },
  { href: '/magnification', label: 'Magnification' },
  { href: '/optics-lens-maker-formula', label: 'Optics Formula Guide' },
  { href: '/tutorial', label: 'Tutorial' },
  { href: '/examples', label: 'Examples' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/materials', label: 'Materials' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isParentActive = (children?: { href: string }[]) => 
    children?.some(child => pathname === child.href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-optics-darker/80 backdrop-blur-lg border-b border-optics-blue/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-display font-bold text-optics-cyan"
            >
              Lens Formula
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 ${
                      isParentActive(item.children)
                        ? 'bg-optics-blue/20 text-optics-cyan border border-optics-blue/40'
                        : 'text-optics-blue/70 hover:text-optics-cyan hover:bg-optics-blue/10'
                    }`}
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 py-2 bg-optics-darker/95 backdrop-blur-lg 
                                 border border-optics-blue/30 rounded-lg shadow-xl min-w-[180px]"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 transition-colors ${
                              isActive(child.href)
                                ? 'text-optics-cyan bg-optics-blue/10'
                                : 'text-optics-blue/70 hover:text-optics-cyan hover:bg-optics-blue/10'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} href={item.href!}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.href!)
                        ? 'bg-optics-blue/20 text-optics-cyan border border-optics-blue/40'
                        : 'text-optics-blue/70 hover:text-optics-cyan hover:bg-optics-blue/10'
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-optics-cyan hover:bg-optics-blue/10 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-optics-blue/20"
            >
              <div className="py-4 space-y-1">
                {allNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-optics-blue/20 text-optics-cyan'
                        : 'text-optics-blue/70 hover:text-optics-cyan hover:bg-optics-blue/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
