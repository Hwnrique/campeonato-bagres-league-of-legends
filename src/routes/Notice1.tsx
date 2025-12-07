import emius from "../public/emius.png";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Las Noches está
              definida!
            </h2>

            <p className="text-xl p-2">
              Após a dissolução da antiga organização DSG, Emerson “MRCasper”
              anunciou a criação de seu novo projeto, a <span className="text-cyan-600">Las Noches</span>, com o
              objetivo de disputar o próximo split do CBLOL.
            </p>

            <p className="text-xl p-2">
              De acordo com fontes próximas ao cenário, a nova line-up deve
              contar com três jogadores que integraram o elenco vice-campeão da
              DSG no último split. Entre os nomes mais cotados estão o TopLaner
              <span className="text-cyan-600"> Adison</span> e o Caçador{" "}
              <span className="text-cyan-600"> Allan</span>, que já estariam em
              negociações avançadas com a organização.
            </p>

            <p className="text-xl p-2">
              Caso os rumores se confirmem, a Las Noches deve entrar na próxima
              temporada com a seguinte formação:
            </p>

            <ul className="p-4">
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Top:
                </span>
                Dragão Econômico
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Jungle:
                </span>
                Sentry
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Mid:
                </span>
                pspspspspspsps
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Adc:
                </span>
                yumekooJ
              </li>
              <li className="text-xl">
                <span className="text-cyan-600 text-xl font-bold p-2">
                  Suporte:
                </span>
                mrcasper
              </li>
            </ul>

            <p className="px-2">
              Continue acompanhando todas as atualizações da janela de
              transferências em{" "}
              <a className="text-cyan-600" href="/">
                nosso site
              </a>
              .
            </p>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-start px-4">
            <img
              className="rounded-md shadow-xl max-w-full h-auto"
              src={emius}
              alt="MrCasper"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
