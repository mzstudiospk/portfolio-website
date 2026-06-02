"use client";

import {
  useState,
  type ChangeEvent,
  type ComponentType,
  type FormEvent,
  type SVGProps,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/src/components/sections/section-heading";
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/src/components/icons";
import { cn } from "@/lib/utils";

const EMAIL = "zeeshanofficial337@gmail.com";
const WHATSAPP_INTL = "+92 346 1768288";
const WHATSAPP_HREF =
  "https://wa.me/923461768288?text=Hi%20Zeeshan%2C%20I%27m%20interested%20in%20your%20services";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqklgwp";

// Pragmatic email regex — catches almost everything useful without false rejects.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LEN = 10;

type InfoCard = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
  tone: "brand" | "accent";
};

const INFO_CARDS: InfoCard[] = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    tone: "brand",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: WHATSAPP_INTL,
    href: WHATSAPP_HREF,
    tone: "accent",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Multan, Pakistan 🇵🇰",
    tone: "brand",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    tone: "accent",
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/muhammad-zeeshan-dev-pk", Icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammadzeeshan-dev",
    Icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/MZStudiosPK",
    Icon: FacebookIcon,
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = { name: "", email: "", subject: "", message: "" };

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please tell me your name.";
  if (!f.email.trim()) e.email = "Email is required.";
  else if (!EMAIL_RE.test(f.email.trim()))
    e.email = "That email doesn't look right.";
  if (!f.subject.trim()) e.subject = "A subject helps me triage faster.";
  const msg = f.message.trim();
  if (!msg) e.message = "Don't forget the message.";
  else if (msg.length < MIN_MESSAGE_LEN)
    e.message = `Message should be at least ${MIN_MESSAGE_LEN} characters.`;
  return e;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [key]: value }));
      // Clear that field's error as soon as the user starts fixing it.
      if (errors[key]) {
        setErrors((old) => {
          const next = { ...old };
          delete next[key];
          return next;
        });
      }
    };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Reset any prior banner state on a fresh attempt.
    setIsSuccess(false);
    setIsError(false);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);

      setIsSuccess(true);
      setForm(EMPTY_FORM);
      window.setTimeout(() => setIsSuccess(false), 6000);
    } catch {
      setIsError(true);
      window.setTimeout(() => setIsError(false), 9000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div id="contact-heading">
          <SectionHeading number="06" title="Let's Work Together" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Have a project in mind?{" "}
            <span className="bg-gradient-to-r from-brand to-accent-warm bg-clip-text text-transparent">
              Let&apos;s talk!
            </span>
          </h3>
          <p className="mt-5 text-base leading-relaxed text-foreground/65 sm:text-lg">
            I&apos;m currently open to select freelance work and new
            opportunities. Whether you&apos;re building an MVP, scaling an app,
            or just want to say hello — my inbox is always open. I typically
            respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* LEFT — Info cards */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
          >
            {INFO_CARDS.map((c) => (
              <motion.li
                key={c.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <InfoCardTile card={c} />
              </motion.li>
            ))}
          </motion.ul>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={onSubmit}
              noValidate
              aria-busy={isSubmitting}
              className="rounded-2xl border border-white/10 bg-surface/40 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" id="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass(!!errors.name)}
                  />
                </Field>
                <Field label="Email" id="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass(!!errors.email)}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Subject" id="subject" error={errors.subject}>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="What's it about?"
                    aria-invalid={!!errors.subject}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    className={inputClass(!!errors.subject)}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" id="message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell me about your project, timeline, and goals…"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={cn(
                      inputClass(!!errors.message),
                      "min-h-[140px] resize-y",
                    )}
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-3">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                  className="h-12 w-full gap-2 bg-brand text-base font-semibold text-brand-foreground shadow-[0_12px_28px_-12px_rgba(46,134,222,0.55)] hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle
                        className="size-4 animate-spin"
                        aria-hidden
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="size-4" />
                    </>
                  )}
                </Button>

                <AnimatePresence initial={false}>
                  {isSuccess && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      role="status"
                      aria-live="polite"
                      className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
                    >
                      <span aria-hidden>✓</span> Message sent! I&apos;ll respond
                      within 24 hours.
                    </motion.p>
                  )}

                  {isError && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      role="alert"
                      className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                    >
                      <span aria-hidden>✗</span> Failed to send. Please email
                      directly at{" "}
                      <a
                        href={`mailto:${EMAIL}`}
                        className="font-medium underline underline-offset-2 hover:text-red-200"
                      >
                        {EMAIL}
                      </a>
                      .
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Mailto CTA + socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/55">
            Prefer email?
          </p>
          <div className="mt-5 flex justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-white/15 bg-transparent px-6 text-base font-semibold text-foreground hover:border-brand/50 hover:bg-brand/5 hover:text-foreground sm:text-lg"
            >
              <a href={`mailto:${EMAIL}`}>
                <span className="font-mono">{EMAIL}</span>
                <span aria-hidden className="ml-2 text-brand">
                  →
                </span>
              </a>
            </Button>
          </div>

          <ul
            aria-label="Social links"
            className="mt-8 flex items-center justify-center gap-3"
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-surface/40 text-foreground/65 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand/10 hover:text-brand"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* WhatsApp CTA — the green is the site's only green, reserved as the
            primary "talk to me right now" action. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/55">
            Prefer instant messaging?
          </p>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-[0_14px_32px_-14px_rgba(37,211,102,0.55)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#1EBE5D] hover:shadow-[0_20px_44px_-14px_rgba(37,211,102,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-lg"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon className="size-5" />
            Chat on WhatsApp
          </a>

          <p className="mt-4 text-sm text-foreground/55">
            Fastest way to reach me — usually reply within minutes!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Shared input styling — flips to red accents when the field has an error.
function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-lg border px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 outline-none transition-all sm:text-base",
    hasError
      ? "border-red-400/50 bg-red-400/[0.04] focus:border-red-400/70 focus:ring-2 focus:ring-red-400/20"
      : "border-white/10 bg-background/60 focus:border-brand/60 focus:bg-background/80 focus:ring-2 focus:ring-brand/25",
  );
}

function Field({
  label,
  id,
  children,
  error,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55">
        {label}
      </span>
      {children}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 block text-xs text-red-400"
        >
          {error}
        </span>
      )}
    </label>
  );
}

function InfoCardTile({ card }: { card: InfoCard }) {
  const Icon = card.icon;
  const toneIcon =
    card.tone === "brand"
      ? "bg-brand/10 text-brand border-brand/25"
      : "bg-accent-warm/10 text-accent-warm border-accent-warm/25";
  const toneHover =
    card.tone === "brand"
      ? "hover:border-brand/40 hover:shadow-[0_18px_48px_-20px_rgba(46,134,222,0.45)]"
      : "hover:border-accent-warm/40 hover:shadow-[0_18px_48px_-20px_rgba(243,156,18,0.45)]";

  const body = (
    <div
      className={`group/card flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-surface/40 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface/60 ${toneHover}`}
    >
      <span
        className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover/card:-translate-y-0.5 ${toneIcon}`}
      >
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
          {card.label}
        </p>
        <p className="mt-1 truncate text-sm font-medium text-foreground sm:text-base">
          {card.value}
        </p>
      </div>
    </div>
  );

  return card.href ? (
    <a
      href={card.href}
      target={card.href.startsWith("http") ? "_blank" : undefined}
      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block h-full"
    >
      {body}
    </a>
  ) : (
    body
  );
}
