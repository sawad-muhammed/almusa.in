interface SectionProps {
  id?: string
  title: string
  subtitle?: string
  bgColor?: string
  children: React.ReactNode
  darkBg?: boolean
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  bgColor = 'bg-[#0d1117]', 
  children,
  darkBg = false
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 ${bgColor} ${darkBg ? 'relative' : ''}`}
    >
      {darkBg && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-teal-500/5 to-transparent"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}