import React from 'react';
import { Cpu, Activity, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Cpu,
    title: 'Multimodal Neural Reasoning',
    desc: 'Understands spikes, LFP, fMRI, EEG, and behavior. Cross-links neural dynamics with cognitive tasks using domain ontologies.',
  },
  {
    icon: Activity,
    title: 'Advanced Signal Analytics',
    desc: 'Spike sorting, time–frequency decomposition, connectivity, GLMs, and state-space models with interpretable outputs.',
  },
  {
    icon: Database,
    title: 'Knowledge-grounded Insights',
    desc: 'Grounds answers in literature (PubMed, OpenNeuro) and lab protocols, citing sources and uncertainties.',
  },
  {
    icon: Shield,
    title: 'Privacy & Compliance',
    desc: 'End-to-end encrypted workspace with HIPAA-ready data flows and granular governance controls.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Capabilities</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
            NeuroGPT combines statistical rigor with neural domain expertise to turn raw recordings into actionable insights.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300/30 to-indigo-400/30">
              <f.icon className="h-5 w-5 text-cyan-200" />
            </div>
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
