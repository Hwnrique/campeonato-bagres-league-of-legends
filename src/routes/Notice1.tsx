import { Link } from "react-router-dom";
import brasil94off from "../public/brasil94off.png"

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-red-400">[URGENTE]:</span> B94 ENFRENTA
              CRISE INTERNA E ENCERRA ATIVIDADES
            </h2>
            <p className="text-xl p-2">
              De última hora, a equipe Brasil 94 (B94), formada por ADC de
              Aluguel, Cartman, Raltzx, BTPXMatheusX e BladeBlack04, não
              disputará mais o próximo split do{" "}
              <span className="text-cyan-400">CBLOL</span>.
            </p>
            <p className="text-xl p-2">
              Segundo fontes próximas à organização, o time enfrentou uma{" "}
              <span className="text-cyan-400">grave</span>{" "}
              falha de comunicação durante o processo de contratação de novos
              jogadores — atletas que, por questões internas, acabaram não
              participando do restante da competição.
            </p>
            <p className="text-xl p-2">
              Com o colapso da line-up e o fim imediato das operações, Matheus e
              Libni, fundadores do projeto, agora estão oficialmente sem equipe
              para o segundo split e buscam caminhos para o futuro no cenário
              competitivo.
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
              src={brasil94off}
              alt="MrCasper"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
