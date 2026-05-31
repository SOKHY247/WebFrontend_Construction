import { useState } from "react";
import Footer from "../Components/Footer";

function ContactUS() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
          <div className="absolute inset-0">
            <img
              src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay05MC10ZWRkeS01MjRfMS5qcGc.jpg"
              alt="Construction site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-2xl">
              <span className="inline-block bg-green-500/20 text-green-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-green-500/30 mb-6">
                Trusted Since 2014
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                We Build What{" "}
                <span className="text-green-400">Lasts</span>{" "}
                for the Future
              </h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                With decades of experience, we specialise in turning ideas into well-designed structures that stand the test of time.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/30">
                  Start Your Project
                </a>
                <a href="#" className="border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* Contact Section */}
        <div className="m-2">
          <div className="flex flex-col m-6 lg:m-20 p-6 lg:p-10 border-2 border-slate-200 rounded-xl gap-8">

            {/* Top: Info + Form side by side */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">

              {/* Left — Contact Info */}
              <div className="flex flex-col justify-center gap-6 lg:w-2/5 p-4 lg:p-10">
                <div className="flex flex-col gap-3">
                  <span className="text-green-600 uppercase text-xs font-semibold bg-green-100 px-3 py-1 rounded-xl w-fit">
                    Our Contact
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Let's Work Together
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    Whether you have a question, need more details about our service,
                    or want to discuss a potential collaboration, we're here to help.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase">Address</p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">123 Build Street, Phnom Penh, Cambodia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase">Phone</p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">+855 12 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase">Email</p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">hello@build.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Contact Form */}
              <div className="flex flex-col justify-center lg:w-3/5 p-4 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Message Sent!</h3>
                    <p className="text-gray-500 dark:text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                      className="mt-2 px-6 py-2.5 bg-green-600 text-white text-sm font-medium rounded-xl hover:bg-green-700 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Send Us a Message</h3>

                    {/* Name + Email */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex flex-col gap-1 w-full sm:w-1/2">
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full sm:w-1/2">
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@email.com"
                          className="px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex flex-col gap-1 w-full sm:w-1/2">
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+855 12 345 678"
                          className="px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full sm:w-1/2">
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          placeholder="Project Inquiry"
                          className="px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project or question..."
                        className="px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-1 w-full py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom — Map full width */}
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-2 px-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Find Us Here</p>
                  <p className="text-xs text-gray-400">123 Build Street, Phnom Penh, Cambodia</p>
                </div>
              </div>
              <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <iframe
                  title="Build Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125072.37354722637!2d104.84546299999999!3d11.5563738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default ContactUS;