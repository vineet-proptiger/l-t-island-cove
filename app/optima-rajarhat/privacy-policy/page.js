"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { logoImages } from "../../../lib/images";
import AosInit from "../../../components/AosInit";

const GOLD = "var(--color-teal)";
const GOLD_DARK = "var(--color-teal-dark)";

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <AosInit />

      {/* ── Navbar (Sticky/Fixed) ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
      >
        {/* Top Teal Accent Line */}
        <div
          className="h-0.5 w-full"
          style={{
            background: `linear-gradient(90deg, var(--color-teal), var(--color-teal-light), var(--color-teal))`,
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-[80px]">
          <Link href="/optima-rajarhat" className="flex items-center">
            <h2 style={{ fontFamily: 'var(--font-jost)', fontWeight: '800', fontSize: '20px', color: 'var(--color-primary)', margin: 0 }}>
              SRIJAN <span style={{ color: 'var(--color-teal)' }}>OPTIMA</span>
            </h2>
          </Link>
          <Link
            href="/optima-rajarhat"
            className="btn-teal shadow-lg !text-[11px] !px-3 !py-2 sm:!text-sm sm:!px-6 sm:!py-3"
          >
            <span className="hidden sm:inline">BACK TO HOME</span>
            <span className="sm:hidden">HOME</span>
          </Link>
        </div>
      </nav>

      {/* Spacer for Fixed Nav */}
      <div className="h-[80px]"></div>

      {/* ── Hero Banner ── */}
      <section
        className="relative flex items-center justify-center text-center min-h-[140px] sm:min-h-[200px]"
        style={{
          background: "var(--color-primary-dark)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 px-4 py-10 sm:py-16" data-aos="fade-up">
          <h1
            className="text-white font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontFamily: "var(--font-jost), Jost, sans-serif",
              letterSpacing: "1px",
            }}
          >
            Privacy Policy
          </h1>
          <div
            className="flex items-center justify-center gap-2 text-white/80 text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <Link
              href="/optima-rajarhat"
              className="hover:text-white transition-colors"
              style={{ color: "var(--color-teal)" }}
            >
              Home
            </Link>
            <span>›</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-8 sm:py-16 bg-[#f9f9f9]">
        <div
          className="container mx-auto px-4 md:px-8"
          style={{ maxWidth: "900px" }}
          data-aos="fade-up"
        >
          <div
            className="bg-white rounded-lg shadow-md"
            style={{
              padding: "clamp(24px, 5vw, 56px)",
              border: "1px solid #f0f0f0",
            }}
          >
            {/* Intro */}
            <p
              className="mb-6 sm:mb-8 text-sm sm:text-base"
              style={{
                lineHeight: 1.8,
                color: "#444",
                fontFamily: "var(--font-jost), Jost, sans-serif",
              }}
            >
              At{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-teal-dark)", fontWeight: "600" }}
              >
                Srijan Optima
              </a>{" "}
              (Authorized Marketing Partner), we respect your privacy and are
              committed to safeguarding your personal data. This Privacy Policy
              outlines how we collect, use, and protect your information when
              you visit our website.
            </p>

            {/* ── Section 1 ── */}
            <div className="mb-10" data-aos="fade-up">
              <h2
                className="flex items-center gap-2 sm:gap-3 mb-4 text-lg sm:text-[22px]"
                style={{
                  fontWeight: "700",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-jost), Jost, sans-serif",
                }}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold"
                  style={{ background: GOLD, color: "#fff" }}
                >
                  1
                </span>
                Updates to This Policy
              </h2>
              <p
                className="text-sm sm:text-[15px]"
                style={{
                  lineHeight: 1.8,
                  color: "#555",
                  fontFamily: "var(--font-sans)",
                  paddingLeft: "44px",
                }}
              >
                This Privacy Policy may be updated from time to time without
                prior notice. We encourage you to review this page periodically
                to stay informed about any changes.
              </p>
            </div>

            {/* ── Section 2 ── */}
            <div className="mb-10" data-aos="fade-up">
              <h2
                className="flex items-center gap-2 sm:gap-3 mb-4 text-lg sm:text-[22px]"
                style={{
                  fontWeight: "700",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-jost), Jost, sans-serif",
                }}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold"
                  style={{ background: GOLD, color: "#fff" }}
                >
                  2
                </span>
                Information We Collect
              </h2>
              <div style={{ paddingLeft: "44px" }}>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#555",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  When you visit or interact with our website, we may collect
                  the following information:
                </p>
                <ul className="space-y-2 mb-4" style={{ paddingLeft: "20px" }}>
                  {[
                    "Personal details you voluntarily provide (e.g., name, phone number, email address)",
                    "Technical and tracking data, such as:",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2"
                      style={{
                        fontSize: "15px",
                        color: "#555",
                        fontFamily: "var(--font-sans)",
                        lineHeight: 1.8,
                      }}
                    >
                      <span
                        style={{
                          color: GOLD_DARK,
                          fontWeight: "700",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Section 3 ── */}
            <div className="mb-10" data-aos="fade-up">
              <h2
                className="flex items-center gap-2 sm:gap-3 mb-4 text-lg sm:text-[22px]"
                style={{
                  fontWeight: "700",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-jost), Jost, sans-serif",
                }}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold"
                  style={{ background: GOLD, color: "#fff" }}
                >
                  3
                </span>
                Purpose of Data Collection
              </h2>
              <ul className="space-y-2" style={{ paddingLeft: "44px" }}>
                {[
                  "Respond to your inquiries and service requests",
                  "Provide relevant product and project updates",
                  "Improve website performance and user experience",
                  "Run marketing campaigns and track conversions",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2"
                    style={{
                      fontSize: "15px",
                      color: "#555",
                      fontFamily: "var(--font-sans)",
                      lineHeight: 1.8,
                    }}
                  >
                    <span
                      style={{
                        color: GOLD_DARK,
                        fontWeight: "700",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Section 4 — Contact ── */}
            <div data-aos="fade-up">
              <h2
                className="flex items-center gap-2 sm:gap-3 mb-4 text-lg sm:text-[22px]"
                style={{
                  fontWeight: "700",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-jost), Jost, sans-serif",
                }}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold"
                  style={{ background: GOLD, color: "#fff" }}
                >
                  4
                </span>
                Contact Us
              </h2>
              <div
                className="rounded-lg p-6"
                style={{
                  background: "var(--color-teal-bg)",
                  border: `1px solid var(--color-teal)`,
                }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Authorized Marketing Partner
                </p>

                <p style={{ fontSize: '15px', color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>
                  For any privacy-related queries, please contact us through our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "var(--color-dark)",
          color: "#fff",
          padding: "24px",
          textAlign: "center",
          borderTop: "1px solid #333",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#888",
            fontFamily: "var(--font-sans)",
          }}
        >
          &copy; 2026 Srijan Optima. All rights reserved |{" "}
          <Link
            href="/optima-rajarhat"
            style={{ color: "var(--color-teal)", textDecoration: "none" }}
          >
            Back to Home
          </Link>
        </p>
      </footer>
    </main>
  );
}
