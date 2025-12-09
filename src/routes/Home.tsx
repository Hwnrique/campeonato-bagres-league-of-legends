import { Link } from "react-router-dom";
import dsg from "../public/dsg.png";
import emius from "../public/emius.png";
import maokai from "../public/maokai.jpeg";
import logo from "../public/logo.png";
import cao from "../public/cao.png";
import notches from "../public/noches.png";
import spirit from "../public/spirit.png";
import spiritNotice from "../public/spiritNotice.jpeg";
import brasil94off from "../public/brasil94off.png";

const Home = () => {
  return (
    <>
      <div className="w-full mt-10 text-center">
        <h1 className="text-white text-5xl">
          Seja <span className="text-cyan-600 font-bold">Bem-vindo</span> ao
          site oficial do
        </h1>
        <img
          className="h-96 w-[500px] mx-auto mt-4 mb-4"
          src={logo}
          alt="logo"
        />
        <h2 className="text-white mt-16 text-3xl">Últimas notícias</h2>
      </div>
      <div className="w-11/12 mx-auto mt-16 rounded-lg h-auto md:h-[400px] flex flex-col md:flex-row justify-center overflow-hidden gap-2">
        <Link
          to="/notice1"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
          aria-label="RUMOR: Time definido? - Emíus"
        >
          <img
            className="w-full h-full object-cover"
            src={brasil94off}
            alt="Spirit"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-red-600">[URGENTE]:</span> B94 enfrenta
              crise interna e encerra atividades!
            </h3>
            <p className="text-white text-sm">
              De última hora, a equipe Brasil 94 (B94), formada por ADC de
              Aluguel, Cartman, Raltzx, BTPXMatheusX e BladeBlack04, não
              disputará...
            </p>
          </div>
        </Link>
        <Link
          to="/notice2"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover"
            src={spiritNotice}
            alt="Spirit Edge"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Spirit Edge fecha
              elenco para o próximo torneio do CBALOL
            </h3>
            <p className="text-white text-sm">
              Fontes próximas à organização confirmaram que, nas últimas horas,
              a Spirit Edge finalizou...
            </p>
          </div>
        </Link>
        <Link
          to="/notice3"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover"
            src={emius}
            alt="Las Noches"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Las Noches está
              definida!
            </h3>
            <p className="text-white text-sm">
              Após a dissolução da antiga organização DSG, Emerson “MRCasper”
              anunciou a criação de seu novo projeto...
            </p>
          </div>
        </Link>
        <Link
          to="/notice4"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover"
            src={maokai}
            alt="Madeiras"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Maderation Free
              Agent
            </h3>
            <p className="text-white text-sm">
              O suporte Maderation(Nicolas) está oficialmente free agent e
              demonstrou interesse em...
            </p>
          </div>
        </Link>
        <Link
          to="/notice5"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
        >
          <img className="w-full h-full object-cover" src={dsg} alt="DSG" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> DSG está fora do
              CBALOL 2026
            </h3>
            <p className="text-white text-sm">
              A DSG (Desgraça), organização que marcou presença na primeira
              edição do CBALOL e ficou conhecida por alcançar a final de forma
              invicta...
            </p>
          </div>
        </Link>
      </div>
      <div className="w-full mt-16 text-center flex flex-col">
        <h2 className="text-white mt-16 text-3xl">
          Equipes que vão disputar o{" "}
          <span className="text-cyan-600 font-bold">CBALOL 2026</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-6">
          <div className="relative group cursor-pointer">
            <img
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 transition duration-300 group-hover:scale-110 rounded-xl"
              src={cao}
              alt="CAO"
            />
            <div
              className="absolute inset-0 bg-black/70 text-white opacity-0 
                      group-hover:opacity-100 flex flex-col items-center 
                      justify-center text-sm sm:text-base p-3 transition"
            >
              <p className="font-bold mb-2 text-red-500">CAO</p>
              <ul>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Top:</span>
                  FearKillua
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Jungle:</span>
                  JDMDJ BR
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Mid:</span>
                  Raruh
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Adc:</span>
                  Doart
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Suporte:</span>
                  Big Tonho 22
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-72 transition duration-300 group-hover:scale-110 rounded-xl"
              src={notches}
              alt="Las Notches"
            />
            <div
              className="absolute inset-0 bg-black/70 text-white opacity-0 
                      group-hover:opacity-100 flex flex-col items-center 
                      justify-center text-sm sm:text-base p-3 transition"
            >
              <p className="font-bold mb-2 text-sky-800">Las Notches</p>
              <ul>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Top:</span>
                  Dragão Econômico
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Jungle:</span>
                  Sentry
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Mid:</span>
                  pspspspspspsps
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Adc:</span>
                  yumekooJ
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Suporte:</span>
                  mrcasper
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 transition duration-300 group-hover:scale-110 rounded-xl"
              src={spirit}
              alt="Spirit"
            />
            <div
              className="absolute inset-0 bg-black/70 text-white opacity-0 
                      group-hover:opacity-100 flex flex-col items-center 
                      justify-center text-sm sm:text-base p-3 transition"
            >
              <p className="font-bold mb-2 text-violet-300">Spirit Edge</p>
              <ul>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Top:</span>
                  Rua 6
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Jungle:</span>
                  Kamerayda
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Mid:</span>
                  Saburu
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Adc:</span>
                  Raives
                </li>
                <li>
                  <span className="text-cyan-600 p-1 font-bold">Suporte:</span>
                  Belador
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
        <div className="w-full md:w-1/3 text-start p-8 md:p-12 rounded-lg">
          <h2 className="text-start text-white text-2xl">
            Ranking CBALOL 2025🏆
          </h2>
          <ul className="text-white mt-8">
            <li className="p-1">🥇 Equipe CAO</li>
            <li className="p-1">🥈 DSG (Desgraça)</li>
            <li className="p-1">🏅 BFT (Bode Fuceta)</li>
            <li className="p-1">🏅 USP</li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 text-start p-8 md:p-12 rounded-lg">
          <h2 className="text-start text-white text-2xl">
            Melhores Jogadores (por rota)
          </h2>
          <ul className="text-white mt-8 border-l-4 pl-4 border-cyan-600">
            <li className="p-1">
              <span className="text-cyan-600 font-bold">Top:</span> FearKillua
            </li>
            <li className="p-1">
              <span className="text-cyan-600 font-bold">Jungle:</span> Geist
            </li>
            <li className="p-1">
              <span className="text-cyan-600 font-bold">Mid:</span> Volta Yasmin
            </li>
            <li className="p-1">
              <span className="text-cyan-600 font-bold">Adc:</span> PrinceManel
            </li>
            <li className="p-1">
              <span className="text-cyan-600 font-bold">Suporte:</span> Big
              Tonho
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-20">
        <h2 className="text-white text-3xl">
          Mais conteúdos em <span className="text-cyan-600">breve...</span>
        </h2>
      </div>
    </>
  );
};

export default Home;
