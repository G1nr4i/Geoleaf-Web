interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Capture',
    description: 'Take a photo in the field',
  },
  {
    number: 2,
    title: 'Tag location',
    description: 'GPS auto-records coordinates',
  },
  {
    number: 3,
    title: 'View on map',
    description: 'Data appears on layered map',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <p className="section-label">How it works</p>
      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <p className="step-title">{step.title}</p>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
