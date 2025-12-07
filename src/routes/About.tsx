const About = () => {
  return (
    <>
      <main className="w-2/3 mx-auto p-10 mt-10 text-center">
        <h1 className="text-cyan-600 font-bold text-5xl">Quem somos?</h1>
        <p className="text-white text-xl p-4">
          Olá! Nós somos o CBLOL – Campeonato Bagres de League of Legends, um
          grupo de amigos que organiza mini-campeonatos, partidas
          personalizadas, partidas flex e diversas outras interações coletivas.
          Criamos este grupo inicialmente com o intuito de jogar partidas
          personalizadas de League of Legends em comunicação entre amigos.
        </p>
        <p className="text-white text-xl p-4">
          Atualmente, o grupo conta com 30 membros e estamos sempre à procura de
          novos jogadores que tenham interesse em participar das partidas
          personalizadas, campeonatos, partidas flex ou até mesmo interagir e
          conhecer novas pessoas através do nosso bom e velho LOLzinho.
        </p>
        <h2 className="text-cyan-600 font-bold text-3xl">CAMPEONATO CBLOL</h2>
        <p className="text-white text-xl p-4">
          O formato do campeonato é simples: quatro equipes participam da
          primeira etapa do torneio, uma fase de pontuação onde todas as equipes
          se enfrentam e acumulam pontos. Ao final, os dois times com mais
          pontos disputam a grande final, enquanto os dois times com menor
          pontuação disputam o terceiro lugar.
        </p>
        <ul>
          <li className="text-white text-xl p-4">A fase de pontos é realizada em MD1.</li>
          <li className="text-white text-xl p-4">A disputa pelo terceiro lugar ocorre em MD3 – Fearless Draft.</li>
          <li className="text-white text-xl p-4">A grande final é jogada em MD5 – Fearless Draft.</li>
        </ul>
        <h2 className="text-cyan-600 font-bold text-3xl">NOSSO OBJETIVO</h2>
        <p className="text-white text-xl p-4">
          O intuito do campeonato é promover diversão, interação e um ambiente
          amistoso entre todos os membros. Farpas são permitidas, desde que não
          ultrapassem os limites éticos e não envolvam ofensas pessoais ou
          qualquer forma de ataque direto aos participantes.
        </p>
        <h2 className="text-cyan-600 font-bold text-3xl">QUER PARTICIPAR?</h2>
        <p className="text-white text-xl p-4">
          Se você conhece um amigo ou conhecido que tenha interesse em entrar no
          grupo, fale com a gente! Ficaremos felizes em expandir ainda mais a
          comunidade e conhecer pessoas novas que, assim como nós, gostam de
          jogar League of Legends.
        </p>
        <span className="text-cyan-600 font-bold">Muito Obrigado!</span>
      </main>
    </>
  );
};

export default About;
