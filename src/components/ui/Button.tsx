interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  disabled?: boolean
}

export default function Button({ 
  onClick, 
  children, 
  variant = 'primary',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white shadow-lg hover:shadow-xl hover:shadow-teal-500/50 disabled:opacity-50",
    secondary: "bg-[#1e293b] hover:bg-[#2d3748] text-white border border-teal-500/30 hover:border-teal-500 disabled:opacity-50",
    outline: "border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 disabled:opacity-50"
  }

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}