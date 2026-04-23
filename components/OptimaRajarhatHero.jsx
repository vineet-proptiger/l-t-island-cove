"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { heroImages } from "../lib/images";
import LeadForm from "./LeadForm";

const F_JOST = "var(--font-jost), Montserrat, sans-serif";
const F_SANS = "var(--font-sans), Open Sans, sans-serif";

const slides = [heroImages.banner, heroImages.banner2];

const SPECS = [
  { value: "-- Acres", label: "Land Parcel" },
  { value: "G + --", label: "Floors" },
  { value: "-- BHK", label: "Configurations" },
  { value: "-- 20--", label: "Possession" },
];

const OptimaRajarhatHero = ({ setIsOpen }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full !pt-0 !pb-0 overflow-hidden" style={{ minHeight: "100vh" }}>

      {/* ── Background Image Carousel ── */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`Krish Optima Rajarhat ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark gradient overlay — heavier on right for form readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.80) 100%)",
          }}
        />
      </div>

      {/* ── Slide Dots ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "36px" : "10px",
              height: "4px",
              background: i === current ? "var(--color-teal)" : "rgba(255,255,255,0.45)",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>

      {/* ── Content Layer ── */}
      <div
        className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch"
        style={{ minHeight: "100vh", paddingTop: "82px" }}
      >
        {/* ════ LEFT — Project Info ════ */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10 lg:py-0">

          {/* New Launch Badge */}
          <div className="mb-5" data-aos="fade-down">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "var(--color-teal)",
                color: "#fff",
                padding: "5px 16px",
                borderRadius: "50px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: F_JOST,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#fff",
                  display: "inline-block",
                }}
              />
              New Launch
            </span>
          </div>

          {/* Project Name */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              fontFamily: F_JOST,
              fontSize: "clamp(28px, 5vw, 54px)",
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: 1.1,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Krish Optima
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="160"
            style={{
              fontFamily: F_SANS,
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "rgba(255,255,255,0.82)",
              margin: "0 0 6px",
              fontWeight: "500",
              letterSpacing: "0.02em",
            }}
          >
            By Krish Group
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              fontFamily: F_SANS,
              fontSize: "13px",
              color: "var(--color-teal-light)",
              margin: "0 0 28px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Rajarhat, Kolkata
          </p>

          {/* Specs Row */}
          <div
            data-aos="fade-up"
            data-aos-delay="260"
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-[520px]"
          >
            {SPECS.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "10px",
                  padding: "12px 10px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: F_JOST,
                    fontSize: "18px",
                    fontWeight: "800",
                    color: "#fff",
                    margin: "0 0 3px",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: F_SANS,
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: "600",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div data-aos="fade-up" data-aos-delay="320" className="mb-8">
            <p
              style={{
                fontFamily: F_SANS,
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
                margin: "0 0 4px",
                fontWeight: "500",
              }}
            >
              Starting Price
            </p>
            <span
              className="blink-price"
              style={{
                fontFamily: F_JOST,
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: "900",
                color: "var(--color-teal-light)",
                lineHeight: 1,
              }}
            >
              ₹ -- Cr Onwards
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="380"
            className="flex flex-wrap gap-3 mb-8"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="btn-teal"
              style={{ padding: "13px 28px", fontSize: "13px" }}
            >
              Enquire Now
            </button>
            <a
              href="tel:+919718344024"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 28px",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: "2px solid rgba(255,255,255,0.35)",
                borderRadius: "50px",
                color: "#fff",
                fontFamily: F_JOST,
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Trust Row */}
          <div
            data-aos="fade-up"
            data-aos-delay="440"
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: "✓", text: "RERA Approved" },
              { icon: "✓", text: "Free Site Visit" },
              { icon: "✓", text: "Best Price Guarantee" },
            ].map((t, i) => (
              <span
                key={i}
                style={{
                  fontFamily: F_SANS,
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "var(--color-teal)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "#fff",
                    fontWeight: "800",
                    flexShrink: 0,
                  }}
                >
                  {t.icon}
                </span>
                {t.text}
              </span>
            ))}
          </div>
        </div>

        {/* ════ RIGHT — Lead Form Card ════ */}
        <div
          className="w-full lg:w-[400px] xl:w-[440px] flex flex-col justify-center px-6 lg:px-8 py-8 lg:py-0 shrink-0"
          data-aos="fade-left"
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            }}
          >
            {/* Card Header */}
            <div
              style={{
                background: "linear-gradient(135deg, var(--color-teal-dark) 0%, var(--color-teal) 100%)",
                padding: "18px 24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: F_JOST,
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.7)",
                  margin: "0 0 4px",
                  fontWeight: "700",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Limited Units Available
              </p>
              <p
                style={{
                  fontFamily: F_JOST,
                  fontSize: "18px",
                  fontWeight: "800",
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                Get Exclusive Price Details
              </p>
            </div>

            {/* Form Body */}
            <div className="p-6">
              <LeadForm formName="Optima Rajarhat Hero Form" btnText="Get Best Price" />
            </div>

            {/* Card Footer */}
            <div
              style={{
                background: "#f9fafb",
                borderTop: "1px solid #f0f0f0",
                padding: "12px 20px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {[
                { icon: "🎧", label: "Instant Callback" },
                { icon: "🚗", label: "Free Site Visit" },
                { icon: "🏷️", label: "Best Price" },
              ].map((b, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "16px", display: "block", lineHeight: 1.4 }}>{b.icon}</span>
                  <span
                    style={{
                      fontFamily: F_SANS,
                      fontSize: "10px",
                      color: "#6b7280",
                      fontWeight: "600",
                    }}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimaRajarhatHero;
