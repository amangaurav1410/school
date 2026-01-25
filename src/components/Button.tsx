import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  // Base styles
  const baseStyles = 'inline-block rounded-xl font-bold transition-all duration-300 text-center';

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  // Hover scale and shadow
  const hoverStyles = variant !== 'outline' ? 'hover:scale-[1.05] hover:shadow-xl' : '';

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  // For outline variant, add border and classes
  const outlineClasses = variant === 'outline' ? 'border-2 border-[#d0302b] hover:bg-[#d0302b] shadow-none hover:shadow-xl' : '';

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${hoverStyles} ${outlineClasses} ${disabledStyles} ${className}`;

  // Inline styles with proper color handling
  const getInlineStyles = () => {
    const baseStyle = {
      fontFamily: '"Lato", sans-serif',
      color: '#FFFFFF',  // White by default for primary and secondary
    };

    if (variant === 'primary') {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #d0302b 0%, #8d211d 100%)',
        boxShadow: '0 4px 12px rgba(208,48,43,0.2)',
      };
    } else if (variant === 'secondary') {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #D6B25E 0%, #C5A04D 100%)',
        boxShadow: '0 4px 12px rgba(214,178,94,0.2)',
      };
    } else { // outline
      return {
        fontFamily: '"Lato", sans-serif',
        color: '#d0302b',
        background: 'transparent',
      };
    }
  };

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={combinedStyles}
        style={getInlineStyles()}
        onMouseEnter={(e) => {
          if (variant === 'primary' || variant === 'secondary') {
            e.currentTarget.style.color = '#D6B25E';
          } else if (variant === 'outline') {
            e.currentTarget.style.color = '#D6B25E';
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary' || variant === 'secondary') {
            e.currentTarget.style.color = '#FFFFFF';
          } else if (variant === 'outline') {
            e.currentTarget.style.color = '#d0302b';
          }
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      style={getInlineStyles()}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          if (variant === 'primary' || variant === 'secondary') {
            e.currentTarget.style.color = '#D6B25E';
          } else if (variant === 'outline') {
            e.currentTarget.style.color = '#D6B25E';
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          if (variant === 'primary' || variant === 'secondary') {
            e.currentTarget.style.color = '#FFFFFF';
          } else if (variant === 'outline') {
            e.currentTarget.style.color = '#d0302b';
          }
        }
      }}
    >
      {children}
    </button>
  );
}
