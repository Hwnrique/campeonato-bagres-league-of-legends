import type { News } from "../types/news";
import bbcnews from "../assets/BBCWIN.png";
import kameda from "../assets/kameda.png";
import feliciaoff from "../assets/feliciaoff.png";
import lasbbc from "../assets/lasbcc1.jpeg";
import copa64 from "../assets/copa64.png";
import bbcnotice from "../assets/bbcnotice.jpeg";
import felicia from "../assets/felicia.png";
import demacia from "../assets/demacia.png";
import dieguinho from "../assets/dieguinho.png"
import cbalol26 from "../assets/cbalol26.png"
import libniout from "../assets/libniout.png"
import table from "../assets/CBALOL-table.png"
import noticeoofs from "../assets/notice-playoffs.png"

export const news: News[] = [
  {
    id: 1,
    tag: "[NEWS]",
    title: "BBC vence a Spirit Edge no CBALOL",
    content1:
      "Na última semana, mais um confronto movimentou o CBALOL. Em partida válida pela rodada, a Black Belt Clan (BBC) enfrentou a Spirit Edge e mostrou ampla superioridade do início ao fim, dominando completamente o jogo e garantindo uma vitória convincente.",
    content2:
      "O grande destaque da partida foi o mid laner BetterZoe, que teve uma atuação de alto nível com sua Syndra, sendo decisivo nas lutas e conduzindo a BBC ao triunfo. Pelo desempenho consistente e impacto direto no resultado, o jogador foi eleito o MVP da partida.",
    content3:
      "Com o resultado, a Black Belt Clan segue demonstrando força na competição e se consolida como uma das equipes mais sólidas do campeonato.",
    image: bbcnews,
    date: "2025-12-20",
    hasGradient: true
  },
  {
    id: 2,
    tag: "[NEWS]",
    title: "Estreia assombrosa da Equipe CÃO e show da Spirit no CBALOL.",
    content1:
      "Na noite desta quarta-feira, a Equipe CÃO fez sua aguardada estreia no CBALOL em confronto contra a Spirit Edge.",
    content2:
      "No entanto, o que se viu dentro do servidor foi uma partida amplamente dominada pela Spirit, que não deu chances ao adversário e confirmou sua primeira vitória na competição de forma convincente.",
    content3:
      "Com controle total do mapa desde os minutos iniciais, a Spirit Edge impôs seu ritmo de jogo e neutralizou qualquer tentativa de reação da Equipe CÃO. O grande destaque da partida foi Kamerayda, que teve uma atuação impecável com Sejuani, sendo peça-chave nas lutas em equipe e no domínio dos objetivos, conduzindo sua equipe com autoridade rumo ao triunfo.",
    content4:
      "Já a Equipe CÃO inicia sua trajetória no campeonato com o pé esquerdo e agora terá a missão de ajustar sua estratégia e buscar evolução nas próximas rodadas para se manter competitiva ao longo do torneio.",
    image: kameda,
    date: "2025-12-19",
    hasGradient: true
  },
  {
    id: 3,
    tag: "[NEWS]",
    title: "Felícia não seguirá mais no CBALOL.",
    content1:
      "Com duas vitórias no campeonato e uma performance incrível em ambas as partidas, yumekooJ (Felícia) não seguirá mais no campeonato e se despede também do seu time: Las Noches.",
    content2:
      "A jogadora não divulgou mais informações sobre sua saída, como também não divulgou uma possível volta ou mudança de time. Segundo fontes sua motivação é considerada um mistério.",
    content3:
      "A organização demonstra agradecimento e apoio em uma possível volta, a jogadora sai muito aplaudida.",
    image: feliciaoff,
    date: "2025-12-18",
    hasGradient: true
  },
  {
    id: 4,
    tag: "[NEWS]",
    title:
      "Las Noches assume a liderança; Manos Metralha fecham o dia com 0-2.",
    content1:
      "O sábado de CBALOL foi marcado por dois confrontos decisivos e resultados que já começam a desenhar o cenário da competição. No primeiro jogo do dia, a BBC encarou os Manos Metralhas e não deu chances ao adversário.",
    content2:
      "Em uma atuação avassaladora, a BBC venceu em sua estreia e garantiu o primeiro ponto na tabela. O grande destaque da partida foi King of Belts, que conquistou o prêmio de MVP com uma performance dominante de Jax.",
    content3:
      "Na segunda partida, os Manos Metralhas voltaram ao Rift para enfrentar a equipe da Las Noches, em um confronto que entrou para a história do campeonato. A partida caminhava para um atropelo dos Manos Metralhas, que chegaram a abrir cerca de 8 mil de ouro de vantagem.",
    content4:
      "No entanto, em uma virada impressionante, a Las Noches mostrou resiliência, controlou os momentos decisivos do jogo e conseguiu reverter o placar, garantindo a vitória com MVP do ADC Dragão Econômico .Com os resultados do dia, os Manos Metralhas iniciam o campeonato com o pé esquerdo. Além do 0–2 na rodada, a equipe ainda enfrenta problemas internos.",
    content5:
      "Segundo fontes, durante a segunda partida, o top laner In Trancer teria se desentendido com seus companheiros, se estressado e abandonado a partida em andamento, culminando em um disband na line-up. Já a Las Noches sai fortalecida da rodada, demonstrando poder de reação e assumindo protagonismo logo no início do CBALOL.",
    image: lasbbc,
    date: "2025-12-17",
    hasGradient: true
  },
  {
    id: 5,
    tag: "[NEWS]",
    title: "Matheus e Libni estão de volta ao campeonato!",
    content1:
      "Após o encerramento da antiga organização Brasil 94, Matheus e Libni estão oficialmente de volta ao competitivo. A dupla confirmou sua entrada na equipe Manos Metralha, que disputará o próximo split do CBALOL.",
    content2:
      "Além deles, a line-up deve ser composta pelo top laner Heitor, pelo mid laner Gabis e pelo suporte João Vitor, formando um elenco que promete atrair atenção nos bastidores do cenário.",
    content3:
      "A organização demonstra grande expectativa para a temporada e afirma estar focada em disputar o título do campeonato.",
    image: copa64,
    date: "2025-12-16",
    hasGradient: true
  },
  {
    id: 6,
    tag: "[NEWS]",
    title: "Show de Felícia e discussões internas marcam a abertura do CBALOL",
    content1:
      "O dia 09/12 marcou o início oficial do CBALOL com o primeiro confronto da temporada. Após um longo atraso na partida entre Las Noches e Spirit Edge, o duelo finalmente aconteceu e trouxe momentos de tensão, reviravoltas e destaque individual.",
    content2:
      "Mesmo com uma atuação insistente de Raives, ADC da Spirit Edge, que tentou conduzir sua equipe rumo à vitória, não foi o suficiente. A Las Noches encontrou seu ritmo no mid game, encaixou boas lutas e garantiu o triunfo na estreia.",
    content3:
      "Após o término da partida, Félicia foi eleita MVP da primeira disputa do campeonato, coroando sua performance sólida e decisiva.",
    image: felicia,
    date: "2025-12-15",
    hasGradient: true
  },
  {
    id: 7,
    tag: "[NEWS]",
    title: "Black Belt Clan Entra na Disputa pelo Próximo CBALOL",
    content1:
      "A movimentação nos bastidores do competitivo brasileiro de League of Legends segue intensa. Nos últimos dias, mais uma organização manifestou interesse em integrar o CBALOL: a Black Belt Clan, fundada por Enzo “Magalhães”. A equipe, que já estruturou sua line-up para o próximo split, chega com ambição e promete disputar espaço entre as grandes forças do campeonato.",
    content2:
      "Line-up titular da Black Belt Clan: king of belts, BetterKindred, BetterZoe, Magalhães, Helsoak",
    content3:
      "Além dos cinco titulares, o elenco contará ainda com o jogador reserva Pascal is Tasty, reforçando a profundidade do time para o decorrer da temporada.",
    content4: "Com um projeto recém-anunciado, mas cheio de confiança, a Black Belt Clan mira alto e se prepara para buscar seu primeiro título de CBALOL já no próximo split.",
    image: bbcnotice,
    date: "2025-12-14",
    hasGradient: true
  },
  {
    id: 8,
    tag: "[NEWS]",
    title:
      "Bem-vindos a Demacia! O que o patch novo do League of Legends tem para o CBALOL?",
    content1:
      "O patch de 2026 no LoL traz grandes mudanças na Temporada 1, com o fim do Atacan, retorno do ouro por First Blood/Tower, missões de função (bônus para Top, Mid, Bot), e mecânicas aceleradas como início no nível 3 e remoção de Vastilarvas, focando em side lanes e jogo mais rápido; além disso, a Riot planeja uma reforma geral pós-2026, com novo cliente e reformulação do mapa. ",
    content2: "Isso afetará e muito o nosso querido CBALOL, pois como o campeonato começou no final de 2025 e terminará em meados de 2026, nossos jogadores terão que mudar seu estilo e se adaptar o novo lolzinho enquanto o campeonato ainda está longe de seu fim.",
    content3:
      "Você tem fé nos nossos jogadores? pois continue acompanhando e veja o desenrolar de toda a história.",
    image: demacia,
    date: "2025-12-21",
    hasGradient: true
  },
  {
    id: 9,
    tag: "[NEWS]",
    title:
      "Diego chega à Las Noches, equipe ajusta elenco visando evolução no campeonato",
    content1: "A equipe Las Noches anunciou uma mudança em seu elenco para a sequência do CBALOL. O jogador Diego passa a integrar oficialmente o time, ocupando a vaga anteriormente pertencente a Felícia. A alteração faz parte do planejamento da organização visando ajustes estratégicos para o andamento da competição.",
    content2: "Diego chega à Las Noches com a expectativa de agregar novas dinâmicas ao estilo de jogo da equipe. A comissão técnica aposta na adaptação rápida do atleta ao elenco e no impacto positivo que sua entrada pode gerar nas próximas partidas do campeonato. A mudança ocorre em um momento importante da competição, no qual cada decisão pode influenciar diretamente os resultados.",
    content3: "Além da chegada de Diego, a Las Noches conta atualmente com dois jogadores reservas em seu elenco: Bruno e Gabriel. Ambos permanecem à disposição da equipe para eventuais mudanças e ajustes táticos ao longo do campeonato, reforçando a profundidade do plantel e oferecendo mais opções para a comissão técnica.",
    content4: "Com o elenco atualizado, a Las Noches segue sua preparação para os próximos confrontos do CBALOL, buscando estabilidade e evolução dentro do torneio. A estreia de Diego e a utilização dos reservas devem ser acompanhadas de perto pelo público e pelos analistas, atentos ao desempenho da equipe nas próximas rodadas.",
    image: dieguinho,
    date: "2025-12-23",
    hasGradient: true
  },
  {
    id: 10,
    tag: "",
    title:
      "Resumo do CBALOL 2026",
    subTitle: "",
    content1: "O ano de 2026 começou, e com ele cresce a expectativa pelo retorno do Campeonato dos Bagres League of Legends (CBALOL). Após uma breve pausa, a competição está prestes a voltar, e nada melhor do que relembrar tudo o que aconteceu até aqui antes da retomada das partidas.",
    content2: "Até o momento, a liderança do campeonato é dividida entre Las Noches e Black Belt Clan, que tiveram um início impecável na competição. A Las Noches venceu seus dois primeiros confrontos, superando a Spirit Edge e os Manos Metralhas, enquanto a Black Belt Clan também manteve 100% de aproveitamento ao derrotar os Manos Metralhas e a própria Spirit Edge. As duas equipes ainda se enfrentarão, em um duelo direto que promete ser decisivo para a definição do topo da tabela.",
    content3: "Apesar do bom desempenho dentro de jogo, a Las Noches enfrenta um desafio fora dos servidores: a saída de Felícia “Yumeko”, que anunciou uma pausa na carreira, deixando o campeonato. Ainda assim, a equipe segue firme na disputa, com confrontos importantes pela frente contra a Equipe CÃO e a Black Belt Clan.",
    content4: "A Spirit Edge vive uma campanha marcada por oscilações. A equipe estreou com derrota diante da Las Noches, reagiu ao vencer a Equipe CÃO, mas acabou sofrendo sua derrota mais dura até aqui contra a Black Belt Clan. Com um retrospecto de uma vitória e duas derrotas, o próximo confronto contra os Manos Metralhas se torna decisivo na briga por uma vaga nos Playoffs.",
    content5: "Atual campeã do CBALOL, a Equipe CÃO ainda não conseguiu engrenar na competição. A equipe disputou apenas uma partida antes da pausa e acabou superada pela Spirit Edge, acumulando, até o momento, o pior desempenho do campeonato. Com jogos restantes contra Las Noches, Manos Metralhas e Black Belt Clan, a equipe tradicional precisará reagir rapidamente para continuar viva na disputa por uma vaga nos Playoffs.",
    content6: "Já os Manos Metralhas vivem o momento mais delicado do CBALOL. Em dois jogos disputados, a equipe sofreu derrotas para a Las Noches e para a Black Belt Clan, ainda sem conquistar vitórias. Dessa forma, os confrontos contra a Equipe CÃO e a Spirit Edge se tornaram decisivos, e bons resultados são obrigatórios para manter o sonho de classificação aos Playoffs.",
    content7: "Com o retorno do CBALOL se aproximando, as equipes entram na reta final da fase classificatória, disputando seus últimos jogos antes dos Playoffs.",
    image: cbalol26,
    date: "2026-01-02",
    hasGradient: false
  },
  {
    id: 11,
    tag: "[NEWS]",
    title:
      "Libni deixa a Manos Metralha e gera incerteza sobre participação no CBALOL",
    subTitle: "",
    content1: "O cenário competitivo do CBALOL (Campeonato Bagres de League of Legends) foi surpreendido nesta semana com o anúncio da saída de Libni, jungler da equipe Manos Metralha. O jogador confirmou que não seguirá no elenco e, com isso, não disputará a próxima edição do campeonato.",
    content2: "A decisão levanta sérias dúvidas sobre a continuidade da Manos Metralha na competição. Antes mesmo da saída de Libni, a equipe já enfrentava dificuldades na formação do elenco, estando sem um Top Laner definido. Agora, com duas posições essenciais em aberto, o futuro do time no CBALOL se torna incerto.",
    content3: "Até o momento, a organização não se pronunciou oficialmente sobre possíveis substituições ou sobre a manutenção da vaga no campeonato. A comunidade acompanha com atenção os próximos passos da equipe, enquanto cresce a especulação sobre mudanças emergenciais ou até uma possível desistência do torneio.",
    content4: "Além do impacto esportivo, a saída de Libni também afeta diretamente o planejamento estratégico da Manos Metralha. O jungler era peça importante na comunicação e na leitura de mapa da equipe, funções fundamentais para o desempenho em partidas competitivas. Sua ausência obriga o time a buscar não apenas um substituto técnico, mas alguém que consiga se integrar rapidamente ao restante do elenco.",
    content5: "Nos bastidores, rumores indicam que a organização vinha enfrentando dificuldades internas, o que pode ter contribuído para as recentes mudanças. No entanto, nenhuma dessas informações foi confirmada oficialmente. A falta de posicionamento público por parte da Manos Metralha aumenta a apreensão dos torcedores, que aguardam esclarecimentos sobre o futuro do projeto.",    
    content6: "Caso a equipe opte por seguir no CBALOL, o tempo será um fator decisivo. Com o início do campeonato se aproximando, a montagem de um elenco competitivo em curto prazo representa um grande desafio. Enquanto isso, o cenário do torneio segue atento, já que uma possível saída da Manos Metralha pode abrir espaço para alterações na tabela ou até para a entrada de uma nova equipe.",    
    image: libniout,
    date: "2026-01-06",
    hasGradient: true
  },
  {
    id: 12,
    tag: "",
    title:
      "Iniciam os playoffs do CBALOL 2026",
    subTitle: "",
    content1: "Os playoffs do CBALOL finalmente começaram, marcando o momento mais aguardado de todo o campeonato. Depois de uma fase regular cheia de jogos caóticos, picks duvidosos e jogadas geniais inesperadas, agora não existe mais espaço para erro. Cada partida pode ser a última, e a pressão aumenta a cada minuto dentro do Rift.",
    content2: "A liderança ficou com a Las Noches, que mostrou consistência ao longo do campeonato e terminou em primeiro lugar, garantindo a melhor posição possível para os playoffs. Logo atrás vem a BBC, que também teve uma campanha sólida e chega forte para disputar a upper bracket. As duas equipes carregam o favoritismo, mas sabem que favoritismo não ganha jogo.",
    content3: "Por estarem na upper bracket, Las Noches e BBC entram com uma vantagem importante: a famosa “segunda chance”. O confronto direto entre elas vale uma vaga imediata na grande final do CBALOL, enquanto o perdedor ainda terá a oportunidade de se recuperar caindo para a lower bracket, mantendo vivo o sonho do título.",
    content4: "Enquanto isso, a Spirit Edge e a CAO se enfrentam em um duelo decisivo e cruel. Aqui não existe margem para erro: quem perder está automaticamente eliminado do campeonato. É o tipo de jogo que testa não só a mecânica, mas o psicológico dos jogadores, onde qualquer vacilo pode custar toda a temporada.",
    content5: "O vencedor desse confronto segue para a lower bracket, onde terá pela frente um desafio ainda maior: enfrentar o time derrotado da upper. É o caminho mais difícil, mas também o mais emocionante, já que a lower costuma revelar histórias de superação e viradas improváveis.",    
    content6: "Esse formato de playoffs deixa tudo ainda mais insano. Times podem cair, se levantar, errar e corrigir, tornando cada série imprevisível. Estratégia, adaptação e sangue frio vão ser tão importantes quanto habilidade individual dentro do jogo.",    
    content7: "Agora, o CBALOL entra oficialmente em sua fase mais intensa. Os amistosos ficaram para trás, a zoeira dá lugar à concentração e apenas um time vai sair campeão. Preparem o coração, porque os playoffs prometem jogos pegados, rivalidade e muita resenha depois do GG.",    
    image: noticeoofs,
    image2: table,
    date: "2026-01-14",
    hasGradient: false
  },
];
