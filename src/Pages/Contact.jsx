
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-[#FAF7F2] text-[#292525]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[65vh] overflow-hidden">

        <img
          src="/images/contact-hero.jpg"
          alt="Contact TRS"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#291022]/70" />

        <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8 lg:pb-20">

          <div className="max-w-3xl text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
              <MessageCircle
                size={14}
                className="text-[#E4C98F]"
              />
              Get in Touch
            </div>

            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Let's start a
              <br />
              <span className="text-[#E4C98F]">
                conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Have a question about a stay, corporate accommodation,
              or anything else? Our team is here to help.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <ContactCard
            icon={<MapPin size={22} />}
            title="Visit Us"
            text="Your TRS property address"
            linkText="Get Directions"
          />

          <ContactCard
            icon={<Phone size={22} />}
            title="Call Us"
            text="+977 98XXXXXXXX"
            linkText="Call Now"
            href="tel:+9779800000000"
          />

          <ContactCard
            icon={<Mail size={22} />}
            title="Email Us"
            text="hello@trs.com"
            linkText="Send Email"
            href="mailto:hello@trs.com"
          />

          <ContactCard
            icon={<Clock size={22} />}
            title="Opening Hours"
            text="Available every day"
            linkText="9:00 AM — 8:00 PM"
          />

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + INFO
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT SIDE */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
                Send us a message
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
                How can we
                <br />
                help you?
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#756B6B]">
                Whether you're planning your next stay, arranging
                accommodation for your team, or simply have a
                question, send us a message and we'll get back to you.
              </p>


              {/* QUICK CONTACT */}
              <div className="mt-10 space-y-5">

                <QuickContact
                  icon={<Phone size={18} />}
                  title="Prefer to talk?"
                  text="Give us a call and speak with our team."
                  href="tel:+9779800000000"
                  action="Call Us"
                />

                <QuickContact
                  icon={<MessageCircle size={18} />}
                  title="Need a quick response?"
                  text="Reach out to us through WhatsApp."
                  href="https://wa.me/9779800000000"
                  action="WhatsApp"
                  external
                />

              </div>

            </div>


            {/* FORM */}
            <div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">

              {submitted ? (

                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1E5DD] text-[#4A1D3F]">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="mt-6 font-serif text-3xl text-[#4A1D3F]">
                    Message sent!
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#756B6B]">
                    Thank you for reaching out. Our team will get
                    back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full bg-[#4A1D3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5B274D]"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME + EMAIL */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <InputField
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* PHONE + SUBJECT */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+977 98XXXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    <div>

                      <label className="mb-2 block text-xs font-semibold text-[#4A1D3F]">
                        Subject
                      </label>

                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#E4D9D1] bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#4A1D3F] outline-none transition focus:border-[#4A1D3F] focus:ring-2 focus:ring-[#4A1D3F]/10"
                      >

                        <option value="">
                          Select a subject
                        </option>

                        <option value="room-booking">
                          Room Booking
                        </option>

                        <option value="corporate-stay">
                          Corporate Stay
                        </option>

                        <option value="residence">
                          Residence
                        </option>

                        <option value="general">
                          General Enquiry
                        </option>

                        <option value="other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* MESSAGE */}
                  <div>

                    <label className="mb-2 block text-xs font-semibold text-[#4A1D3F]">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none rounded-xl border border-[#E4D9D1] bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#4A1D3F] outline-none transition placeholder:text-[#A49A95] focus:border-[#4A1D3F] focus:ring-2 focus:ring-[#4A1D3F]/10"
                    />

                  </div>


                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#4A1D3F] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#5B274D]"
                  >
                    Send Message

                    <Send
                      size={16}
                      className="transition duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-[11px] leading-5 text-[#9A908B]">
                    We'll only use your information to respond to
                    your enquiry.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORPORATE CONTACT
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="overflow-hidden rounded-[2rem] bg-[#4A1D3F]">

          <div className="grid lg:grid-cols-2">

            <div className="p-8 text-white sm:p-12 lg:p-16">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#E4C98F]">
                <BriefcaseBusiness size={23} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#E4C98F]">
                Corporate enquiries
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Looking for
                <br />
                corporate stays?
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
                If you're arranging accommodation for employees,
                business travelers, clients, or teams, our corporate
                stay service can help.
              </p>

              <Link
                to="/corporate-stay"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E4C98F] px-6 py-3.5 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#F0DDAE]"
              >
                Explore Corporate Stay
                <ArrowUpRight size={17} />
              </Link>

            </div>


            <div className="relative min-h-[350px]">

              <img
                src="/images/corporate-contact.jpg"
                alt="Corporate stay"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#291022]/30" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP / LOCATION
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
                Find us
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
                Come and
                <br />
                see us.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#756B6B]">
                Visit our property and experience the TRS
                difference for yourself.
              </p>


              <div className="mt-8 flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#4A1D3F]">
                  <MapPin size={19} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-[#4A1D3F]">
                    Our Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#756B6B]">
                    Your TRS property address
                    <br />
                    Nepal
                  </p>

                </div>

              </div>


              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#4A1D3F]/20 px-6 py-3 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#4A1D3F] hover:text-white"
              >
                Open in Google Maps
                <ArrowUpRight size={16} />
              </a>

            </div>


            {/* MAP PLACEHOLDER */}
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[#DDD3CC]">

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4A1D3F] text-[#E4C98F] shadow-xl">
                  <MapPin size={25} />
                </div>

                <h3 className="mt-5 font-serif text-2xl text-[#4A1D3F]">
                  TRS Location
                </h3>

                <p className="mt-2 text-xs text-[#756B6B]">
                  Add your Google Maps embed here
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-[#291022] px-5 py-24 text-center lg:px-8 lg:py-32">

        <div className="mx-auto max-w-3xl">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#E4C98F]">
            We're here for you
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            Have a question?
            <br />
            Just ask.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
            Our team is always happy to help with your stay,
            booking, corporate requirements, or general enquiries.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="tel:+9779800000000"
              className="flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#F0DDAE]"
            >
              <Phone size={17} />
              Call Us
            </a>

            <a
              href="https://wa.me/9779800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#4A1D3F]"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   CONTACT CARD
========================================================= */

const ContactCard = ({
  icon,
  title,
  text,
  linkText,
  href,
}) => {
  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E5DD] text-[#4A1D3F]">
        {icon}
      </div>

      <h3 className="mt-6 font-serif text-xl text-[#4A1D3F]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[#756B6B]">
        {text}
      </p>

      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#4A1D3F]">
        {linkText}
        <ArrowRight size={13} />
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="rounded-2xl border border-[#E4D9D1] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-[#E4D9D1] bg-white p-7">
      {content}
    </div>
  );
};


/* =========================================================
   QUICK CONTACT
========================================================= */

const QuickContact = ({
  icon,
  title,
  text,
  href,
  action,
  external = false,
}) => {
  return (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#4A1D3F] shadow-sm">
        {icon}
      </div>

      <div className="flex-1">

        <h3 className="text-sm font-semibold text-[#4A1D3F]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#756B6B]">
          {text}
        </p>

        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#B08B4F]"
        >
          {action}
          <ArrowUpRight size={12} />
        </a>

      </div>

    </div>
  );
};


/* =========================================================
   INPUT FIELD
========================================================= */

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>

      <label className="mb-2 block text-xs font-semibold text-[#4A1D3F]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-[#E4D9D1] bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#4A1D3F] outline-none transition placeholder:text-[#A49A95] focus:border-[#4A1D3F] focus:ring-2 focus:ring-[#4A1D3F]/10"
      />

    </div>
  );
};

export default Contact;
