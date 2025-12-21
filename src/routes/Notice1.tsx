import { Link } from "react-router-dom";
import bbcwin from "../public/BBCWIN.png";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> BBC vence a Spirit
              Edge no CBALOL
            </h2>
            <p className="text-xl p-2">
              Na última semana, mais um confronto movimentou o{" "}
              <span className="text-cyan-600">CBALOL</span>. Em partida válida
              pela rodada, a Black Belt Clan (BBC) enfrentou a Spirit Edge e
              mostrou ampla <span className="text-cyan-600">superioridade</span>{" "}
              do início ao fim, dominando completamente o jogo e garantindo uma
              vitória convincente.
            </p>
            <p className="text-xl p-2">
              O grande destaque da partida foi o mid laner BetterZoe, que teve
              uma atuação de alto nível com sua Syndra, sendo decisivo nas lutas
              e conduzindo a BBC ao triunfo. Pelo desempenho consistente e
              impacto direto no resultado, o jogador foi eleito o{" "}
              <span className="text-yellow-500">MVP</span> da partida.
            </p>
            <p className="text-xl p-2">
              Com o resultado, a Black Belt Clan segue demonstrando força na
              competição e se consolida como uma das equipes mais sólidas do
              campeonato.
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
              src={bbcwin}
              alt="BBC"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
