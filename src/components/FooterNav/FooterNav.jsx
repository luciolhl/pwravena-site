import { Link } from "react-router-dom";

export const FooterNav = () => {
  return (
    <>
      <div className="footer__nav">
        <div className="footer__nav-item">
          <a href="/">Início</a>
        </div>
        <div className="footer__nav-item">
          <a href="#" target="_blank">
            Painel Jogador
          </a>
        </div>
        <div className="footer__nav-item">
          <Link to="#">Download</Link>
        </div>
        <div className="footer__nav-item">
          <Link to="/sobre">Sobre o Servidor</Link>
        </div>
      </div>

      <div className="footer__nav">
        <div className="footer__nav-item">
          <a href=" https://www.facebook.com/pwvintage" target="_blank">
            Facebook
          </a>
        </div>
        <div className="footer__nav-item">
          <a href="https://www.instagram.com/pwvintage" target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </>
  );
};
