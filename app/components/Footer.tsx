import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="border-t mt-16 border-slate-400 max-w-5xl mx-auto py-8 flex items-center justify-center text-center flex-col">
        <h3 className="text-slate-600 dark:text-slate-100 font-bold">
          Share on Social Media
        </h3>
        <ul className="text-sm text-slate-600 dark:text-slate-100 mt-4 flex items-center justify-center flex-wrap gap-4">
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <Link href={``}>Instagram</Link>
          <Link href={``}>Twitter</Link>
          <Link href={``}>Pinterest</Link>
          <Link href={``}>Google Meet+</Link>
        </ul>
      </footer>
    </>
  );
}
