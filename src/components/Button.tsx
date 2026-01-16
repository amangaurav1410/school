import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-block font-bold rounded-2xl transition-all hover:scale-105 shadow-lg text-center';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#8B1E1A] to-[#6B1510] text-white hover:shadow-2xl',
    secondary: 'bg-gradient-to-r from-[#D6B25E] to-[#C5A04D] text-white hover:shadow-2xl',
    outline: 'bg-transparent text-[#8B1E1A] border-2 border-[#8B1E1A] hover:bg-[#8B1E1A] hover:text-white'
  };
  
  const sizeStyles = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-xl'
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
