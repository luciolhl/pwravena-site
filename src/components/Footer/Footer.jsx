import React from "react";
import footer_logo from "../../assets/images/footer_logo.png";
import { FooterNav } from "../FooterNav/FooterNav";
import { Routes } from "../../utils/Routes";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-area flex-sbs">
        <div className="footer__cpr flex-ss">
          <div className="footer__cpr-logo flex-cc">
            <img src={footer_logo} alt />
          </div>
          <div className="footer__cpr-info">
            <div className="footer__cpr-title">
              <a href={Routes.home}>
                Perfect World Vintage Clássico © {new Date().getFullYear()}
              </a>
            </div>
            <div className="footer__cpr-text">
              <p>
                O jogo gratuito "Perfect World" não requer assinatura. O cliente
                do jogo pode ser baixado gratuitamente em nosso site. O jogo
                baixado também pode ser transferido gratuitamente para outras
                pessoas usuários ou instalar em clubes de informática.
              </p>
              <p>
                O servidor é um servidor privado e foi criado para você se
                familiarizar com o jogo "Perfect World" e se divertir no PW
                Vintage, todos os direitos pertencem aos detentores dos direitos
                autorais.
              </p>
              <p>
                Serviço de suporte:
                <a href={Routes.discord} target="_blank">
                  <font color="#67645d">
                    <span
                      className="__cf_email__"
                      data-cfemail="3744424747584543775a5a58545b5644445e5419595243"
                    >
                      Discord
                    </span>
                  </font>
                </a>
              </p>
            </div>
          </div>
        </div>
        <FooterNav />
      </div>
    </footer>
  );
};
