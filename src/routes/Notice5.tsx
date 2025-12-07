import marlos from "../public/marlos.png";
import { Link } from "react-router-dom";

const Notice1 = () => {
  return (
    <>
      <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> É do CÃO!
            </h2>
            <p className="text-xl p-2">
              O Midlaner "Raruh" é o novo reforço da Equipe CÃO para o{" "}
              <span className="text-cyan-600">CBLOL 2026.</span>
            </p>
            <p className="text-xl p-2">
              Apesar de não ter conquistado bons resultados em sua última
              campanha a equipe exnerga o jovem com bons olhos e acredita que o
              MidLaner chegará pra agregar no campeonato.
            </p>
            <p className="text-xl p-2">
              Após o fim da última edição do{" "}
              <span className="text-cyan-600">CBLOL</span> a equipe{" "}
              <span className="text-cyan-600">CAO</span> acabou sofrendo alguns
              desfalques, por isso a adição de Raruh é vista com ótimos olhos
              pelos torcedores do Campeão.
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
              src={marlos}
              alt="Marlso"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Notice1;
