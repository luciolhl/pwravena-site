import React, { useEffect, useState } from "react";
import sep_bg from "../../assets/images/sep_bg.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import api from "../../services/api";

export const Header = () => {
  const [statusServer, setStatusServer] = useState("");
  const [qtdAccounts, setQtdAccounts] = useState();
  const [qtdOnline, setQtdOnline] = useState();

  useEffect(() => {
    api
      .get("/api_users.php")
      .then((response) => {
        setStatusServer(response.data.status);
        setQtdAccounts(response.data.totalContas);
        setQtdOnline(response.data.online);
      })
      .catch(() => {
        setStatusServer("Offline");
        setQtdAccounts(0);
        setQtdOnline(0);
      });
  }, []);
  return (
    <>
      <div className="header-bg">
        <div className="header-bg__leaf"></div>
        <div className="header-bg__navigation content-area"></div>
        <div className="header-bg__character middle"></div>
        <div className="header-bg__character left"></div>
        <div className="header-bg__character right"></div>

        <div className="header-bg__smokes">
          <div className="header-bg__smoke smoke_1"></div>
          <div className="header-bg__smoke smoke_2"></div>
          <div className="header-bg__smoke smoke_3"></div>
          <div className="header-bg__smoke smoke_4"></div>
        </div>

        <div className="header-bg__sparks left">
          <div className="header-bg__sparks-spark-1"></div>
          <div className="header-bg__sparks-spark-2"></div>
          <div className="header-bg__sparks-spark-3"></div>
          <div className="header-bg__sparks-spark-4"></div>
        </div>

        <div className="header-bg__sparks right">
          <div className="header-bg__sparks-spark-1"></div>
          <div className="header-bg__sparks-spark-2"></div>
          <div className="header-bg__sparks-spark-3"></div>
          <div className="header-bg__sparks-spark-4"></div>
        </div>
      </div>

      <nav className="nav">
        <div className="content-area flex-sc">
          <div className="nav__open-links">
            <div className="nav__open-links-item"></div>
          </div>

          <div className="nav__links flex-sbc">
            <div className="nav__links-group flex-sc">
              <div className="nav__links-item">
                <a href="/">Início</a>
              </div>
              <div className="nav__links-item">
                <Link to="/sobre">Sobre Servidor</Link>
              </div>
              <div className="nav__links-item">
                <Link to="#">Download</Link>
              </div>
            </div>
            <div className="nav__links-group flex-sc">
              <div className="nav__links-item">
                <Link to="#">Ranking</Link>
              </div>
              <div className="nav__links-item">
                <a href="https://discord.gg/5YrsstYbq5" target="_blank">
                  Discord
                </a>
              </div>
              <div className="nav__links-item">
                <a href="#" target="_blank">
                  Painel Jogador
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="content-area flex-ss">
          <div className="header__col flex-cc">
            <a
              href="https://pwvintage.iwebgm.com.br/cadastro"
              className="header__logo"
              target="_blank"
            >
              <img src={logo} alt="PW Vintage" />
            </a>
            {/* <div className="header__accounts">
              Contas criadas:{" "}
              {qtdAccounts < 1 ? (
                <span>Em Breve</span>
              ) : (
                <span>{qtdAccounts}</span>
              )}
            </div>
            <div className="header__sep flex-cc">
              <img src={sep_bg} alt />
            </div> */}
            {/* <div className="header__online">
              Jogadores on-line:{" "}
              {qtdOnline < 2 ? (
                <span>Em Breve</span>
              ) : (
                <span>{qtdOnline}</span>
              )}
            </div> */}
            <div className="header__sep flex-cc">
              <img src={sep_bg} alt />
            </div>
            <div className="header_status_server">
              Status Servidor: <span style={{ color: "red" }}>Em Breve</span>
              {/* {statusServer == "Online" ? (
                <span style={{ color: "green" }}>Online</span>
              ) : (
                <span style={{ color: "red" }}>Offline</span>
              )} */}
            </div>
            <a href="#" className="header__button flex-cc" target="_blank">
              <span>CADASTRAR</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
