import dsg from "../public/dsg.png";
import { Link } from "react-router-dom";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> DSG está fora do
              CBALOL 2026
            </h2>
            <p className="text-xl p-2">
              A DSG (Desgraça), organização que marcou presença na primeira
              edição do <span className="text-cyan-600">CBALOL</span> e ficou conhecida por alcançar a final de forma
              invicta, não irá participar do próximo campeonato.
            </p>
            <p className="text-xl p-2">
              Segundo fontes consultadas a equipe enfrentou desentendimentos
              internos entre os jogadores, resultando no encerramento das
              atividades do time.
            </p>
            <p className="text-xl p-2">
              Sem a presença da tradicional line-up, a expectativa é de que os
              <span className="text-cyan-400"> vice-campeões</span> — Felicia,
              Libni, Henrique, Matheus e Emerson não disputem juntos a próxima
              edição do campeonato, embora a confirmação oficial ainda não tenha
              sido divulgada.
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
              src={dsg}
              alt="DSG"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
