import { Link } from "react-router-dom";
import logo from "../public/logo.png";
import cao from "../public/cao.png";
import notches from "../public/noches.png";
import spirit from "../public/spirit.png";
import bbcnotice from "../public/bbcnotice.jpeg";
import bbc from "../public/bbc.png";
import felicia from "../public/felicia.png";
import metralha from "../public/metralha.png";
import copa64 from "../public/copa64.png";
import lasbbc from "../public/lasbcc1.jpeg";
import feliciaoff from "../public/feliciaoff.png";

const Home = () => {
  return (
    <>
      {/* head */}
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
      {/* notices */}
      <div className="w-11/12 mx-auto mt-16 rounded-lg h-auto md:h-[400px] flex flex-col md:flex-row justify-center overflow-hidden gap-2">
        <Link
          to="/notice1"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
          aria-label="RUMOR: Time definido? - Emíus"
        >
          <img
            className="w-full h-full object-cover"
            src={feliciaoff}
            alt="Spirit"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Felícia não seguirá
              mais no CBALOL.
            </h3>
            <p className="text-white text-sm">
              Com duas vitórias no campeonato e uma performance incrível em
              ambas as partidas, yumekooJ...
            </p>
          </div>
        </Link>
        <Link
          to="/notice2"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover"
            src={lasbbc}
            alt="LasBBC"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Las Noches assume a
              liderança; Manos Metralha fecham o dia com 0-2.
            </h3>
            <p className="text-white text-sm">
              O sábado de CBALOL foi marcado por dois confrontos decisivos e
              resultados que já começam a desenhar o cenário da...
            </p>
          </div>
        </Link>
        <Link
          to="/notice3"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover"
            src={copa64}
            alt="Copa64"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Matheus e Libni
              estão de volta ao campeonato!
            </h3>
            <p className="text-white text-sm">
              Após o encerramento da antiga organização Brasil 94, Matheus e
              Libni estão oficialmente de volta ao competitivo. A dupla...
            </p>
          </div>
        </Link>
        <Link
          to="/notice4"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover"
            src={felicia}
            alt="Felicia"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Show de Felícia e
              discussões internas marcam a abertura do CBALOL.
            </h3>
            <p className="text-white text-sm">
              O dia 09/12 marcou o início oficial do CBALOL com o primeiro
              confronto da temporada. Após um longo atraso na partida...
            </p>
          </div>
        </Link>
        <Link
          to="/notice5"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2] cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover"
            src={bbcnotice}
            alt="BBC"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              <span className="text-cyan-400">[NEWS]:</span> Black Belt Clan
              Entra na Disputa pelo Próximo CBALOL
            </h3>
            <p className="text-white text-sm">
              A movimentação nos bastidores do competitivo brasileiro de League
              of Legends segue intensa. Nos últimos dias...
            </p>
          </div>
        </Link>
      </div>
      {/* tables */}
      <div className="w-full text-white text-center">
        <h2 className="text-white mt-20 text-3xl mb-10">
          Tabela do Campeonato
        </h2>
        <table className="mx-auto text-center border">
          <tr>
            <th className="text-cyan-600 border p-2 font-bold text-2xl">
              Equipe
            </th>
            <th className="text-cyan-600 border p-2 font-bold text-2xl">
              Pontos
            </th>
          </tr>
          <tr>
            <td className="border p-2 text-sky-800 font-bold">Las Noches</td>
            <td className="border p-2 font-bold">2</td>
          </tr>
          <tr>
            <td className="border p-2 text-yellow-400 font-bold">
              Black Belt Clan
            </td>
            <td className="border p-2 font-bold">1</td>
          </tr>
          <tr>
            <td className="border p-2 text-red-500 font-bold">CAO</td>
            <td className="border p-2 font-bold">0</td>
          </tr>
          <tr>
            <td className="border p-2 text-violet-300 font-bold">
              Spirit Edge
            </td>
            <td className="border p-2 font-bold">0</td>
          </tr>
          <tr>
            <td className="border p-2 text-orange-500 font-bold">
              Manos Metralha
            </td>
            <td className="border p-2 font-bold">0</td>
          </tr>
        </table>
      </div>
      {/* teams */}
      <div className="w-full mt-16 text-center flex flex-col">
        <h2 className="text-white mt-16 text-3xl">
          Equipes que estão disputando o{" "}
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
                      group-hover:opacity-100 flex flex-col rounded-2xl items-center 
                      justify-center text-sm sm:text-base p-3 transition"
            >
              <p className="font-bold mb-2 text-red-500">CAO</p>
              <ul>
                <li>
                  <span className="text-red-500 p-1 font-bold">Top:</span>
                  FearKillua
                </li>
                <li>
                  <span className="text-red-500 p-1 font-bold">Jungle:</span>
                  JDMDJ BR
                </li>
                <li>
                  <span className="text-red-500 p-1 font-bold">Mid:</span>
                  Raruh
                </li>
                <li>
                  <span className="text-red-500 p-1 font-bold">Adc:</span>
                  Doart
                </li>
                <li>
                  <span className="text-red-500 p-1 font-bold">Suporte:</span>
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
                      group-hover:opacity-100 flex flex-col rounded-2xl items-center 
                      justify-center text-sm sm:text-base p-3 transition"
            >
              <p className="font-bold mb-2 text-sky-800">Las Notches</p>
              <ul>
                <li>
                  <span className="text-sky-800 p-1 font-bold">Top:</span>
                  Dragão Econômico
                </li>
                <li>
                  <span className="text-sky-800 p-1 font-bold">Jungle:</span>
                  Sentry
                </li>
                <li>
                  <span className="text-sky-800 p-1 font-bold">Mid:</span>
                  pspspspspspsps
                </li>
                <li>
                  <span className="text-sky-800 p-1 font-bold">Adc:</span>
                  yumekooJ
                </li>
                <li>
                  <span className="text-sky-800 p-1 font-bold">Suporte:</span>
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
                      group-hover:opacity-100 flex flex-col rounded-2xl items-center 
                      justify-center text-sm sm:text-base p-3 transition"
            >
              <p className="font-bold mb-2 text-violet-300">Spirit Edge</p>
              <ul>
                <li>
                  <span className="text-violet-300 p-1 font-bold">Top:</span>
                  Rua 6
                </li>
                <li>
                  <span className="text-violet-300 p-1 font-bold">Jungle:</span>
                  Kamerayda
                </li>
                <li>
                  <span className="text-violet-300 p-1 font-bold">Mid:</span>
                  Saburu
                </li>
                <li>
                  <span className="text-violet-300 p-1 font-bold">Adc:</span>
                  Raives
                </li>
                <li>
                  <span className="text-violet-300 p-1 font-bold">
                    Suporte:
                  </span>
                  Belador
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 transition duration-300 group-hover:scale-110 rounded-xl"
              src={bbc}
              alt="Spirit"
            />
            <div
              className="absolute inset-0 bg-black/70 text-white opacity-0 
                      group-hover:opacity-100 flex flex-col rounded-2xl items-center 
                      justify-center text-sm sm:text-base p-3 transition"
            >
              <p className="font-bold mb-2 text-yellow-400">Black Belt Clan</p>
              <ul>
                <li>
                  <span className="text-yellow-400 p-1 font-bold">Top:</span>
                  king of belts#071
                </li>
                <li>
                  <span className="text-yellow-400 p-1 font-bold">Jungle:</span>
                  BetterKindred#2502
                </li>
                <li>
                  <span className="text-yellow-400 p-1 font-bold">Mid:</span>
                  BetterZoe#31415
                </li>
                <li>
                  <span className="text-yellow-400 p-1 font-bold">Adc:</span>
                  Magalhães#071
                </li>
                <li>
                  <span className="text-yellow-400 p-1 font-bold">
                    Suporte:
                  </span>
                  Helsoak#br1
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 transition duration-300 group-hover:scale-110 rounded-xl"
              src={metralha}
              alt="Metralha"
            />
            <div
              className="absolute inset-0 bg-black/70 text-white opacity-0 
                      group-hover:opacity-100 flex flex-col rounded-2xl items-center 
                      justify-center text-sm sm:text-base p-3 transition"
            >
              <p className="font-bold mb-2 text-orange-500">Manos Metralha</p>
              <ul>
                <li>
                  <span className="text-orange-500 p-1 font-bold">Top:</span>
                  ???
                </li>
                <li>
                  <span className="text-orange-500 p-1 font-bold">Jungle:</span>
                  Cartman#18025
                </li>
                <li>
                  <span className="text-orange-500 p-1 font-bold">Mid:</span>
                  PNG Gabis#br2
                </li>
                <li>
                  <span className="text-orange-500 p-1 font-bold">Adc:</span>
                  BTPXMatheusX#br1
                </li>
                <li>
                  <span className="text-orange-500 p-1 font-bold">
                    Suporte:
                  </span>
                  guérisseur#br1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* others */}
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
            Melhores Jogadores 2025 (por rota)
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
