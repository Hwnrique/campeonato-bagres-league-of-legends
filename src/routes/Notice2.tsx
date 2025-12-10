import { Link } from "react-router-dom";
import felicia from "../public/felicia.png";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Show de Felícia e
              discussões internas marcam a abertura do CBALOL.
            </h2>
            <p className="text-xl p-2">
              O dia 09/12 marcou o início oficial do{" "}
              <span className="text-cyan-600">CBALOL</span> com o primeiro
              confronto da temporada. Após um longo atraso na partida entre Las
              Noches e Spirit Edge, o duelo finalmente aconteceu e trouxe
              momentos de tensão, reviravoltas e destaque individual.
            </p>
            <p className="text-xl p-2">
              Mesmo com uma atuação insistente de Raives, ADC da Spirit Edge,
              que tentou conduzir sua equipe rumo à vitória, não foi o
              suficiente. A <span className="text-cyan-600">Las Noches</span>{" "}
              encontrou seu ritmo no mid game, encaixou boas lutas e garantiu o
              triunfo na estreia.
            </p>
            <p className="text-xl p-2">
              Após o término da partida,{" "}
              <span className="text-cyan-600">Felícia</span> (yumekooJ) foi
              eleita <span className="text-yellow-500">MVP</span> da primeira
              disputa do campeonato, coroando sua performance sólida e decisiva.
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
              src={felicia}
              alt="MrCasper"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
