import { Link } from "react-router-dom";
import bbcnotice from "../public/bbcnotice.jpeg";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Black Belt Clan
              Entra na Disputa pelo Próximo CBALOL
            </h2>
            <p className="text-xl p-2">
              A movimentação nos bastidores do competitivo brasileiro de League
              of Legends segue intensa. Nos últimos dias, mais uma organização
              manifestou interesse em integrar o{" "}
              <span className="text-cyan-600">CBALOL</span>: a Black Belt Clan,
              fundada por Enzo “Magalhães”.
            </p>
            <p className="text-xl p-2">
              A equipe, que já estruturou sua line-up para o próximo{" "}
              <span className="text-cyan-600">split</span>, chega com ambição e
              promete disputar espaço entre as grandes forças do campeonato.
            </p>
            <p className="text-xl p-2">Line-up titular da Black Belt Clan:</p>
            <ul className="p-4">
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Top:
                </span>
                king of belts
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Jungle:
                </span>
                BetterKindred
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Mid:
                </span>
                BetterZoe
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Adc:
                </span>
                Magalhães
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Suporte:
                </span>
                Helsoak
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Reserva:
                </span>
                Pascal is Tasty
              </li>
            </ul>
            <p className="text-xl p-2">
              Além dos cinco titulares, o elenco contará ainda com o jogador
              reserva Pascal is Tasty, reforçando a profundidade do time para o
              decorrer da <span className="text-cyan-600">temporada</span>.
            </p>
            <p className="text-xl p-2">
              Com um projeto recém-anunciado, mas cheio de confiança, a Black
              Belt Clan mira alto e se prepara para buscar seu primeiro título
              de <span className="text-cyan-600">CBALOL</span> já no próximo split.
            </p>
            <p className="px-2">
              Continue acompanhando todas as atualizações da janela de
              transferências em{" "}
              <Link className="text-cyan-600" to={"/"}>
                nosso site
              </Link>
              .
            </p>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-start px-4">
            <img
              className="rounded-md shadow-xl max-w-full h-auto"
              src={bbcnotice}
              alt="MrCasper"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
