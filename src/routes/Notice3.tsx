import copa94 from "../public/copa94.png";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Matheus e Libni
              anunciam novo time
            </h2>
            <p className="text-xl p-2">
              Com os vazamentos que confirmaram o fim da organização DSG, o
              atirador Matheus e o caçador Libni estão muito próximos de
              oficializar a criação de uma nova equipe para disputar o próximo
              split do <span className="text-cyan-600">CBLOL</span>.
            </p>
            <p className="text-xl p-2">
              Segundo apurado, os jogadores enxergam com bons olhos a parceria
              para estruturar o projeto, que já nasce com uma meta ambiciosa:
              montar um elenco competitivo o suficiente para brigar pelo{" "}
              <span className="text-cyan-600">título</span>
              {" "}no próximo split.
            </p>
            <p className="text-xl p-2">
              Mais informações devem ser divulgadas nas próximas semanas,
              conforme avançam as negociações e definição da line-up.
            </p>
            <p className="px-2">
              Continue acompanhando todas as atualizações da janela de
              transferências em{" "}
              <a className="text-cyan-600" href="/">
                nosso site
              </a>
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
