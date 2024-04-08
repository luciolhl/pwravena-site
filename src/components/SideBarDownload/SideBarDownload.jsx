import { Link } from "react-router-dom";

export const SideBarDownload = () => {
  return (
    <div className="promo flex-ss">
      <div className="promo__title">
        <span>Download</span>
      </div>
      <div className="promo__text">Faça Download do Game e venha curtir.</div>
      <Link to="/download" className="promo__button flex-cc">
        <span>Baixar Agora</span>
      </Link>
    </div>
  );
};
