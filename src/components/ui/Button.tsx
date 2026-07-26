interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
  const variantStyles = {
    primary: "bg-teal-500 hover:bg-teal-600 text-white",
    secondary: "bg-[#1e293b] hover:bg-[#334155] text-white"
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}