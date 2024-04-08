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
                  Lançamento Beta 27/10/2023 19:00 Horas.
                </div>
                <div className="slider__content-text">
                  Periodo Beta de 10 dias valendo prêmios na inauguração
                  oficial. Confira as regras e detalhes no Discord
                </div>
                <Link
                  to="https://discord.gg/h6mT4SWBab"
                  className="slider__content-button flex-cc"
                  target="_blank"
                  onClick={() => {
                    window.fbq(
                      "trackSingle",
                      "1523431241831780",
                      "Discord Slide 1"
                    );
                    window.fbq(
                      "trackSingle",
                      "378152504756865",
                      "Discord Slide 1"
                    );
                  }}
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
                  to="https://discord.gg/h6mT4SWBab"
                  className="slider__content-button flex-cc"
                  target="_blank"
                  onClick={() => {
                    window.fbq(
                      "trackSingle",
                      "1523431241831780",
                      "Discord Slide 2"
                    );
                    window.fbq(
                      "trackSingle",
                      "378152504756865",
                      "Discord Slide 2"
                    );
                  }}
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
