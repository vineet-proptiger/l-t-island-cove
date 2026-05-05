'use client'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const RED = '#EB2027'

const Overview = ({ setIsOpen }) => {
  return (
    <section id="overview" style={{ padding: '64px 0', background: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container mx-auto px-4 md:px-10" style={{ maxWidth: '900px' }}>

        {/* Section heading */}
        <h2 style={{
          fontFamily: F_JOST, fontSize: '28px', fontWeight: '700',
          color: RED, margin: '0 0 24px', letterSpacing: '-0.01em',
        }} data-aos="fade-up">
          Overview
        </h2>

        {/* Description */}
        <div data-aos="fade-up" data-aos-delay="80">
          <p style={{
            fontFamily: F_SANS, fontSize: '14.5px', lineHeight: '1.85',
            color: '#4b5563', margin: '0 0 18px',
          }}>
            Shriram Codename Pudhiya offers premium 1, 2 &amp; 3 BHK homes starting from ₹32 Lakhs* in the fast-growing corridor of Thirumazhisai near Poonamallee. Spread across 8.9 acres with 7 towers and 1,053 thoughtfully designed apartments, the project features 75% open space and a 12,000 sq. ft. clubhouse with 45+ modern amenities for a complete lifestyle experience.
          </p>
          <p style={{
            fontFamily: F_SANS, fontSize: '14.5px', lineHeight: '1.85',
            color: '#4b5563', margin: '0 0 32px',
          }}>
            Strategically located with seamless connectivity to Poonamallee, Avadi, Porur, major highways, the upcoming metro, and Chennai International Airport, this address ensures easy access to IT parks, industrial hubs, reputed schools, and shopping centers. Developed by Shriram Properties, the project combines quality construction, transparency, and long-term value appreciation in one of West Chennai&apos;s fastest-developing residential zones.
          </p>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="120">
          <button
            onClick={() => setIsOpen(true)}
            className="btn-gold-outline"
            style={{ padding: '10px 28px' }}
          >
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  )
}

export default Overview
