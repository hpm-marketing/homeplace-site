'use client'

import { useEffect, useRef, useState } from 'react'
import { BASE_PATH, CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Parceiro.css'

const VIDEO_ITEMS = [
  {
    id: 'video-1',
    src: `${BASE_PATH}/videos/depoimento-1.mp4`,
    title: 'Depoimento de parceiro 1',
  },
  {
    id: 'video-2',
    src: `${BASE_PATH}/videos/depoimento-2.mp4`,
    title: 'Depoimento de parceiro 2',
  },
  {
    id: 'video-3',
    src: `${BASE_PATH}/videos/depoimento-3.MOV`,
    title: 'Depoimento de parceiro 3',
  },
]

function IconVolumeOff() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function IconVolumeOn() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

function IconChevronLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function Parceiro() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.4 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return

      if (index === activeIndex && isVisible) {
        video.muted = isMuted
        video.volume = isMuted ? 0 : 1
        video.play().catch(() => undefined)
        return
      }

      video.pause()
      video.currentTime = 0
    })
  }, [activeIndex, isMuted, isVisible])

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % VIDEO_ITEMS.length)
  }

  const handlePrevious = () => {
    setActiveIndex((current) => (current - 1 + VIDEO_ITEMS.length) % VIDEO_ITEMS.length)
  }

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
    }
  }

  const handleToggleAudio = () => {
    const nextIsMuted = !isMuted
    const activeVideo = videoRefs.current[activeIndex]

    setIsMuted(nextIsMuted)
    if (activeVideo) {
      activeVideo.muted = nextIsMuted
      activeVideo.volume = nextIsMuted ? 0 : 1
      if (!nextIsMuted) activeVideo.play().catch(() => undefined)
    }
  }

  const handleVolumeChange = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget
    if (video === videoRefs.current[activeIndex]) setIsMuted(video.muted || video.volume === 0)
  }

  return (
    <section id="parceiro" className="parceiro" aria-labelledby="parceiro-titulo" ref={sectionRef}>
      <div className="parceiro__inner">
        <div className="parceiro__content">
          <h2 id="parceiro-titulo" className="parceiro__title">
            <span className="parceiro__title-light t-medium">Seja um</span>
            <span className="t-black">
              parceiro
              <br />
              HomePlace
            </span>
          </h2>
          <p className="parceiro__text t-body">
            Síndicos, administradoras e construtoras: leve o{' '}
            <span className="hl-black">Homeplace Market</span> para o seu empreendimento sem nenhum
            custo de instalação. Aumente o valor percebido do condomínio e ofereça um benefício real
            para quem mora ali.
          </p>
          <CtaButton
            className="parceiro__cta"
            href={CONSULTOR_URL}
            label="quero falar com a Homeplace"
          />
        </div>

        <div className="parceiro__media-column">
          <div className="parceiro__video-stage" aria-label="Carrossel de vídeos do Homeplace Market">
            <button
              className="parceiro__stage-nav parceiro__stage-nav--prev"
              type="button"
              onClick={handlePrevious}
              aria-label="Vídeo anterior"
              title="Vídeo anterior"
            >
              <IconChevronLeft />
            </button>
            <button
              className="parceiro__stage-nav parceiro__stage-nav--next"
              type="button"
              onClick={handleNext}
              aria-label="Próximo vídeo"
              title="Próximo vídeo"
            >
              <IconChevronRight />
            </button>

            {VIDEO_ITEMS.map((video, index) => {
              const offset = index - activeIndex
              const normalizedOffset = offset === -2 ? 1 : offset === 2 ? -1 : offset
              const isActive = index === activeIndex
              const isVisibleItem = Math.abs(normalizedOffset) <= 1

              return (
                <div
                  key={video.id}
                  className={`parceiro__video-card ${isActive ? 'is-active' : ''}`}
                  style={{
                    opacity: isVisibleItem ? (isActive ? 1 : 0.55) : 0,
                    transform: `translate(-50%, -50%) translateX(${normalizedOffset * 170}px) scale(${isActive ? 1 : 0.82})`,
                    zIndex: isActive ? 2 : 1,
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node
                    }}
                    className="parceiro__video"
                    src={video.src}
                    playsInline
                    autoPlay={isVisible && isActive}
                    muted={isMuted}
                    controls
                    preload="metadata"
                    onVolumeChange={handleVolumeChange}
                    onEnded={handleNext}
                    aria-label={video.title}
                  />

                  {isActive && (
                    <button
                      type="button"
                      className={`parceiro__audio-overlay-btn ${!isMuted ? 'is-active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggleAudio()
                      }}
                      title={isMuted ? 'Clique para ativar o áudio' : 'Clique para silenciar'}
                      aria-label={isMuted ? 'Ativar áudio do vídeo' : 'Silenciar áudio do vídeo'}
                    >
                      {isMuted ? <IconVolumeOff /> : <IconVolumeOn />}
                      <span>{isMuted ? 'Ativar áudio' : 'Áudio ligado'}</span>
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          <div className="parceiro__dots" aria-label="Navegação pelos depoimentos">
            {VIDEO_ITEMS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`parceiro__dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para ${item.title}`}
                title={`Ir para o vídeo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

