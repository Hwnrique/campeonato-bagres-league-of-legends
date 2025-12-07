import { Link } from "react-router-dom";
import yago from "../public/yago.png";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Última vaga preenchida!
            </h2>
            <p className="text-xl p-2">
              Depois de muito tempo de espera a última equipe finalmente deu sua
              confirmação para o <span className="text-cyan-600">CBLOL</span>.
            </p>
            <p className="text-xl p-2">
              Spirit Edge chega para completar a lista de times que irão
              disputar a taça do campeonato no segundo split. Junto com a "Las
              Noches" e a "Brasil94",{" "}
              <span className="text-cyan-600">Spirit Edge</span> chega como uma
              equipe nova e promete trazer uma lineup forte para disputar o
              título
            </p>
            <p className="text-xl p-2">
              Mais informações sobre a lineup serão divulgadas em breve!
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
              src={yago}
              alt="MrCasper"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
