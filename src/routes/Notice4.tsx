import copa94 from "../public/copa94.png";
import { Link } from "react-router-dom";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Matheus e Libni
              anunciam criação do "Brasil94"
            </h2>
            <p className="text-xl p-2">
              Com rumores envolvendo a formação de uma nova equipe depois da
              dissolução da DSG, Matheus e Libni oficializaram o lançamento de
              seu mais novo projeto: Brasil 94, organização que já se prepara
              para disputar o próximo split do{" "}
              <span className="text-cyan-600">CBLOL</span>.
            </p>
            <p className="text-xl p-2">
              A equipe confirmou que sua line-up titular já está definida:
            </p>

            <ul className="p-4">
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Top:
                </span>
                ADC de Aluguel
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Jungle:
                </span>
                Cartman
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Mid:
                </span>
                Raltzx
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Adc:
                </span>
                BTPXMatheusX
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Suporte:
                </span>
                BladeBlack04
              </li>
            </ul>
            <p className="text-xl p-2 mb-8">
              Além dos jogadores, o Brasil 94 contará também com o experiente
              coach Luskão, responsável por liderar o time em busca do seu
              principal objetivo: <span className="text-cyan-600">conquistar o troféu</span>.
            </p>
            <p className="px-2">
              Continue acompanhando todas as atualizações da janela de
              transferências em{" "}
              <Link className="text-cyan-600" to={"/"}>
                nosso site
              </Link>
            </p>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-start px-4">
            <img
              className="rounded-md shadow-xl max-w-full h-auto"
              src={copa94}
              alt="Copa94"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
