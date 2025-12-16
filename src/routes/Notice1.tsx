import { Link } from "react-router-dom";
import feliciaoff from "../public/feliciaoff.png";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Felícia não seguirá
              mais no CBLOL.
            </h2>
            <p className="text-xl p-2">
              Com duas <span className="text-cyan-600">vitórias</span> no
              campeonato e uma performance incrível em ambas as partidas,
              yumekooJ (Felícia) não seguirá mais no campeonato e se despede
              também do seu time:{" "}
              <span className="text-cyan-600">Las Noches</span>.
            </p>
            <p className="text-xl p-2">
              A jogadora não divulgou mais informações sobre sua saída, como
              também não divulgou uma possível volta ou mudança de time. Segundo
              fontes sua motivação é considerada um mistério.
            </p>
            <p className="text-xl p-2">
              A organização demonstra <span className="text-cyan-600">agradecimento</span> e apoio em uma possível volta, a jogadora sai muito aplaudida.
            </p>
            <p className="text-xl p-2">
              Mais informações sobre serão divulgadas futuramente.
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
              src={feliciaoff}
              alt="ManosMetralha"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
