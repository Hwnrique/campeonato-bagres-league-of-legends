import { useParams } from "react-router-dom";
import { news } from "../data/news";
import type { News } from "../types/news";
import { Link } from "react-router-dom";

export default function Notice() {
  const { id } = useParams<{ id: string }>();

  const notice: News | undefined = news.find(
    (item) => item.id === Number(id)
  );

  if (!notice) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Notícia não encontrada</p>
      </div>
    );
  }

  return (
    <>
     <main className="w-full text-white">
        <div className="flex flex-col md:flex-row justify-around mt-16 gap-8 md:gap-0">
          <div className="w-full md:w-2/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-6 -mt-6">
              <span className="text-cyan-400">[NEWS]:</span> {notice.title}
            </h2>
            <p className="text-xl p-2">
              {notice.content1}
            </p>
            <p className="text-xl p-2">
              {notice.content2}
            </p>
            <p className="text-xl p-2">
              {notice.content3}
            </p>
            <p className="text-xl p-2">
              {notice.content4}
            </p>
            <p className="text-xl p-2">
              {notice.content5}
            </p>
            <p className="text-xl p-2">
              {notice.content6}
            </p>
            <p className="px-2 md:mt-32 hidden lg:block">
              Continue acompanhando todas as atualizações da janela de
              transferências em{" "}
              <Link className="text-cyan-600" to={"/"}>
                nosso site
              </Link>
              .
            </p>
          </div>
          <div className="w-full md:w-1/2 justify-center md:justify-start px-4">
            <img
              className="rounded-md shadow-xl max-w-full h-auto"
              src={notice.image}
              alt={notice.title}
            />
            <p className="px-2 text-xs -mt-8 text-center hidden lg:flex text-white-500">{notice.date}</p>
          </div>
          <p className="px-2 text-xs -mt-8 text-center block lg:hidden text-gray-500">{notice.date}</p>
          <p className="px-2 md:mt-32 block lg:hidden">
              Continue acompanhando todas as atualizações da janela de
              transferências em{" "}
              <Link className="text-cyan-600" to={"/"}>
                nosso site
              </Link>
              .
            </p>
        </div>
      </main>
    </>
  );
}
