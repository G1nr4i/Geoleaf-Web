interface Feature {
  title: string
  description: string
  upcoming?: boolean
}

const features: Feature[] = [
  {
    title: 'Camera-based collection',
    description: 'Capture field data directly through the device camera.',
  },
  {
    title: 'GNSS geolocation',
    description: 'Pinpoint exact locations using cellular GPS.',
  },
  {
    title: 'Layered maps',
    description: 'Switch between satellite and OSM map styles.',
  },
  {
    title: 'Local & online storage',
    description: 'Works offline, syncs data when connected.',
  },
  {
    title: 'Geofielding',
    description: 'Define and track specific field boundaries.',
  },
  {
    title: 'Plant recognition',
    description: 'On-device ML identifies plant species in photos.',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <p className="section-label">Key features</p>
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-card-header">
              <p className="feature-title">{feature.title}</p>
              {feature.upcoming && (
                <span className="feature-badge">In progress</span>
              )}
            </div>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
