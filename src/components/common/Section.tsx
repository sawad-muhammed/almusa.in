interface SectionProps {
  id?: string
  title: string
  subtitle?: string
  bgColor?: string
  children: React.ReactNode
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  bgColor = 'bg-[#0d1117]', 
  children 
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-teal-400 mb-3">{title}</h2>
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}