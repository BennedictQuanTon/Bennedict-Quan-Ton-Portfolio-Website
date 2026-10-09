import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, ChevronDown, Maximize2, GraduationCap, Award, BookOpen } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { CertificateFrame } from '../components/ui/CertificateFrame';
import { Lightbox, type LightboxItem } from '../components/ui/Lightbox';
import {
  honour,
  specialization,
  certifications,
  courseProviders,
  type Credential,
} from '../data/credentials';

const totalCourses = courseProviders.reduce((n, p) => n + p.courses.length, 0);

/** Section title in the same style as the Journey page: icon, heading, short caption */
const SectionHeading: React.FC<{ icon: React.ReactNode; title: string; caption: string }> = ({ icon, title, caption }) => (
  <ScrollReveal className="mb-10 md:mb-12">
    <div className="flex items-center gap-3">
      <span className="text-accent">{icon}</span>
      <h2 className="text-2xl md:text-4xl font-bold font-display text-text-heading">{title}</h2>
    </div>
    <p className="text-sm md:text-base text-text-muted mt-3 max-w-2xl leading-relaxed">{caption}</p>
  </ScrollReveal>
);

/** Caption under a framed certificate: issuer, date, title and verification link */
const Plaque: React.FC<{ credential: Credential }> = ({ credential }) => (
  <div className="pt-5 px-1 space-y-1.5">
    <div className="flex items-center justify-between gap-3 text-xs md:text-sm">
      <span className="font-semibold text-text-body truncate">{credential.issuer}</span>
      <span className="text-text-muted shrink-0">{credential.date}</span>
    </div>
    <h3 className="text-base md:text-lg font-bold text-text-heading leading-snug">{credential.title}</h3>
    {credential.verifyUrl && (
      <a
        href={credential.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 pt-1 text-xs md:text-sm font-semibold text-accent hover:text-accent-bright transition-colors"
      >
        Verify credential <ExternalLink size={12} />
      </a>
    )}
  </div>
);

const toLightbox = (c: Credential): LightboxItem => ({
  src: c.image,
  title: c.title,
  subtitle: `${c.issuer} · ${c.date}`,
  href: c.verifyUrl,
});

export const Education: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);
  const [showSpecCourses, setShowSpecCourses] = useState(false);
  const [openProvider, setOpenProvider] = useState<string | null>(null);

  const stats = [
    { value: 1, label: 'Academic Honour' },
    { value: certifications.length + 1, label: 'Certifications' },
    { value: totalCourses, label: 'Short Courses' },
  ];

  return (
    <div className="w-full min-h-screen bg-bg text-text-body flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl xl:max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-6 pb-16 md:py-24 2xl:py-32 flex flex-col">

        {/* Page title, matching the Projects and Journey pages */}
        <ScrollReveal className="text-center mb-14 md:mb-20 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-display text-text-heading">
            Honours &amp; Certifications
          </h1>
          <p className="text-sm md:text-base text-text-muted mt-4 max-w-lg mx-auto leading-relaxed">
            A record of academic recognition, professional certifications, and the competitions behind my work.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {stats.map((s) => (
              <span key={s.label} className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-extrabold text-text-heading">{s.value}</span>
                <span className="text-xs md:text-sm font-medium text-text-muted">{s.label}</span>
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/Long_Quan_Ton_CV.pdf"
              download="Long_Quan_Ton_CV.pdf"
              className="px-6 py-2.5 rounded-full border border-accent/30 hover:border-accent hover:bg-accent/5 text-text-heading text-sm flex items-center gap-2.5 font-semibold transition-all duration-300"
            >
              Download CV <Download size={16} className="text-accent" />
            </a>
          </div>
        </ScrollReveal>

        {/* Academic Honour */}
        <section className="relative mb-24 md:mb-32">
          <SectionHeading icon={<GraduationCap size={28} />} title="Academic Honour" caption="Recognition from the University of Technology Sydney." />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <CertificateFrame src={honour.image} alt={honour.title} onOpen={() => setLightboxItem(toLightbox(honour))} />
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-5 space-y-5">
              <p className="text-sm md:text-base font-semibold text-text-body">{honour.issuer}</p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-heading leading-[1.05] tracking-tight">
                Dean&rsquo;s List <span className="italic font-normal text-accent">2026</span>
              </h3>
              <div className="flex items-center gap-1.5">
                <div className="w-12 h-[2.5px] bg-accent rounded-full" />
                <div className="w-5 h-[2.5px] bg-border-token/40 rounded-full" />
                <div className="w-3 h-[2.5px] bg-border-token/40 rounded-full" />
              </div>
              <p className="text-base md:text-lg text-text-body leading-relaxed">{honour.citation}</p>
              <button
                type="button"
                onClick={() => setLightboxItem(toLightbox(honour))}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-bright transition-colors"
              >
                View certificate <Maximize2 size={14} />
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* Professional Certifications */}
        <section className="mb-24 md:mb-32">
          <SectionHeading
            icon={<Award size={28} />}
            title="Professional Certifications"
            caption="Verified programmes in machine learning, generative AI, and cloud."
          />

          {/* Featured: Machine Learning Specialization */}
          <ScrollReveal className="mb-16 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <CertificateFrame
                  src={specialization.image}
                  alt={specialization.title}
                  onOpen={() => setLightboxItem(toLightbox(specialization))}
                />
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block text-xs font-semibold text-accent bg-accent-dim border border-accent/20 px-3 py-1 rounded-full">
                  Professional Certificate
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-text-heading leading-tight">{specialization.title}</h3>
                <p className="text-sm md:text-base font-medium text-text-muted">
                  {specialization.issuer} · {specialization.date}
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowSpecCourses((v) => !v)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-text-heading hover:text-accent transition-colors"
                    aria-expanded={showSpecCourses}
                  >
                    {specialization.courses.length} courses included
                    <ChevronDown size={16} className={`transition-transform duration-300 ${showSpecCourses ? 'rotate-180' : ''}`} />
                  </button>
                  <a
                    href={specialization.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-bright transition-colors"
                  >
                    Verify credential <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {showSpecCourses && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    {specialization.courses.map((course, i) => (
                      <div key={course.id}>
                        <span className="block text-xs md:text-sm font-semibold text-text-muted mb-3">Course {i + 1}</span>
                        <CertificateFrame src={course.image} alt={course.title} onOpen={() => setLightboxItem(toLightbox(course))} />
                        <Plaque credential={course} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>

          {/* Remaining certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {certifications.map((cert, idx) => (
              <ScrollReveal key={cert.id} direction="up" delay={(idx % 3) * 0.06}>
                <CertificateFrame src={cert.image} alt={cert.title} aspect="aspect-[4/3]" onOpen={() => setLightboxItem(toLightbox(cert))} />
                <Plaque credential={cert} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Short Courses */}
        <section>
          <SectionHeading
            icon={<BookOpen size={28} />}
            title="Short Courses"
            caption="Focused courses on agents, RAG, and tool use, grouped by provider."
          />

          <div className="border-t border-border-token">
            {courseProviders.map((group) => {
              const isOpen = openProvider === group.provider;
              return (
                <div key={group.provider} className="border-b border-border-token">
                  <button
                    type="button"
                    onClick={() => setOpenProvider(isOpen ? null : group.provider)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group/provider"
                    aria-expanded={isOpen}
                  >
                    <span className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="font-display font-bold text-xl md:text-3xl text-text-heading group-hover/provider:text-accent transition-colors">
                        {group.provider}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-text-muted">
                        {group.courses.length} {group.courses.length === 1 ? 'course' : 'courses'}
                      </span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ol
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        {group.courses.map((course, i) => (
                          <li key={course.id} className="flex items-center gap-4 md:gap-6 pb-6 last:pb-8">
                            <span className="text-lg font-bold text-accent w-6 shrink-0">{i + 1}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-base md:text-lg font-semibold text-text-heading leading-snug">{course.title}</p>
                              <p className="text-xs md:text-sm text-text-muted mt-1">
                                {course.partner ? `With ${course.partner} · ` : ''}{course.date}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setLightboxItem(toLightbox(course))}
                              className="w-20 md:w-28 shrink-0"
                              aria-label={`View ${course.title} certificate`}
                            >
                              <span className="cert-frame is-interactive !p-1.5 block">
                                <img src={course.image} alt="" loading="lazy" className="aspect-[4/3] object-cover object-top" />
                              </span>
                            </button>
                          </li>
                        ))}
                      </motion.ol>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
};

export default Education;
