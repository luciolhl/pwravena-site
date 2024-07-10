import sobre from "../../assets/images/SobreSV.png";
import sep_bg from "../../assets/images/sep_bg.png";

const Sobre = () => {
  return (
    <div>
      <section className="main-content">
        <section className="inner-page">
          <div className="content-area">
            <div className="inner-page__content">
              <div className="inner-page__title">
                <p>SOBRE O SERVIDOR</p>
                <img src={sobre} alt />
                <span>
                  3 Raças - 6 Classes - Lv. Máximo 105 - Equipamentos Mold e
                  Dusk
                </span>
                <p>Inicie nível 70, cultivo nirvana e skills upadas</p>
              </div>
              <div className="htc-block htc-1">
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-step flex-cc">Rate</div>
                  <div className="htc-block__title-text">Rate do Servidor</div>
                </div>
                <div className="htc-block__sep flex-cc">
                  <img src={sep_bg} alt />
                </div>
                <div className="htc-block__text text-box">
                  <div className="sobre-box-items">
                    <div className="htc-block__system-box-title">
                      RATE: Média alta
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Experiência:</span> 15x;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Alma:</span> 15x;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Item:</span> 5x;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Moedas:</span> 5x;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Quest Exp:</span> 10x;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Quest Alma:</span> 10x;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Quest Moedas:</span> 5x;
                    </div>
                  </div>
                </div>
              </div>
              <div className="htc-block htc-2">
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-step flex-cc">Set</div>
                  <div className="htc-block__title-text">Sets do Servidor</div>
                </div>
                <div className="htc-block__sep flex-cc">
                  <img src={sep_bg} alt />
                </div>
                <div className="htc-block__text text-box">
                  <div style={{ color: "purple", fontWeight: "700" }}>
                    <p>SET NPC</p>
                    <p>SET 3 ESTRELAS</p>
                    <p>SET DUSK</p>
                    <p>SET MOLD</p>
                  </div>
                </div>
              </div>
              <div className="htc-block htc-3">
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-step flex-cc">Farms</div>
                  <div className="htc-block__title-text">
                    Farms Valê da Fênix
                  </div>
                </div>
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-text">
                    Farms Valê Primordial
                  </div>
                </div>
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-text">Frost</div>
                </div>
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-text">DG 39</div>
                </div>
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-text">Diárias</div>
                </div>
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-text">Pedra Doida</div>
                </div>
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-text">Volta ao Mundo</div>
                </div>
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-text">
                    Eventos: De Segunda a Sexta - 10:00 e 20:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Sobre;
