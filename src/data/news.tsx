import type { News } from "../types/news";
import bbcnews from "../assets/BBCWIN.png";
import kameda from "../assets/kameda.png";
import feliciaoff from "../assets/feliciaoff.png";
import lasbbc from "../assets/lasbcc1.jpeg";
import copa64 from "../assets/copa64.png";
import bbcnotice from "../assets/bbcnotice.jpeg";
import felicia from "../assets/felicia.png";
import demacia from "../assets/demacia.png";

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
  },
];
