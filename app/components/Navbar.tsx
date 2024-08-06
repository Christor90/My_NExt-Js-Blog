import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl px-4 py-5 mx-auto">
      <Link href="/" className="font-bold text-3xl">
        Chris<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
