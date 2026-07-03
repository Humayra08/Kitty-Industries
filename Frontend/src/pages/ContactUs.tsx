import { useState, type FormEvent, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

// ─── Config ──────────────────────────────────────────────────────────────────

const EJS_SERVICE = import.meta.env.VITE_EJS_SERVICE as string;
const EJS_CONTACT = import.meta.env.VITE_EJS_CONTACT as string;
const EJS_AUTOREPLY = import.meta.env.VITE_EJS_AUTOREPLY as string;
const EJS_KEY = import.meta.env.VITE_EJS_KEY as string;

// ─── Static data ─────────────────────────────────────────────────────────────

const contactInfo = [
  {
    Icon: Phone,
    label: "Phone",
    lines: ["+880 2 5504 0812-14", "+880 1700 000 000"],
  },
  {
    Icon: Mail,
    label: "Email",
    lines: ["info@kittygroup.com.bd", "sales@kittygroup.com.bd"],
  },
  {
    Icon: MapPin,
    label: "Address",
    lines: [
      "Head Office: Rosemont Tower (6th floor),",
      "House # 148, Road # 13, Block # E,",
      "Banani, Dhaka-1213",
      "Factory: Taiyubpur, Ashulia, Savar, Dhaka",
    ],
  },
  {
    Icon: Clock,
    label: "Business Hours",
    lines: ["Saturday – Thursday", "9:00 AM – 6:00 PM"],
  },
  {
    Icon: Globe,
    label: "Website",
    lines: ["www.kittygroup.com.bd"],
  },
];

const subjectOptions = [
  "Product Enquiry",
  "Distributorship",
  "Partnership Proposal",
  "Technical Support",
  "Media & Press",
  "Other",
];

// ─── Types ───────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
type Status = "idle" | "sending" | "success" | "error";

const INIT: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// ─── Spinner ─────────────────────────────────────────────────────────────────

const Spinner = () => (
  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
    <path d="M 12 2 A 10 10 0 0 1 22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const inputCls =
  "w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-5">
    <p className="text-red-600 font-bold text-xs tracking-[0.18em] uppercase">{children}</p>
    <div className="h-0.5 w-8 bg-red-600 mt-1.5" />
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export const ContactUs = () => {
  const [form, setForm] = useState<FormState>(INIT);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErr] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject || !form.message.trim()) {
      setErr("Please fill in all required fields before submitting.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErr("");
    const params = {
      name: form.name,
      from_name: form.name,
      email: form.email,
      from_email: form.email,
      phone: form.phone || "Not provided",
      subject: form.subject,
      message: form.message,
    };
    try {
      await emailjs.send(EJS_SERVICE, EJS_CONTACT, params, { publicKey: EJS_KEY });
      await emailjs.send(EJS_SERVICE, EJS_AUTOREPLY, params, { publicKey: EJS_KEY });
      setStatus("success");
      setForm(INIT);
    } catch {
      setStatus("error");
      setErr("Something went wrong. Please try again or email us directly at info@kittygroup.com.bd.");
    }
  };

  const busy = status === "sending";

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[#fafafa] pt-4 pb-14">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10 md:py-14">
            <div>
              <SectionLabel>Contact Us</SectionLabel>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-none mb-4">
                Let's Build<br />
                <span className="text-red-600">Stronger Connections</span>
              </h1>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-md">
                We're here to help! Whether you have a question about our products, partnerships,
                or any other inquiry — our team is ready to assist you.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/contact.png"
                alt="Contact Kitty Industries"
                className="w-full max-w-[240px] h-auto object-contain sm:max-w-[300px] lg:max-w-[440px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Contact Info Card ──────────────────────────────────── */}
      <section className="pb-4 bg-[#fafafa] relative z-10 -mt-14">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="rounded-2xl border border-gray-100 shadow-md overflow-hidden bg-white">
            {/* 3-col grid: form | divider | contact info */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1px_2fr]">

              {/* Left — Form */}
              <div className="p-8 md:p-10">
                <SectionLabel>Send Us a Message</SectionLabel>

                {status === "success" ? (
                  <div className="flex flex-col items-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-green-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                      Thank you for reaching out. We'll reply within one business day.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input id="name" name="name" type="text" placeholder="Your full name"
                        required value={form.name} onChange={handleChange} disabled={busy}
                        className={inputCls} />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input id="email" name="email" type="email" placeholder="Your email address"
                        required value={form.email} onChange={handleChange} disabled={busy}
                        className={inputCls} />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input id="phone" name="phone" type="tel" placeholder="Your phone number"
                        value={form.phone} onChange={handleChange} disabled={busy}
                        className={inputCls} />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Subject <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <select id="subject" name="subject" value={form.subject}
                          onChange={handleChange} disabled={busy}
                          className={`${inputCls} appearance-none pr-10 cursor-pointer`}>
                          <option value="" disabled>How can we help you?</option>
                          {subjectOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea id="message" name="message" value={form.message}
                        onChange={handleChange} placeholder="Write your message here..."
                        rows={4} disabled={busy}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200 resize-none leading-relaxed" />
                    </div>

                    {status === "error" && (
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-100">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700 leading-relaxed">{errorMsg}</p>
                      </div>
                    )}

                    <button type="submit" disabled={busy}
                      className="inline-flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold text-sm rounded-lg transition-all duration-200 hover:shadow-md disabled:cursor-not-allowed cursor-pointer">
                      {busy ? <><Spinner /> Sending…</> : <>Send Message <ArrowRight className="w-4 h-4" /></>}
                    </button>
                  </form>
                )}
              </div>

              {/* Partial vertical divider */}
              <div className="hidden lg:flex items-stretch">
                <div className="w-px bg-gray-200 my-10 flex-1" />
              </div>
              {/* Mobile horizontal divider */}
              <div className="block lg:hidden h-px bg-gray-200 mx-8" />

              {/* Right — Contact Info */}
              <div className="p-8 md:p-10">
                <SectionLabel>Get in Touch</SectionLabel>
                <div className="flex flex-col">
                  {contactInfo.map(({ Icon, label, lines }, i) => (
                    <div key={label}>
                      <div className="flex items-start gap-4 py-4">
                        <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-red-600" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                          {lines.map((line, j) => (
                            <p key={j} className="text-gray-800 text-sm leading-snug">{line}</p>
                          ))}
                        </div>
                      </div>
                      {i < contactInfo.length - 1 && <hr className="border-gray-100" />}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ───────────────────────────────────────────────── */}
      <section className="py-4 bg-[#fafafa]">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-md h-56 md:h-64">
            {/* Map fills full container, pointed at head office (Banani) */}
            <iframe
              title="Kitty Industries Head Office"
              src="https://maps.google.com/maps?q=House+148,+Road+13,+Block+E,+Banani,+Dhaka+1213,+Bangladesh&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            {/* Hidden overlay to cover Google's "Open in Maps" button at top-left —
                smaller on mobile since the narrower map makes the full-size patch
                cover a disproportionate, oddly-placed chunk of it */}
            <div className="absolute top-0 left-0 w-32 h-9 md:w-52 md:h-12 bg-white z-20 pointer-events-none rounded-br-lg" />
            {/* Visit card — flush with all 3 edges: top, bottom, left. Hidden below md
                since its fixed width would otherwise eat most of the map on mobile. */}
            <div className="hidden md:flex absolute inset-y-0 left-0 w-56 bg-white rounded-r-xl shadow-md z-10 flex-col justify-center p-5">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-red-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Visit Our Office</h3>
              </div>
              <div className="h-0.5 w-7 bg-red-600 mb-3 ml-[42px]" />
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                We welcome you to visit our office and experience our commitment to quality and innovation.
              </p>
              <a
                href="https://maps.google.com/?q=House+148,+Road+13,+Block+E,+Banani,+Dhaka+1213,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold text-xs rounded-lg transition-all duration-200 cursor-pointer w-fit"
              >
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Visit card — mobile only, sits below the now fully-visible map */}
          <div className="md:hidden mt-4 flex items-start gap-3 rounded-2xl bg-white shadow-md p-5">
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-red-600" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Visit Our Office</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                We welcome you to visit our office and experience our commitment to quality and innovation.
              </p>
              <a
                href="https://maps.google.com/?q=House+148,+Road+13,+Block+E,+Banani,+Dhaka+1213,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold text-xs rounded-lg transition-all duration-200 cursor-pointer w-fit"
              >
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partnership Banner ────────────────────────────────────────── */}
      <section className="pt-4 pb-8 bg-[#fafafa]">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="rounded-2xl bg-[#C0392B] px-6 md:px-8 py-5 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 items-center">
            <div className="min-w-[160px]">
              <p className="text-white/70 font-bold text-[10px] tracking-[0.18em] uppercase mb-1">Partnerships & Dealerships</p>
              <div className="h-0.5 w-5 bg-white/50 mb-2" />
              <h3 className="text-white font-black text-xl md:text-2xl leading-tight">
                Let's Grow<br />Together
              </h3>
            </div>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-md">
              We are always open to new partnerships and dealership opportunities across Bangladesh.
              Join hands with KITTY and be a part of our journey towards a brighter future.
            </p>
            <div className="flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-red-700 hover:bg-red-50 font-bold text-sm rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
