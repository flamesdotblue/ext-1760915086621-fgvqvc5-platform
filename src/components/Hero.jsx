import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.75)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      <div className="relative z-10 mx-auto flex h-[100dvh] max-w-7xl flex-col items-start justify-between px-6 pt-6 md:px-8">
        <header className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
              <Brain className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">NeuroGPT</p>
              <p className="text-xs text-white/60">Neuroscience-native AI</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white transition" href="#capabilities">Capabilities</a>
            <a className="hover:text-white transition" href="#use-cases">Use Cases</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>
        </header>

        <div className="mb-20 max-w-2xl md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Research-grade reasoning for neural data and cognition
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            Meet NeuroGPT
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Your copilot for Neuroscience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="mt-5 max-w-xl text-base text-white/80 md:text-lg"
          >
            Analyze neural recordings, generate hypotheses, and design experiments with an AI that understands brains, from spikes to cognition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 font-medium text-black transition hover:bg-cyan-300"
            >
              <Rocket className="h-4 w-4" />
              Explore capabilities
            </a>
            <a
              href="#use-cases"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-medium text-white transition hover:bg-white/10"
            >
              See use cases
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
