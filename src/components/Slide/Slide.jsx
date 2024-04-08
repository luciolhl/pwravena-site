import { Link } from "react-router-dom";
import one from "../../assets/images/1.jpg";
import two from "../../assets/images/2.jpg";

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
                  Lançamento entre Julho/Agosto
                </div>
                <div className="slider__content-text">
                  Contribuia com o servidor dando sua sugestão. Acesse o
                  discord.
                </div>
                <Link
                  to="https://discord.gg/5YrsstYbq5"
                  className="slider__content-button flex-cc"
                  target="_blank"
                >
                  Acessar Discord
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
                  to="https://discord.gg/5YrsstYbq5"
                  className="slider__content-button flex-cc"
                  target="_blank"
                >
                  Acessar Discord
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
