import { useEffect, useState } from 'react'
import logo from '../assets/logo-header.png'
import menuIcon from '../assets/menu.svg'
import { CONSULTOR_URL, NAV_LINKS } from '../constants'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${open ? 'is-open' : ''}`}>
      <div className="header__inner">
        <button
          type="button"
          className="header__menu-btn"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <img src={menuIcon} alt="" width={24} height={24} />
        </button>

        <a className="header__logo" href="#inicio" aria-label="Homeplace Market — início" onClick={close}>
          <img src={logo} alt="Homeplace Market" width={316} height={178} />
        </a>

        <nav id="menu-principal" className="header__nav" aria-label="Menu principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="header__nav-cta">
              <a href={CONSULTOR_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
                Fale conosco
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
