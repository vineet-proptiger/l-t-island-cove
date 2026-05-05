'use client'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const RED = '#EB2027'

const VideoSection = ({ setIsOpen }) => {
  return (
    <section
      id="video"
      style={{ background: '#000', borderBottom: '1px solid #111' }}
    >
      {/* Full-width video — no container, edge to edge */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', display: 'block', maxHeight: '600px', objectFit: 'cover' }}
      >
        <source src="/images/shriram-codename/video.mp4" type="video/mp4" />
      </video>

    </section>
  )
}

export default VideoSection
