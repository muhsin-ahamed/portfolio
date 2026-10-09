import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { LinkedinIcon, GithubIcon, InstagramIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import {
  Send,
  Mail,
  Check,
  MessageSquare,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function ContactSection({ onShowToast }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

  const sendDiscordNotification = async (messageText) => {
    try {
      if (!DISCORD_WEBHOOK_URL) {
        console.warn("Discord Webhook URL is not set.");
        return;
      }
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: messageText,
        }),
      });

      if (response.ok) {
        console.log("Discord-ലേക്ക് സന്ദേശം വിജയകരമായി അയച്ചു!");
      }
    } catch (error) {
      console.error("Error sending to Discord:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onShowToast("Please fill in all required fields.", "error");
      return;
    }

    setIsSubmitting(true);

    const formattedMessage = `📩 **New Contact Form Submission**\n👤 **Name:** ${formState.name}\n📧 **Email:** ${formState.email}\n📞 **Phone:** ${formState.phone || 'N/A'}\n📌 **Subject:** ${formState.subject}\n💬 **Message:**\n${formState.message}`;

    await sendDiscordNotification(formattedMessage);

    setIsSubmitting(false);
    setSubmittedSuccess(true);
    onShowToast("Message sent successfully! Muhsin will respond shortly.");

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            Whether you are looking for a Flutter Developer &amp; Full-Stack Engineer or a client with a custom project, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 h-full">

            {/* Social Links & Contact Matrix */}
            <div className="paper-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-between">
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">
                Professional Network Profiles
              </h4>

              <div className="grid grid-cols-1 gap-3 grow justify-around">

                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-indigo-600">
                        Email Address
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {profileData.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-600">Mail →</span>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-indigo-600">
                        LinkedIn Profile
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        in/muhsin-ahamed-t
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-600">Connect →</span>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-indigo-600">
                        GitHub Profile
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        github.com/muhsin-ahamed
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-700">Explore →</span>
                </a>

                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-pink-300 hover:bg-pink-50/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-pink-600">
                        Instagram
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        @muhsin_ktkl
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-pink-600">Follow →</span>
                </a>

                <a
                  href={profileData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
                      <TwitterIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-indigo-600">
                        X (Twitter) Profile
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        @muhsinahamed_t
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-600">Follow →</span>
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Direct Interactive Contact Form */}
          <div className="lg:col-span-7 h-full">
            <div className="paper-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-between">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h3 className="text-xl font-extrabold text-slate-900">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below for interview opportunities or project estimations.
                </p>
              </div>

              {submittedSuccess ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 my-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto mb-6">
                    Thank you for reaching out. Muhsin Ahamed has received your notification and will reply to <strong>{formState.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedSuccess(false);
                      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-indigo-600 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-indigo-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-indigo-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Project Proposal / Inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-indigo-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Specify job scope, project parameters, or scheduling options..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-indigo-600 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message to Muhsin</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
