import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cao from "../assets/cao.png";
import notches from "../assets/noches.png";
import spirit from "../assets/spirit.png";
import bbc from "../assets/bbc.png";
import metralha from "../assets/metralha.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { news } from "../data/news";

const Home = () => {
  const orderedNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const slideNews = orderedNews.slice(0, 5);
  const sideNews = orderedNews.slice(5, 8);

  return (
    <>
      {/* head */}
      <div className="w-full mt-10 text-center">
        <h1 className="text-white text-5xl">
          Seja <span className="text-cyan-600 font-bold">Bem-vindo</span> ao
          site oficial do
        </h1>
        <img
          className="md:h-96 md:w-[500px] w-[300px] h-64 mx-auto mt-4 mb-4"
          src={logo}
          alt="logo"
        />
        <h2 className="text-white mt-16 text-3xl">Últimas notícias</h2>
      </div>
      {/* notices */}
      <div className="mx-auto mt-16 w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-2">
          <div className="lg:col-span-3">
            <Swiper
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              effect="fade"
              slidesPerView={1}
              loop
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full md:w-4/5 h-[300px] md:h-[600px] rounded-lg overflow-hidden"
            >
              {slideNews.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link
                    to={`/notice/${item.id}`}
                    className="relative block w-full h-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
                        <span className="text-cyan-400">[NEWS]:</span>{" "}
                        {item.title}
                      </h2>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col gap-2 h-[300px] md:h-[600px]">
            {sideNews.map((item) => (
              <Link
                key={item.id}
                to={`/notice/${item.id}`}
                className="group flex gap-3 flex-1 bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition md:-ml-24"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
    w-24 md:w-52 h-full object-cover
    transition-transform duration-300 ease-out
    group-hover:scale-105
  "
                />
                <div className="flex flex-col justify-center p-3">
                  <h4 className="text-white md:text-xl font-semibold line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-sm text-cyan-400 mt-1">
                    Leia mais →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
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
            <td className="border p-2 font-bold">2</td>
          </tr>
          <tr>
            <td className="border p-2 text-violet-300 font-bold">
              Spirit Edge
            </td>
            <td className="border p-2 font-bold">1</td>
          </tr>
          <tr>
            <td className="border p-2 text-red-500 font-bold">CAO</td>
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
                  mrcasper15
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
                  Dragão Econômico
                </li>
                <li>
                  <span className="text-sky-800 p-1 font-bold">Suporte:</span>
                  ???
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
