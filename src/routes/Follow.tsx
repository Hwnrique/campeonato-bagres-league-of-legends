const About = () => {
  return (
    <>
      <main
        className="
          w-11/12
          sm:w-4/5
          md:w-2/3
          mx-auto
          p-4
          sm:p-6
          md:p-10
          mt-10
          text-center
          mb-40
        "
      >
        <h1 className="text-cyan-600 font-bold text-3xl sm:text-4xl md:text-5xl px-20">
          Achou legal? Junte-se a nós
        </h1>

        <p className="text-white text-lg sm:text-xl p-2 sm:p-4 mt-8">
          Faça parte do nosso grupo do Whatsapp{" "}
          <a
            className="font-bold text-cyan-600 underline-offset-2 hover:underline"
            href="https://chat.whatsapp.com/LocwYTvUMX52CP7JXYrY6G?mode=hqrt3"
            target="_blank"
          >
            clicando aqui
          </a>
        </p>
      </main>
    </>
  );
};

export default About;
