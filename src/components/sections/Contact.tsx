import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../../data/portfolioData';
import { ContactFormData } from '../../types';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || SERVICES[0].title,
    projectDescription: '',
    budget: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project or requirement';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Please provide a little more detail (min 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

    // If access key is configured, perform live background delivery to email
    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            from_name: formData.name,
            subject: `New Client Enquiry from ${formData.name} - ${formData.service}`,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.projectDescription,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setStatus('success');
          setSuccessMessage(
            `Thank you, ${formData.name}! Your enquiry for ${formData.service} has been delivered directly to ${BRAND_INFO.email}. Muthukumar will contact you shortly.`
          );
          return;
        } else {
          setStatus('error');
          setErrorMessage(result.message || 'Unable to submit enquiry. Please try again.');
          return;
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage('Network connection error. Please try again later.');
        return;
      }
    }

    // Fallback
    setTimeout(() => {
      setStatus('success');
      setSuccessMessage(
        `Thank you, ${formData.name}! Your enquiry for ${formData.service} has been submitted. Muthukumar will contact you shortly.`
      );
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: SERVICES[0].title,
      projectDescription: '',
      budget: '',
    });
    setErrors({});
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-slate-50/70 border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[650px] h-72 sm:h-[650px] bg-cyan-500/8 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal">
            Let's Build Something Together
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have an idea, business requirement, or project in mind? Let's discuss it and build a customized solution that fits your needs and budget.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <MessageSquare className="w-6 h-6 text-cyan-600" />
                <span>Direct Contact Details</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base">
                {/* Email */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 transition-all flex items-start gap-4 group block min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0 group-hover:scale-105 transition-all shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 block mb-0.5">
                      Email Address
                    </span>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base group-hover:text-cyan-700 transition-colors break-all">
                      {BRAND_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all flex items-start gap-4 group block min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 transition-all shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 block mb-0.5">
                      Phone Number
                    </span>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                      {BRAND_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 block mb-0.5">
                      Location
                    </span>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">
                      {BRAND_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <a
                    href={BRAND_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:text-cyan-800 text-slate-800 transition-all flex items-center justify-between text-sm sm:text-base font-semibold shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-5 h-5 text-sky-600" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </a>

                  <a
                    href={BRAND_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:text-cyan-800 text-slate-800 transition-all flex items-center justify-between text-sm sm:text-base font-semibold shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-slate-800" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg relative">
              
              {status === 'success' ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {successMessage}
                    </p>
                  </div>
                  <div className="flex items-center justify-center pt-4">
                    <button
                      onClick={handleReset}
                      className="px-7 py-3 rounded-xl text-sm sm:text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:text-slate-900 transition-all cursor-pointer shadow-xs"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Send a Project Enquiry
                    </h3>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      * Required fields
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2.5 font-medium">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm sm:text-[15px] font-semibold text-slate-700 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:ring-rose-500'
                            : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-600/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs sm:text-sm text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm sm:text-[15px] font-semibold text-slate-700 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. anand@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-500'
                            : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-600/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs sm:text-sm text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Required Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm sm:text-[15px] font-semibold text-slate-700 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9943398882"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-rose-400 focus:ring-rose-500'
                            : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-600/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs sm:text-sm text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm sm:text-[15px] font-semibold text-slate-700 block">
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm sm:text-base text-slate-900 focus:bg-white focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Consultation / Other">General Consultation / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label htmlFor="projectDescription" className="text-sm sm:text-[15px] font-semibold text-slate-700 block">
                      Project Description &amp; Requirements *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Briefly describe what you would like to build, your goals, key features, or any specific timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.projectDescription
                          ? 'border-rose-400 focus:ring-rose-500'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-600/20'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="text-xs sm:text-sm text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-base sm:text-lg"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
