import { Link } from "react-router-dom";
import one from "../../assets/images/1.jpg";
import two from "../../assets/images/2.jpg";
import { Routes } from "../../utils/Routes";

export const Slide = () => {
  return (
    <div className="slider">
      <div className="swiper big-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider__content">
              <img src={one} alt />
              <div className="slider__content-info">
                <div className="slider__content-title">
                  Cadastre Baixe Agora
                </div>
                <div className="slider__content-text">
                  Nosso servidor esta online, não perca tempo e venha participar
                  da Nostalgia com uma Rate Baixa. Participe da nossa comunidade
                  no Discord e fique por dentro.
                </div>
                <Link
                  to={Routes.discord}
                  className="slider__content-button flex-cc"
                  target="_blank"
                >
                  ACESSAR DISCORD
                </Link>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slider__content">
              <img src={two} alt />
              <div className="slider__content-info">
                <div className="slider__content-title">Nosso Discord</div>
                <div className="slider__content-text">
                  Participe do Discord! Lá você pode conferir tópicos completos
                  sobre o servidor, novidades, melhorias, interagir com players,
                  e muito mais. Acesse Agora!
                </div>
                <Link
                  to={Routes.discord}
                  className="slider__content-button flex-cc"
                  target="_blank"
                >
                  ACESSAR DISCORD
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__navigation flex-sc">
          <div className="swiper-button-prev big-slider-prev"></div>
          <div className="swiper-pagination flex-cc big-slider-pagination"></div>
          <div className="swiper-button-next big-slider-next"></div>
        </div>
      </div>
    </div>
  );
};
