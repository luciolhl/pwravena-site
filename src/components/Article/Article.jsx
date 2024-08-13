import news_1 from "../../assets/images/news_1.jpg";
import news_2 from "../../assets/images/news_2.jpg";
import news_3 from "../../assets/images/news_3.jpg";
import { Routes } from "../../utils/Routes";

export const Article = () => {
  return (
    <div className="home-articles">
      <div className="home-articles__items flex-ss">
        <article className="home-articles__item">
          <img src={news_1} alt className="home-articles__item-img" />
          <div className="home-articles__item-content">
            <div className="home-articles__item-title">
              <a href={Routes.discord} target="_blank">
                Diárias partir Nv.20
              </a>
            </div>
            <div className="home-articles__item-text">
              Na CDD Oeste você encontrar um NPC para cumprir suas missões
              diárias e ajudar no seu UP.
            </div>
            <a
              href={Routes.discord}
              className="home-articles__item-button flex-cc"
              target="_blank"
            >
              <span>MAIS DETALHES</span>
            </a>
          </div>
        </article>
        <article className="home-articles__item">
          <img src={news_2} alt className="home-articles__item-img" />
          <div className="home-articles__item-content">
            <div className="home-articles__item-title">
              <a href={Routes.discord} target="_blank">
                Venha ser um parceiro(a)
              </a>
            </div>
            <div className="home-articles__item-text">
              Sejá um parceiro(a) do servidor ajudando na divulgação e ganhando
              diversas recompensas por isso.
            </div>
            <a
              href={Routes.discord}
              className="home-articles__item-button flex-cc"
              target="_blank"
            >
              <span>MAIS DETALHES</span>
            </a>
          </div>
        </article>
        <article className="home-articles__item">
          <img src={news_3} alt className="home-articles__item-img" />
          <div className="home-articles__item-content">
            <div className="home-articles__item-title">
              <a href={Routes.discord} target="_blank">
                Salário Marechal
              </a>
            </div>
            <div className="home-articles__item-text">
              Confira em nosso Discord as vantagens de trazer o seu clã e ser
              beneficiado por isso.
            </div>
            <a
              href={Routes.discord}
              className="home-articles__item-button flex-cc"
              target="_blank"
            >
              <span>MAIS DETALHES</span>
            </a>
          </div>
        </article>
      </div>
      <a
        href={Routes.discord}
        className="home-articles__more flex-cc"
        target="_blank"
      >
        <span>VEJA TODAS AS NOTÍCIAS</span>
      </a>
    </div>
  );
};
