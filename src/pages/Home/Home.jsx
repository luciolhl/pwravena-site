import { Header } from "../../components/Header/Header";
import Slide from "../../components/Slide";
import Article from "../../components/Article";
import SideBar from "../../components/SideBar";
import WidgetDiscord from "../../components/WidgetDiscord";
import { SideBarDownload } from "../../components/SideBarDownload/SideBarDownload";

const Home = () => {
  return (
    <div>
      <section className="main-content">
        <div className="content-area flex-sbs">
          <main className="main">
            <Slide />
            <Article />
            <div
              style={{
                textAalign: "center",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "16px",
                backgroundColor: "antiquewhite",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Bem-vindo ao PW Ravena: O Novo Horizonte de Perfect World!
              </span>
              <p>
                Você já se imaginou mergulhando em um mundo de aventuras, onde a
                igualdade e a justiça reinam supremas? Prepare-se para uma
                experiência única, onde a verdadeira essência do jogo é
                resgatada e valorizada. Bem-vindo ao nosso servidor de Perfect
                World na versão 1.5.5@1.3.6, onde a jornada épica aguarda por
                você!
              </p>
              <span style={{ fontWeight: "bold" }}>
                Um Novo Começo, Uma Nova Abordagem
              </span>
              <p>
                No PW Ravena, acreditamos que todos os jogadores merecem uma
                chance justa e igual de prosperar. Nosso compromisso é oferecer
                uma experiência de jogo imersiva e envolvente, sem as barreiras
                injustas impostas por sistemas pay-to-win. Aqui, não importa se
                você é um veterano de longa data ou um novato curioso - todos
                têm a mesma oportunidade de se destacar e alcançar a grandeza.
              </p>
              <span style={{ fontWeight: "bold" }}>
                A Essência da Igualdade
              </span>
              <p>
                Diferentemente de outros servidores, onde a busca pelo lucro
                muitas vezes eclipsa a diversão do jogo, no PW Ravena,
                acreditamos em uma gestão transparente e voltada para a
                comunidade. Nossa equipe dedicada está comprometida em criar um
                ambiente onde a justiça prevaleça e onde cada jogador seja
                valorizado pelo seu esforço e dedicação.
              </p>
              <span style={{ fontWeight: "bold" }}>Aventuras Sem Limites</span>
              <p>
                Prepare-se para explorar um vasto mundo repleto de desafios
                emocionantes e recompensas tentadoras. Desde batalhas épicas
                contra criaturas lendárias até a busca por tesouros perdidos, há
                sempre algo emocionante esperando por você no PW Ravena. Com uma
                comunidade vibrante e acolhedora ao seu lado, cada jornada se
                torna ainda mais memorável.
              </p>
              <span style={{ fontWeight: "bold" }}>
                Igualdade de Oportunidades
              </span>
              <p>
                No PW Ravena, acreditamos que o verdadeiro poder reside na
                habilidade e na determinação de cada jogador. É por isso que
                todos os itens e recompensas do jogo podem ser obtidos tanto
                através do trabalho árduo e dedicação, quanto através de
                doações. Não importa qual caminho você escolha, o importante é
                que você tenha a liberdade de definir seu próprio destino.
              </p>
              <span style={{ fontWeight: "bold" }}>Junte-se a Nós</span>
              <p>
                Está pronto para embarcar em uma jornada verdadeiramente épica?
                Venha se juntar a nós no PW Ravena, onde a igualdade, a justiça
                e a diversão são mais do que apenas palavras - são os pilares
                que sustentam nossa comunidade. Não perca tempo, o mundo espera
                por heróis como você!
              </p>
              <span style={{ fontWeight: "bold" }}>Conclusão</span>
              <p>
                No PW Ravena, não se trata apenas de jogar um jogo, mas sim de
                fazer parte de uma comunidade vibrante e acolhedora, onde todos
                têm a oportunidade de brilhar. Não importa quem você é ou de
                onde vem, aqui, você sempre será valorizado pelo seu talento e
                esforço. Então, o que você está esperando? Junte-se a nós hoje e
                embarque na aventura de uma vida!
              </p>
            </div>
          </main>

          <aside className="aside flex-sbs">
            <SideBar />
            <SideBarDownload />
            <WidgetDiscord />
          </aside>

          <aside className="aside flex-sbs"></aside>
        </div>
      </section>
    </div>
  );
};

export default Home;
