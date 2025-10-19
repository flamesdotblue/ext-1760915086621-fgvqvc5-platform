import React from 'react';
import { FlaskConical, Brain, LineChart, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const useCases = [
  {
    icon: Microscope,
    title: 'Electrophysiology',
    detail: 'Automate spike sorting QC, PSTH analysis, tuning curves, and latent-state discovery across sessions.'
  },
  {
    icon: Brain,
    title: 'Systems & Cognitive',
    detail: 'Relate neural population codes to task variables with GLMs and decoding benchmarks.'
  },
  {
    icon: LineChart,
    title: 'Imaging & fMRI',
    detail: 'Preprocessing, GLM/FC analysis, and promptable ROI-based reports with references.'
  },
  {
    icon: FlaskConical,
    title: 'Experiment Design',
    detail: 'Generate hypotheses, counterfactuals, and power analyses tailored to your paradigm.'
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative mx-auto w-full max-w-7xl px-6 pb-24 md:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Use Cases</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
            From exploratory analysis to publication-ready figures, NeuroGPT accelerates the full neuroscience workflow.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {useCases.map((uc, idx) => (
          <motion.div
            key={uc.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
              <uc.icon className="h-5 w-5 text-cyan-200" />
            </div>
            <h3 className="text-base font-semibold">{uc.title}</h3>
            <p className="mt-2 text-sm text-white/70">{uc.detail}</p>
            <div className="pointer-events-none absolute right-2 top-2 h-20 w-20 rounded-full bg-indigo-400/10 blur-2xl" />
          </motion.div>
        ))}
      </div>

      <div id="contact" className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center md:flex-row md:gap-6 md:p-8">
        <div className="text-left md:text-center">
          <h4 className="text-lg font-semibold">Ready to bring NeuroGPT to your lab?</h4>
          <p className="mt-1 text-sm text-white/70">Request early access for your research group or healthcare team.</p>
        </div>
        <a
          href="mailto:hello@neurogpt.ai"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 font-medium text-black transition hover:bg-cyan-300"
        >
          Request access
        </a>
      </div>
    </section>
  );
}
