import { Link } from "react-router-dom";
import lasbbc from "../public/lasbcc1.jpeg";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Las Noches assume a
              liderança; Manos Metralha fecham o dia com 0-2.
            </h2>
            <p className="text-xl p-2">
              O sábado de <span className="text-cyan-600">CBALOL</span> foi
              marcado por dois confrontos decisivos e resultados que já começam
              a desenhar o cenário da competição. No primeiro jogo do dia, a BBC
              encarou os Manos Metralhas e não deu chances ao adversário.
            </p>
            <p className="text-xl p-2">
              Em uma atuação avassaladora, a BBC{" "}
              <span className="text-cyan-600">venceu</span> em sua estreia e
              garantiu o primeiro ponto na tabela. O grande destaque da partida
              foi King of Belts, que conquistou o prêmio de{" "}
              <span className="text-yellow-500">MVP</span> com uma performance
              dominante de Jax.
            </p>
            <p className="text-xl p-2">
              Na segunda partida, os Manos Metralhas voltaram ao Rift para
              enfrentar a equipe da Las Noches, em um confronto que entrou para
              a história do campeonato. A partida caminhava para um atropelo dos
              Manos Metralhas, que chegaram a abrir cerca de{" "}
              <span className="text-cyan-600">8 mil</span> de ouro de vantagem.
            </p>
            <p className="text-xl p-2">
              No entanto, em uma virada impressionante, a Las Noches mostrou
              resiliência, controlou os momentos decisivos do jogo e conseguiu
              reverter o placar, garantindo a{" "}
              <span className="text-cyan-600">vitória</span> com{" "}
              <span className="text-yellow-500">MVP</span> do ADC Dragão
              Econômico .
            </p>
            <p className="text-xl p-2">
              Com os resultados do dia, os Manos Metralhas iniciam o campeonato
              com o pé esquerdo. Além do 0–2 na rodada, a equipe ainda enfrenta{" "}
              <span className="text-cyan-600">problemas</span> internos.
            </p>
            <p className="text-xl p-2">
              Segundo fontes, durante a segunda partida, o top laner In Trancer
              teria se <span className="text-cyan-600">desentendido</span> com
              seus companheiros, se estressado e abandonado a partida em
              andamento, culminando em um{" "}
              <span className="text-red-700">disband</span> na line-up.
            </p>
            <p className="text-xl p-2">
              Já a Las Noches sai <span className="text-cyan-600">fortalecida</span> da rodada, demonstrando poder de
              reação e assumindo protagonismo logo no início do CBALOL.
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
          <div className="w-full md:w-7/12 flex justify-center md:justify-start px-4">
            <img
              className="rounded-md shadow-xl max-w-full h-auto"
              src={lasbbc}
              alt="LasBBC"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
