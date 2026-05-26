'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { useState } from 'react';
import DemoRequestModal from './DemoRequestModal';

const statusColors = {
  active: 'bg-cyan-500/20 text-cyan-400 border-cyan-400/20',
  development: 'bg-yellow-500/20 text-yellow-400 border-yellow-400/20',
  research: 'bg-purple-500/20 text-purple-400 border-purple-400/20',
  pending: 'bg-slate-500/20 text-slate-400 border-slate-400/20'
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemoRequest = (projectId: string) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="projects" className="scroll-mt-20 px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Portfolio</p>
          <h2 className="text-4xl font-semibold text-slate-100 md:text-5xl">Featured Projects</h2>
          <p className="max-w-2xl text-lg text-slate-400">
            A selection of cybersecurity, software development, and research projects showcasing hands-on expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <div className="group h-full rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-gradient-to-br hover:from-slate-950/95 hover:to-slate-900/80 hover:shadow-glow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                      {project.status && (
                        <span
                          className={`mt-2 inline-block rounded-full border px-3 py-1 text-xs font-medium capitalize ${
                            statusColors[project.status as keyof typeof statusColors]
                          }`}
                        >
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 line-clamp-3">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="inline-block text-xs text-slate-500">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-lg bg-cyan-500/10 px-3 py-2 text-center text-xs font-medium text-cyan-400 transition hover:bg-cyan-500/20"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-lg bg-slate-800/50 px-3 py-2 text-center text-xs font-medium text-slate-300 transition hover:bg-slate-800"
                      >
                        Repository
                      </a>
                    )}
                    <button
                      onClick={() => handleDemoRequest(project.id)}
                      className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-center text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      Request Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <DemoRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          projectTitle={projects.find((p) => p.id === selectedProject)?.title || ''}
        />
      )}
    </section>
  );
}
