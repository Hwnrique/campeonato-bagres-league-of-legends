import { Link } from "react-router-dom";
import spiritLogo from "../public/spiritNotice.jpeg";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Spirit Edge fecha
              elenco para o próximo torneio do CBALOL
            </h2>
            <p className="text-xl p-2">
              Fontes próximas à organização confirmaram que, nas últimas horas,
              a Spirit Edge finalizou sua janela de transferências e definiu
              oficialmente sua line-up para o próximo split do{" "}
              <span className="text-cyan-600">CBALOL</span>.
            </p>
            <p className="text-xl p-2">
              A escalação que disputará o campeonato é a seguinte:
            </p>
            <ul className="p-4">
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Top:
                </span>
                Rua 6
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Jungle:
                </span>
                Kamerayda
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Mid:
                </span>
                Saburu
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Adc:
                </span>
                Raives
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Suporte:
                </span>
                Belador
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Reserva:
                </span>
                Power
              </li>
            </ul>
            <p className="text-xl p-2">
              Além dos cinco titulares, a equipe contará com o reserva Power —
              reforçando o elenco para a competição.
            </p>
            <p className="text-xl p-2">
              Com a definição do elenco, a <span className="text-cyan-600">Spirit Edge</span> demonstra que chega com
              tudo para o próximo split do <span className="text-cyan-600">CBALOL</span>, apostando em uma formação que
              mistura experiência e estratégia. A expectativa agora é acompanhar
              o desempenho da equipe nas próximas etapas, à medida que a
              temporada se aproxima.
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
              src={spiritLogo}
              alt="MrCasper"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
