import madeira from "../public/maokai.jpg";
import { Link } from "react-router-dom";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Maderation Free
              Agent
            </h2>
            <p className="text-xl p-2">
              O suporte Maderation (Nicolas) está oficialmente free agent e
              busca uma nova equipe para disputar o próximo split do <span className="text-cyan-600">CBLOL</span>.
            </p>
            <p className="text-xl p-2">
              O jogador, que ficou de fora da primeira edição do torneio neste
              ano, agora demonstra forte interesse em retornar ao cenário
              competitivo e avalia positivamente sua participação na próxima
              temporada.
            </p>
            <p className="px-2">
              Continue acompanhando todas as atualizações da janela de
              transferências em{" "}
              <Link className="text-cyan-600" to={"/"}>nosso site</Link>
            </p>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-start px-4">
            <img
              className="rounded-md shadow-xl max-w-full h-auto"
              src={madeira}
              alt="Maderation"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
