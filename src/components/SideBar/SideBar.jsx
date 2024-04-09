import { Routes } from "../../utils/Routes";

export const SideBar = () => {
  return (
    <div className="promo flex-ss">
      <div className="promo__title">
        <span>FAZER DONATE</span>
      </div>
      <div className="promo__text">
        Contribua para o crescimento do servidor fazendo sua doação. Em troca
        receberá gold para compra de itens incríveis.
      </div>
      <a href={Routes.donate} className="promo__button flex-cc" target="_blank">
        <span>Fazer Agora</span>
      </a>
    </div>
  );
};
