import sep_bg from "../../assets/images/sep_bg.png";
import btn_download_light_icon from "../../assets/images/btn_download_light_icon.png";

const Download = () => {
  return (
    <div>
      <section className="main-content">
        <section className="inner-page">
          <div className="content-area">
            <div className="inner-page__content">
              <div className="inner-page__title">
                COMO INICIAR O JOGO?
                <span>
                  Um guia detalhado de 3 etapas para um início bem-sucedido.
                </span>
              </div>
              <div className="htc-block htc-1">
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-step flex-cc">PASSO 1</div>
                  <div className="htc-block__title-text">REGISTRO DE CONTA</div>
                </div>
                <div className="htc-block__sep flex-cc">
                  <img src={sep_bg} alt />
                </div>
                <div className="htc-block__text text-box">
                  Para entrar no jogo você precisa registrar uma conta no jogo.
                </div>
                <a
                  href="#"
                  className="light-button red flex-cc create-account"
                  target="_blank"
                >
                  <span>CRIE SUA CONTA AQUI</span>
                </a>
              </div>
              <div className="htc-block htc-2" id="download">
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-step flex-cc">PASSO 2</div>
                  <div className="htc-block__title-text">BAIXANDO O JOGO</div>
                </div>
                <div className="htc-block__sep flex-cc">
                  <img src={sep_bg} alt />
                </div>
                <div className="htc-block__text text-box">
                  Baixe o cliente do jogo de um dos links do Google Driver.
                </div>
                <div className="htc-block__buttons flex-cc">
                  <a
                    href="https://drive.google.com/file/d/10F0CtLPpUvlQCxHHGTAqerp0kICIMPyD/view?usp=sharing"
                    className="light-button blue flex-cc"
                    target="_blank"
                  >
                    <img src={btn_download_light_icon} alt />
                    <span>GOOGLE DRIVE 1</span>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1zi1UY9zMSSrzoD8GR7vfCeaW_VBb2qqb/view?usp=sharing"
                    className="light-button blue flex-cc"
                    target="_blank"
                  >
                    <img src={btn_download_light_icon} alt />
                    <span>GOOGLE DRIVE 2</span>
                  </a>
                </div>
                <div className="htc-block__sep flex-cc">
                  <img src={sep_bg} alt />
                </div>
                <div className="htc-block__system flex-sbs">
                  <div className="htc-block__system-title">
                    REQUISITOS DE SISTEMA:
                  </div>
                  <div className="htc-block__system-box">
                    <div className="htc-block__system-box-title">MÍNIMO:</div>
                    <div className="htc-block__system-box-line">
                      <span>Sistema operacional:</span> Windows XP;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Processador:</span> 1 GHz;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>RAM:</span> 1 GB;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Placa de vídeo:</span> 128 Mb;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Disco rígido:</span> 10 GB;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Internet:</span> 64 Kbps.
                    </div>
                  </div>
                  <div className="htc-block__system-box">
                    <div className="htc-block__system-box-title">
                      RECOMENDADO:
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Sistema operacional:</span> Windows 7;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Processador:</span> 2.5 GHz;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>RAM:</span> 2 GB;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Placa de vídeo:</span> 256 Mb;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Disco rígido:</span> 10 GB;
                    </div>
                    <div className="htc-block__system-box-line">
                      <span>Internet:</span> 256 Kbps.
                    </div>
                  </div>
                </div>
              </div>
              <div className="htc-block htc-3">
                <div className="htc-block__title flex-cc">
                  <div className="htc-block__title-step flex-cc">PASSO 3</div>
                  <div className="htc-block__title-text">
                    VERIFICANDO OS DRIVERS
                  </div>
                </div>
                <div className="htc-block__sep flex-cc">
                  <img src={sep_bg} alt />
                </div>
                <div className="htc-block__text text-box">
                  Para que o cliente do jogo funcione corretamente, pode ser que
                  seja necessário instalar a placa de vídeo e os drivers DirectX
                  mais recentes devem estar instalados em seu computador.
                </div>
                <div className="htc-block__buttons flex-cc">
                  <a
                    href="https://www.nvidia.com/"
                    className="light-button green flex-cc"
                  >
                    <span>NVIDIA GEFORCE</span>
                  </a>
                  <a
                    href="https://www.microsoft.com/"
                    className="light-button blue flex-cc"
                  >
                    <span>DIRECTX</span>
                  </a>
                  <a
                    href="https://www.amd.com/"
                    className="light-button red flex-cc"
                  >
                    <span>AMD RADEON</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Download;
