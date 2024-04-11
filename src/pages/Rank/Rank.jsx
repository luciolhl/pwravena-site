import sep_bg from "../../assets/images/sep_bg.png";
import barbaro from "../../assets/classes/Barbaro.png";
import feiticeira from "../../assets/classes/Feiticeira.png";
import guerreiro from "../../assets/classes/Guerreiro.png";
import mago from "../../assets/classes/Mago.png";
import arqueiro from "../../assets/classes/Arqueiro.png";
import sacerdote from "../../assets/classes/Sacerdote.png";
import { useEffect, useState } from "react";
import apiRanking from "../../services/apiRanking";

const Rank = () => {
  const [dataRanking, setDataRanking] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiRanking
      .get("?function=get-full-ranking")
      .then((response) => {
        setDataRanking(response.data.retorno);
        setIsLoading(false);
      })
      .catch(() => {
        setDataRanking({});
      });
  }, []);

  const imagemClasse = (classe) => {
    switch (classe) {
      case "Guerreiro":
        return guerreiro;
      case "Mago":
        return mago;
      case "Feiticeira":
        return feiticeira;
      case "Barbaro":
        return barbaro;
      case "Arqueiro":
        return arqueiro;
      case "Sacerdote":
        return sacerdote;
      default:
        return "foo";
    }
  };

  return (
    <div>
      <section className="main-content">
        <section className="inner-page">
          <div className="content-area">
            <div className="inner-page__content">
              <div class="table-responsive">
                {isLoading ? (
                  <a>Carregando...</a>
                ) : (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>KD</th>
                        <th>Nick</th>
                        <th>Classe</th>
                        <th>Level</th>
                        <th>Clã</th>
                        <th>Matou</th>
                        <th>Morreu</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataRanking
                        ? dataRanking.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td scope="row">{index + 1}</td>
                                <td>{item.KD}</td>
                                <td>{item.nome}</td>
                                <td>
                                  <img src={imagemClasse(item.classe)} />
                                </td>
                                <td>{item.level}</td>
                                <td>{item.cla}</td>
                                <td>{item.qtdMatou}</td>
                                <td>{item.qtdMorreu}</td>
                              </tr>
                            );
                          })
                        : ""}

                      <tr></tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Rank;
