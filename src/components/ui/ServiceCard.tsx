interface ServiceCardProps {
  title: string
  description: string
  icon?: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl border border-teal-500/20 hover:border-teal-500/50 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-2">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  )
}