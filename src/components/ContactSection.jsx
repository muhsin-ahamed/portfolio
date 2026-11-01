import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { LinkedinIcon, GithubIcon, InstagramIcon, XIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection({ onShowToast }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    onShowToast(`Copied ${profileData.email} to clipboard!`);
  };

  const sendDiscordNotification = async (messageText) => {
    try {
      if (!DISCORD_WEBHOOK_URL) return;
      await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: messageText }),
      });
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
    const formattedMessage = `📩 **New Contact Form Submission**\n👤 **Name:** ${formState.name}\n📧 **Email:** ${formState.email}\n📞 **Phone:** ${formState.phone || 'N/A'}\n📌 **Subject:** ${formState.subject || 'General Inquiry'}\n💬 **Message:**\n${formState.message}`;

    await sendDiscordNotification(formattedMessage);

    setIsSubmitting(false);
    onShowToast("Message sent successfully! Muhsin will respond shortly.");
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

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

  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'in/muhsin-ahamed-t',
      url: profileData.socials.linkedin,
      icon: <LinkedinIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
    },
    {
      name: 'GitHub',
      handle: 'muhsin-ahamed',
      url: profileData.socials.github,
      icon: <GithubIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
    },
    {
      name: 'Instagram',
      handle: '@muhsin_ktld',
      url: profileData.socials.instagram,
      icon: <InstagramIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
    },
    {
      name: 'X',
      handle: '@muhsinahamed_t',
      url: profileData.socials.twitter,
      icon: <XIcon className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-24 border-t border-slate-200/60 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-2">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1325] dark:text-white tracking-tight">
            Let's work together.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-xl leading-relaxed">
            Hiring a Flutter &amp; full-stack developer, or have a project in mind? Send a message and I'll get back to you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Email & Elsewhere List */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Email Block */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {profileData.email}
              </p>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer mt-1 inline-block"
              >
                Copy address
              </button>
            </div>

            {/* Elsewhere Block */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                Elsewhere
              </h3>
              <div className="space-y-3 max-w-sm">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 hover:text-slate-950 dark:hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono sm:font-sans group-hover:text-slate-600 dark:group-hover:text-slate-300">
                      {item.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs dark:shadow-none">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden focus:border-slate-400 dark:focus:border-slate-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden focus:border-slate-400 dark:focus:border-slate-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden focus:border-slate-400 dark:focus:border-slate-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden focus:border-slate-400 dark:focus:border-slate-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or role..."
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden focus:border-slate-400 dark:focus:border-slate-500 transition-colors resize-y min-h-[120px]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 px-4 rounded-xl text-sm font-medium text-white bg-[#0B1325] hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
