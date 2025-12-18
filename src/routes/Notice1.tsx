import { Link } from "react-router-dom";
import kameda from "../public/kameda.png";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Estreia assombrosa
              da Equipe CÃO e show da Spirit no CBALOL.
            </h2>
            <p className="text-xl p-2">
              Na noite desta quarta-feira, a Equipe CÃO fez sua aguardada
              estreia no <span className="text-cyan-600">CBALOL</span> em
              confronto contra a Spirit Edge.
            </p>
            <p className="text-xl p-2">
              No entanto, o que se viu dentro do servidor foi uma partida
              amplamente dominada pela Spirit, que não deu chances ao adversário
              e confirmou sua{" "}
              <span className="text-cyan-600">primeira vitória</span> na
              competição de forma convincente.
            </p>
            <p className="text-xl p-2">
              Com controle total do mapa desde os minutos iniciais, a Spirit
              Edge impôs seu ritmo de jogo e neutralizou qualquer tentativa de
              reação da Equipe CÃO. O grande{" "}
              <span className="text-yellow-500">destaque</span> da partida foi{" "}
              <span className="text-cyan-600">Kamerayda</span>, que teve uma
              atuação impecável com Sejuani, sendo peça-chave nas lutas em
              equipe e no domínio dos objetivos, conduzindo sua equipe com
              autoridade rumo ao triunfo.
            </p>
            <p className="text-xl p-2">
              Já a Equipe CÃO inicia sua trajetória no campeonato com o pé
              esquerdo e agora terá a missão de ajustar sua estratégia e buscar
              evolução nas próximas rodadas para se manter competitiva ao longo
              do torneio.
            </p>
            <p className="px-2 md:mt-32">
              Continue acompanhando todas as atualizações da janela de
              transferências em{" "}
              <Link className="text-cyan-600" to={"/"}>
                nosso site
              </Link>
              .
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
            <img
              className="rounded-md shadow-xl max-w-full h-auto"
              src={kameda}
              alt="ManosMetralha"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
