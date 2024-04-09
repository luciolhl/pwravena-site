import { Link } from "react-router-dom";
import { Routes } from "../../utils/Routes";

export const SideBarDownload = () => {
  return (
    <div className="promo flex-ss">
      <div className="promo__title">
        <span>Download</span>
      </div>
      <div className="promo__text">Faça Download do Game e venha curtir.</div>
      <Link to={Routes.download} className="promo__button flex-cc">
        <span>Baixar Agora</span>
      </Link>
    </div>
  );
};
