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
                Programa de referência
              </a>
            </div>
            <div className="home-articles__item-text">
              Convide seus amigos e conhecidos para jogar em PW Ravena e ganhem
              bônus.
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
                Programa de Streams
              </a>
            </div>
            <div className="home-articles__item-text">
              Gravar vídeos ou transmitir ao vivo? Participe do nosso Programa
              de Parcerias.
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
                Sistema de reembolso
              </a>
            </div>
            <div className="home-articles__item-text">
              O sistema de cashback foi projetado para incentivar ativos
              jogadores do projeto. Descrição detalhada dos bônus para
              participantes dos Programas de Indicação e Afiliados está
              estabelecido em tópicos relevantes, este tópico conterá uma
              descrição reembolso para guildas.
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
