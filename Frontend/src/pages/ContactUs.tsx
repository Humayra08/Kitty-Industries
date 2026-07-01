import { useState, type FormEvent, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// ─── Config ──────────────────────────────────────────────────────────────────

const EJS_SERVICE = import.meta.env.VITE_EJS_SERVICE as string;
const EJS_CONTACT = import.meta.env.VITE_EJS_CONTACT as string;
const EJS_AUTOREPLY = import.meta.env.VITE_EJS_AUTOREPLY as string;
const EJS_KEY = import.meta.env.VITE_EJS_KEY as string;

// ─── Static data ─────────────────────────────────────────────────────────────

const contactInfo = [
  {
    Icon: MapPin,
    label: "Our Location",
    value: "Gazipur Industrial Area, Dhaka, Bangladesh",
  },
  { Icon: Mail, label: "Email Address", value: "info@kittyindustries.com" },
  { Icon: Phone, label: "Phone Number", value: "+880 1XXXXXXXXX" },
  {
    Icon: Clock,
    label: "Business Hours",
    value: "Sun – Thu: 9:00 AM – 6:00 PM",
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

// ─── Field sub-component (defined outside page to avoid re-mount on render) ──

type FieldProps = {
  label: string;
  id: keyof FormState;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const Field = ({
  label,
  id,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  disabled,
}: FieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-[13px] font-semibold text-gray-700 mb-1.5"
    >
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200"
    />
  </div>
);

// ─── Spinner ─────────────────────────────────────────────────────────────────

const Spinner = () => (
  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeOpacity="0.25"
    />
    <path
      d="M 12 2 A 10 10 0 0 1 22 12"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// ─── Decorative SVG (hero right side) ────────────────────────────────────────

const ContactIllustration = () => (
  <svg
    viewBox="0 0 360 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto opacity-80"
  >
    <defs>
      <linearGradient id="ci-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FEF2F2" />
        <stop offset="100%" stopColor="#FFF1F1" />
      </linearGradient>
      <clipPath id="ci-clip">
        <rect width="360" height="280" rx="20" />
      </clipPath>
    </defs>
    <g clipPath="url(#ci-clip)">
      <rect width="360" height="280" fill="url(#ci-bg)" />

      {/* Large envelope shape */}
      <rect
        x="60"
        y="70"
        width="240"
        height="160"
        rx="12"
        fill="white"
        stroke="#FECACA"
        strokeWidth="2"
      />
      {/* Envelope flap */}
      <path
        d="M 60 70 L 180 155 L 300 70"
        stroke="#FECACA"
        strokeWidth="2"
        fill="none"
      />
      {/* Envelope bottom fold lines */}
      <path d="M 60 230 L 140 165" stroke="#FECACA" strokeWidth="1.5" />
      <path d="M 300 230 L 220 165" stroke="#FECACA" strokeWidth="1.5" />

      {/* Red seal dot */}
      <circle cx="180" cy="160" r="16" fill="#D32F2F" />
      <path
        d="M 174 160 L 178 164 L 186 156"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Floating notification dots */}
      <circle cx="295" cy="75" r="12" fill="#D32F2F" />
      <text
        x="295"
        y="80"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="bold"
      >
        1
      </text>

      {/* Decorative lines */}
      <line
        x1="20"
        y1="40"
        x2="80"
        y2="40"
        stroke="#FECACA"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="50"
        x2="55"
        y2="50"
        stroke="#FECACA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="280"
        y1="248"
        x2="340"
        y2="248"
        stroke="#FECACA"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="305"
        y1="258"
        x2="340"
        y2="258"
        stroke="#FECACA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Small ping circles */}
      <circle cx="52" cy="120" r="6" fill="#D32F2F" opacity="0.15" />
      <circle cx="52" cy="120" r="3" fill="#D32F2F" opacity="0.4" />
      <circle cx="310" cy="190" r="8" fill="#D32F2F" opacity="0.12" />
      <circle cx="310" cy="190" r="4" fill="#D32F2F" opacity="0.35" />

      {/* Corner tag */}
      <rect x="0" y="0" width="360" height="5" fill="#D32F2F" opacity="0.2" />
    </g>
  </svg>
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

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject ||
      !form.message.trim()
    ) {
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
      await emailjs.send(EJS_SERVICE, EJS_CONTACT, params, {
        publicKey: EJS_KEY,
      });
      await emailjs.send(EJS_SERVICE, EJS_AUTOREPLY, params, {
        publicKey: EJS_KEY,
      });
      setStatus("success");
      setForm(INIT);
    } catch {
      setStatus("error");
      setErr(
        "Something went wrong. Please try again or email us directly at info@kittyindustries.com.",
      );
    }
  };

  const busy = status === "sending";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 md:pt-20 bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #111 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Tinted right panel */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-red-50/60 rounded-bl-[80px] pointer-events-none" />

        <div className="relative container mx-auto px-6 md:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-14 md:py-20">
            {/* Left text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-8 h-0.5 bg-red-600" />
                <span className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase">
                  Contact Us
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black text-gray-900 leading-[1.07] tracking-tight mb-5">
                Let's Start a<br />
                <span className="text-red-600">Conversation</span>
              </h1>
              <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
                Have a question, partnership idea, or product enquiry? Our team
                is ready to help. Reach out and we'll respond within one
                business day.
              </p>
            </div>

            {/* Right illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-[360px]">
                <ContactIllustration />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
      </section>

      {/* ── Main section ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 md:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-stretch">
            {/* ── Contact info panel ── */}
            <div className="lg:col-span-2 flex flex-col bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-gray-900 mb-1.5">
                  How to Reach Us
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We value every enquiry and aim to respond promptly with care.
                </p>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {contactInfo.map(({ Icon, label, value }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-[#F8F9FA] rounded-2xl border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-5 h-5 text-red-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      <p className="text-gray-900 font-semibold text-[14px] leading-snug">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Form card ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10 h-full">
                {/* ── Success state ── */}
                {status === "success" ? (
                  <div className="flex flex-col items-center text-center py-14">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                      <CheckCircle
                        className="w-10 h-10 text-green-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm mb-8">
                      Thank you for reaching out. We've received your message
                      and will reply within one business day. Please check your
                      inbox for a confirmation email.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-[14px] rounded-xl transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-black text-gray-900 mb-1">
                      Send us a Message
                    </h2>
                    <p className="text-gray-400 text-[13px] mb-8">
                      Fields marked{" "}
                      <span className="text-red-600 font-bold">*</span> are
                      required.
                    </p>

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <Field
                        label="Full Name"
                        id="name"
                        placeholder="e.g. Ahmed Hossain"
                        required
                        value={form.name}
                        onChange={handleChange}
                        disabled={busy}
                      />
                      <Field
                        label="Email Address"
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                        disabled={busy}
                      />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <Field
                        label="Phone Number"
                        id="phone"
                        type="tel"
                        placeholder="+880 1XXXXXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={busy}
                      />
                      {/* Subject select */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-[13px] font-semibold text-gray-700 mb-1.5"
                        >
                          Subject <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            disabled={busy}
                            className="w-full h-11 pl-4 pr-10 rounded-xl border border-gray-200 bg-white text-gray-900 text-[14px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200 appearance-none cursor-pointer"
                          >
                            <option value="" disabled>
                              Select a subject…
                            </option>
                            {subjectOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          {/* Custom chevron */}
                          <svg
                            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-7">
                      <label
                        htmlFor="message"
                        className="block text-[13px] font-semibold text-gray-700 mb-1.5"
                      >
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you…"
                        rows={5}
                        disabled={busy}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200 resize-none leading-relaxed"
                      />
                    </div>

                    {/* Error banner */}
                    {status === "error" && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 mb-6">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700 leading-relaxed">
                          {errorMsg}
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={busy}
                      className="w-full flex items-center justify-center gap-3 py-3.5 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold text-[15px] rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                    >
                      {busy ? (
                        <>
                          <Spinner /> Sending…
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[12px] text-gray-400 mt-4">
                      By submitting, you agree to our{" "}
                      <a href="#" className="underline hover:text-gray-600">
                        Privacy Policy
                      </a>
                      . We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
