import whatsappIcon from '../assets/whatsapp.png'
import whatsappWhiteIcon from '../assets/whatsapp-branco.svg'
import './CtaButton.css'

type CtaButtonProps = {
  href: string
  label: string
  variant?: 'white' | 'green'
  size?: 'default' | 'compact'
  className?: string
}

export default function CtaButton({
  href,
  label,
  variant = 'white',
  size = 'default',
  className = '',
}: CtaButtonProps) {
  return (
    <a
      className={`cta cta--${variant} cta--${size} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {variant === 'white' ? (
        <img className="cta__icon" src={whatsappIcon} alt="" width={40} height={40} />
      ) : (
        <img className="cta__icon" src={whatsappWhiteIcon} alt="" width={37} height={37} />
      )}
      <span className="cta__label">{label}</span>
    </a>
  )
}
