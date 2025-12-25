'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/focal-length', label: 'Focal Length' },
    { href: '/refractive-index', label: 'Refractive Index' },
    { href: '/radius-r1', label: 'Radius R₁' },
    { href: '/radius-r2', label: 'Radius R₂' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-optics-darker/80 backdrop-blur-lg border-b border-optics-blue/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-display font-bold text-optics-cyan"
            >
              Lens Formula
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-optics-blue/20 text-optics-cyan border border-optics-blue/40'
                        : 'text-optics-blue/70 hover:text-optics-cyan hover:bg-optics-blue/10'
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <select
              value={pathname}
              onChange={(e) => {
                window.location.href = e.target.value;
              }}
              className="bg-optics-darker/70 border border-optics-blue/30 rounded-lg px-3 py-2 text-optics-cyan text-sm focus:outline-none focus:border-optics-blue"
            >
              {navItems.map((item) => (
                <option key={item.href} value={item.href}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

