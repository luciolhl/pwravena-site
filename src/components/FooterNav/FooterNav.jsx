import { Link } from "react-router-dom";
import { Routes } from "../../utils/Routes";

export const FooterNav = () => {
  return (
    <>
      <div className="footer__nav">
        <div className="footer__nav-item">
          <a href={Routes.home}>Início</a>
        </div>
        <div className="footer__nav-item">
          <a href={Routes.painel} target="_blank">
            Painel Jogador
          </a>
        </div>
        <div className="footer__nav-item">
          <Link to={Routes.download}>Download</Link>
        </div>
        <div className="footer__nav-item">
          <Link to={Routes.sobre}>Sobre o Servidor</Link>
        </div>
      </div>

      <div className="footer__nav">
        <div className="footer__nav-item">
          <a href={Routes.discord} target="_blank">
            Discord
          </a>
        </div>
        <div className="footer__nav-item">
          <a href={Routes.facebook} target="_blank">
            Facebook
          </a>
        </div>
        <div className="footer__nav-item">
          <a href={Routes.instagram} target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </>
  );
};
