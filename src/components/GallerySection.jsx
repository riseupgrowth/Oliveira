import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/data/gallery';

const GallerySection = () => {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section id="gallery" className="py-24 bg-brand-cream">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title mt-3">Recent Project Transformations</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            From bare ground to finished masterpiece — explore real South Shore projects, start to finish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link
                to="/gallery"
                className="group block relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5]"
              >
                <img
                  src={project.cover}
                  alt={`${project.title} — Oliveira Landscaping project on the South Shore`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block mb-2 text-xs font-bold uppercase tracking-widest text-brand-green-lime">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white leading-snug">{project.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-white/90 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button className="btn-custom-green text-lg">
              <ImageIcon className="w-5 h-5" /> View the Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
