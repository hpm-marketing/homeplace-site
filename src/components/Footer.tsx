import logoFooter from '../assets/logo-footer.svg'
import instagram from '../assets/instagram.svg'
import { ENDERECO_CD, ENDERECO_CD_MAPA_URL, INSTAGRAM_URL, SAC_URL } from '../constants'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="footer__logo" href="#inicio" aria-label="Homeplace Market — voltar ao topo">
          <img src={logoFooter.src} alt="Homeplace Market" width={158} height={79} />
        </a>

        <a className="footer__sac" href={SAC_URL}>
          <span className="footer__sac-label">sac 24h</span>
          <span className="footer__sac-phone">(85) 9.9909-9972</span>
        </a>

        <a className="footer__insta" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <img src={instagram.src} alt="" width={20} height={20} />
          <span>@homeplacemarket</span>
        </a>

        <a
          className="footer__endereco"
          href={ENDERECO_CD_MAPA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Endereço do Centro de Distribuição — abrir no mapa"
        >
          <span className="footer__endereco-label">Centro de Distribuição</span>
          <address className="footer__endereco-texto">
            {ENDERECO_CD.rua} - {ENDERECO_CD.bairro}
            <br />
            {ENDERECO_CD.cidade} - {ENDERECO_CD.uf}, {ENDERECO_CD.cep}
          </address>
        </a>

        <p className="footer__copy">© 2026 Home Place Market — Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
