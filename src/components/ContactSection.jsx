import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { BUSINESS, SERVICES } from '@/data/site';

const ContactSection = ({ showHeader = true }) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      toast({ title: 'Please accept the terms', description: 'Kindly agree to the terms to continue.', duration: 4000 });
      return;
    }
    setSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    // Record the consent the visitor gave, alongside the lead, so it is captured
    // in the same message we receive (the checkbox itself is not a native form field).
    data.append('consent', 'Yes');
    data.append(
      'consent_statement',
      'I agree to be contacted about my request and accept the Privacy Policy and Terms of Service. I understand I can opt out at any time.'
    );
    data.append('consent_timestamp', new Date().toISOString());
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${BUSINESS.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        toast({ title: 'Message sent!', description: "Thank you — we'll be in touch within one business day.", duration: 6000 });
        form.reset();
        setAgreed(false);
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: `Please call us at ${BUSINESS.phoneDisplay} and we'll help right away.`,
        duration: 6000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-leaf-soft" />
      <div className="container-tight relative z-10">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">Get in Touch</span>
            <h2 className="section-title mt-3">Request Your Free Estimate</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-4">
              Ready to start your project, or just have questions? Reach out today — estimates are always free and no-obligation.
            </p>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-brand-green-dark p-8 md:p-10 rounded-3xl shadow-xl"
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="New estimate request — Oliveira Landscaping website" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
                  <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-brand-green-lime outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">Phone Number</label>
                  <input type="tel" name="phone" id="phone" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-brand-green-lime outline-none transition" placeholder="(123) 456-7890" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-brand-green-lime outline-none transition" placeholder="you@example.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-2">Service of Interest</label>
                  <select id="service" name="service" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-brand-green-lime outline-none transition">
                    <option>General Inquiry</option>
                    {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                    <option>Retaining Walls &amp; Stonework</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="town" className="block text-sm font-medium text-gray-200 mb-2">Your Town</label>
                  <input type="text" name="town" id="town" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-brand-green-lime outline-none transition" placeholder="e.g. Hingham" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Project Details</label>
                <textarea name="message" id="message" rows="5" required className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-brand-green-lime outline-none transition" placeholder="Tell us about your project..." />
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} className="mt-0.5 border-white data-[state=checked]:bg-brand-green-lime data-[state=checked]:text-brand-green-dark" />
                  <label htmlFor="terms" className="text-sm text-gray-200 leading-snug">
                    I agree to be contacted about my request and accept the{' '}
                    <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="underline text-brand-green-lime hover:text-white">Privacy Policy</Link>
                    {' '}and{' '}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer" className="underline text-brand-green-lime hover:text-white">Terms of Service</Link>. I understand I can opt out at any time.
                  </label>
                </div>
              </div>

              <Button type="submit" disabled={submitting} className="w-full btn-custom-green text-lg">
                {submitting ? (<><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>) : 'Request a Free Quote'}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <a href={BUSINESS.phoneHref} className="bg-white p-7 rounded-3xl shadow-md flex items-start gap-5 card-hover block">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-brand-green-dark mb-1">Call or Text</h4>
                <span className="text-lg text-gray-600">{BUSINESS.phoneDisplay}</span>
              </div>
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="bg-white p-7 rounded-3xl shadow-md flex items-start gap-5 card-hover block">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-brand-green-dark mb-1">Email Us</h4>
                <span className="text-lg text-gray-600 break-all">{BUSINESS.email}</span>
              </div>
            </a>
            <div className="bg-white p-7 rounded-3xl shadow-md flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-brand-green-dark mb-1">Service Area</h4>
                <p className="text-lg text-gray-600">{BUSINESS.address.full}</p>
                <p className="text-sm text-gray-500 mt-1">Serving all of Boston&apos;s South Shore</p>
              </div>
            </div>
            <div className="bg-white p-7 rounded-3xl shadow-md flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-brand-green-dark mb-1">Hours</h4>
                <p className="text-lg text-gray-600">{BUSINESS.hours}</p>
                <p className="text-sm text-gray-500 mt-1">Sunday: By appointment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
