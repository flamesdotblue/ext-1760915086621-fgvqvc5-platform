import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} NeuroGPT. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#capabilities" className="hover:text-white">Capabilities</a>
          <a href="#use-cases" className="hover:text-white">Use Cases</a>
          <a href="mailto:hello@neurogpt.ai" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
