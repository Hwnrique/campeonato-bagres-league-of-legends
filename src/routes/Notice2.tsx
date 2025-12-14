import { Link } from "react-router-dom";
import copa64 from "../public/copa64.png";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Matheus e Libni
              estão de volta ao campeonato!
            </h2>
            <p className="text-xl p-2">
              Após o encerramento da antiga organização Brasil 94, Matheus e
              Libni estão oficialmente de volta ao competitivo. A dupla
              confirmou sua entrada na equipe{" "}
              <span className="text-cyan-600">Manos Metralha</span>, que
              disputará o próximo split do{" "}
              <span className="text-cyan-600">CBALOL</span>.
            </p>
            <p className="text-xl p-2">
              Além deles, a line-up deve ser composta pelo top laner Heitor,
              pelo mid laner Gabis e pelo suporte João Vitor, formando um elenco
              que promete atrair <span className="text-cyan-600">atenção</span>{" "}
              nos bastidores do cenário.
            </p>
            <p className="text-xl p-2">
              A organização demonstra grande expectativa para a temporada e
              afirma estar focada em disputar o{" "}
              <span className="text-cyan-600">título</span> do campeonato.
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
              src={copa64}
              alt="ManosMetralha"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
