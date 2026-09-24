import { useEffect, useState, useRef } from 'react'
import mapaCeara from '../assets/mapa-ceara.png'
import seloEstamos from '../assets/selo-estamos.png'
import sacola from '../assets/sacola.svg'
import { CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Presenca.css'

export default function Presenca() {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTimestamp: number | null = null
          const duration = 1600
          const endValue = 40

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * endValue))

            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(endValue)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  /* Animação de entrada da frase "Estamos onde você precisa" ao rolar até a faixa */
  const bandRef = useRef<HTMLDivElement>(null)
  const [bandArmed, setBandArmed] = useState(false)
  const [bandVisible, setBandVisible] = useState(false)

  useEffect(() => {
    const band = bandRef.current
    if (!band) return
    setBandArmed(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBandVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(band)
    return () => observer.disconnect()
  }, [])

  const bandClass = [
    'presenca__band',
    bandArmed ? 'is-armed' : '',
    bandVisible ? 'is-visible' : '',
  ].join(' ')

  return (
    <section className="presenca" aria-labelledby="presenca-titulo">
      <div className="presenca__top">
        <div className="presenca__top-inner">
          <div ref={counterRef} className="presenca__somos-graphic">
            <span className="presenca__somos-label t-black">SOMOS</span>
            <div className="presenca__somos-number t-black">
              <span className="presenca__plus">+</span>
              <span className="presenca__count">{count}</span>
            </div>
            <span className="presenca__somos-sublabel t-black">LOJAS NO CEARÁ</span>
          </div>
          <img className="presenca__mapa" src={mapaCeara} alt="Mapa do Ceará" width={214} height={200} />
        </div>
      </div>

      <div ref={bandRef} className={bandClass}>
        <div className="presenca__band-inner">
          <div className="presenca__selo" aria-hidden="true">
            <img src={seloEstamos} alt="" />
          </div>

          <div className="presenca__content">
            <h2 id="presenca-titulo" className="presenca__title t-black">
              <span className="presenca__line">estamos onde</span>
              <span className="presenca__line">você precisa.</span>
              <span className="presenca__line presenca__line--destaque hl-black">24h por dia</span>
            </h2>
            <CtaButton className="presenca__cta" href={CONSULTOR_URL} label="quero falar com um consultor" />
          </div>

          <img className="presenca__sacola" src={sacola} alt="" width={116} height={179} />
        </div>
      </div>
    </section>
  )
}

