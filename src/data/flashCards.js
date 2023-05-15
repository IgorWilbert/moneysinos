const FlashCardsData = [
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/carteira.jpg`,
    question: "O que significa a sigla CDI e qual é a sua principal função?",
    answer:
      "O CDI significa Certificado de Depósito Interbancário. É uma taxa de juros utilizada nos empréstimos entre os bancos. Ela é usada como principal índice dos investimentos de renda fixa (aqueles que possuem uma rentabilidade previsível). Assim, muitos investimentos em renda fixa possuem sua rentabilidade atrelada ao CDI.",
    references: [
      {
        name: "Uol Economia",
        url: "https://economia.uol.com.br/guia-de-economia/entenda-o-que-e-cdi-como-ele-rende-e-afeta-seus-investimentos.htm",
      },
      {
        name: "CNN Brasil",
        url: "https://www.cnnbrasil.com.br/economia/cdi-o-que-e-e-como-influencia-os-seus-investimentos/",
      },
      {
        name: "Blog do Nubank",
        url: "https://blog.nubank.com.br/cdi-o-que-e/",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/cofrinho.jpeg`,
    question: "O que significa a sigla IPCA e qual é a sua principal função?",
    answer:
      "O IPCA significa Índice de Preços ao Consumidor Amplo. É uma taxa cuja principal função é medir a variação de preços de bens e serviços consumidos pelas famílias brasileiras. Criado em 1979, o indicador mede a variação dos preços de um conjunto de produtos e serviços vendidos no varejo e consumidos pelos brasileiros.",
    references: [
      {
        name: "IBGE",
        url: "https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9256-indice-nacional-de-precos-ao-consumidor-amplo.html",
      },
      {
        name: "CNN Brasil",
        url: "https://www.cnnbrasil.com.br/economia/ipca-o-que-e-e-como-e-calculado-o-principal-indice-de-inflacao-do-pais/",
      },
      {
        name: "Blog do Nubank",
        url: "https://blog.nubank.com.br/o-que-e-ipca/",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/financas.png`,
    question: "O que significa a sigla SELIC e qual é a sua principal função?",
    answer:
      "SELIC é a sigla para Sistema Especial de Liquidação e de Custódia. Ela é a taxa básica de juros da economia. É o principal instrumento de política monetária utilizado pelo Banco Central (BC) para controlar a inflação. Ela influencia todas as taxas de juros do país, como as taxas de juros dos empréstimos, dos financiamentos e das aplicações financeiras.",

    references: [
      {
        name: "Banco Central",
        url: "https://www.bcb.gov.br/controleinflacao/taxaselic",
      },
      {
        name: "InfoMoney",
        url: "https://www.infomoney.com.br/guias/taxa-selic/",
      },
      {
        name: "Blog do Nubank",
        url: "https://blog.nubank.com.br/taxa-selic/",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/investidor.png`,
    question: "O que significa a sigla B3 e qual é a sua principal função?",
    answer:
      "B3, também conhecida como Bolsa de Valores de São Paulo, é a sigla para Brasil, Bolsa e Balcão. A B3 é responsável por todas as atividades necessárias para que investidores possam negociar ações, títulos e outros ativos financeiros",

    references: [
      {
        name: "B3",
        url: "https://www.b3.com.br/pt_br/b3/institucional/quem-somos/",
      },
      {
        name: "InfoMoney",
        url: "https://www.infomoney.com.br/guias/o-que-e-b3/",
      },
      {
        name: "Blog do Nubank",
        url: "https://blog.nubank.com.br/o-que-e-b3-e-como-ela-funciona/",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/linear.jpg`,
    question: "O que é um fundo de investimento?",
    answer:
      "Um fundo de investimento é um conjunto de recursos de diversos investidores que são aplicados em diversos ativos financeiros",
    references: [
      {
        name: "Exame",
        url: "https://exame.com/invest/guia/fundos-de-investimentos/",
      },
      {
        name: "InfoMoney",
        url: "https://www.infomoney.com.br/guias/fundos-de-investimento/",
      },
      {
        name: "XP",
        url: "https://www.xpi.com.br/produtos/fundos-investimento/",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/oscilatoria.jpg`,
    question:
      "Qual é a classe de investimentos que oferece potencialmente um retorno maior em longo prazo?",
    answer:
      "Investimentos da classe Renda Variável oferecem potencialmente um retorno maior em longo prazo. Isso porque nessa classe estão incluídas as ações de empresas, que historicamente têm apresentado maior retorno quando comparado a outros tipos de investimento.",
    references: [
      {
        name: "Ferreira, Felipe - Ações: Como começar a investir, 2023",
        url: "https://books.google.com.br/books/about/A%C3%A7%C3%B5es.html?id=dJMXEAAAQBAJ&redir_esc=y",
      },
      {
        name: "InfoMoney",
        url: "https://www.infomoney.com.br/guias/renda-variavel/",
      },
      {
        name: "B3",
        url: "https://borainvestir.b3.com.br/tipos-de-investimentos/renda-variavel/7-respostas-as-principais-perguntas-sobre-renda-variavel-feitas-para-o-google/",
      },
    ],
  },

  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/real.jpg`,
    question: "Quais são os principais investimentos do tipo renda fixa?",
    answer:
      "Os principais investimentos do tipo renda fixa são: Tesouro Direto, CDB (Certificado de Depósito Bancário), Debêntures, LCI (Letra de Crédito Imobiliário), LCA (Letra de Crédito do Agronegócio), CRI (Certificado de Recebíveis Imobiliários) e CRA (Certificado de Recebimento do Agronegócio)",
    references: [
      {
        name: "Uol Economia",
        url: "https://economia.uol.com.br/guia-de-economia/o-que-e-renda-fixa-entenda-e-veja-como-aplicar.htm",
      },
      {
        name: "Toro Investimentos",
        url: "https://blog.toroinvestimentos.com.br/renda-fixa/o-que-e-renda-fixa",
      },
      {
        name: "Rico",
        url: "https://riconnect.rico.com.vc/blog/renda-fixa/",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/imovel.jpg`,
    question: "Qual tipo de investimento têm maior risco associado?",
    answer:
      "O investimento em ações de uma empresa estabelecida geralmente têm maior risco associado. Isso porque a natureza das operações da empresa em um mercado de livre competição faz com que o valor da empresa oscile ao longo do tempo, às vezes em alta, às vezes em baixa. Além disso, nem todas as empresas permitem que investidores participem de decisões operacionais. Assim, o risco está associado à grande dificuldade de prever o retorno do investimento em ações de empresas.",

    references: [
      {
        name: "Ferreira, Felipe - Ações: Como começar a investir, 2023",
        url: "https://books.google.com.br/books/about/A%C3%A7%C3%B5es.html?id=dJMXEAAAQBAJ&redir_esc=y",
      },
      {
        name: "Neto, Alexandre e Lima, Fabiano - Investimento em Ações: Guia Teórico e Prático, 2021",
        url: "https://books.google.com.br/books/about/INVESTIMENTO_EM_A%C3%87OES_GUIA_TEORICO_E_PR.html?id=iI5NXwAACAAJ&redir_esc=y",
      },
      {
        name: "BTG Pactual",
        url: "https://www.btgpactualdigital.com/como-investir/artigos/acoes/o-que-e-mercado-de-acoes-como-funciona-como-investir-e-vantagens",
      },
    ],
  },

  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/viajar.jpg`,
    question: "Qual tipo de investimento têm maior liquidez?",
    answer:
      'O investimento em renda fixa têm maior liquidez. Isso porque o retorno do investimento em renda fixa é altamente previsível, ou seja, não há desvantagem em sacar o dinheiro no "momento errado" assim como ocorre com investimentos em renda variável. Além disso, existem alguns investimentos de renda fixa, como CDBs de Disponibilidade Diária, que permitem ao investidor sacar parte ou todo o capital investido em qualquer dia útil.',
    references: [
      {
        name: "Tresinari, Diego - Renda Fixa Com Lucidez: Estratégias Profissionais para Sua Carteira de Investimentos, 2021",
        url: "https://books.google.com.br/books/about/Renda_Fixa_Com_Lucidez.html?id=0td_zgEACAAJ&redir_esc=y",
      },
      {
        name: "Mobills",
        url: "https://www.mobills.com.br/blog/investimentos/cdb-com-liquidez-diaria/",
      },
      {
        name: "XP",
        url: "https://www.xpi.com.br/produtos/renda-fixa/",
      },
    ],
  },

  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/carro.jpg`,
    question: "O que é diversificação de investimentos?",
    answer:
      "Diversificação de investimentos consiste em investir em várias classes de ativos financeiros diferentes. A vantagem é que caso uma ou mais classes de ativos esteja em baixa, a alta dos demais ativos compensa as perdas. A desvantagem é que os retornos do investimento serão menores, pois as chances de todas as classes de ativos estarem em alta ao mesmo tempo são baixas.",

    references: [
      {
        name: "Neto, Alexandre e Lima, Fabiano - Investimento em Ações: Guia Teórico e Prático, 2021",
        url: "https://books.google.com.br/books/about/INVESTIMENTO_EM_A%C3%87OES_GUIA_TEORICO_E_PR.html?id=iI5NXwAACAAJ&redir_esc=y",
      },
      {
        name: "Toro Investimentos",
        url: "https://blog.toroinvestimentos.com.br/investimentos/diversificacao",
      },
      {
        name: "Tesouro Direto",
        url: "https://www.tesourodireto.com.br/blog/voce-sabe-o-que-e-diversificacao-de-investimento.htm",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/faculdade.jpeg`,
    question: "Quais são os principais investimentos do tipo renda variável?",
    answer:
      "Os principais investimentos do tipo renda variável são: Ações de Empresas, FIIs (Fundos de Investimentos Imobiliários), ETFs (Fundos de Índices), Fundos de Ações e Fundos Multimercados.",
    references: [
      {
        name: "Ferreira, Felipe - Ações: Como começar a investir, 2023",
        url: "https://books.google.com.br/books/about/A%C3%A7%C3%B5es.html?id=dJMXEAAAQBAJ&redir_esc=y",
      },
      {
        name: "InfoMoney",
        url: "https://www.infomoney.com.br/guias/renda-variavel/",
      },
      {
        name: "Nubank",
        url: "https://www.nuinvest.com.br/investir-renda-variavel.html",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/cruzeiro.jpg`,
    question: "O que é liquidez de um investimento?",
    answer:
      "Liquidez é a capacidade de um ativo financeiro ser convertido em dinheiro sem perda significativa de valor. A liquidez é uma característica importante para investidores, pois mede a facilidade de entrar e sair de uma posição de investimento. Alguns investimentos têm liquidez extremamente alta, como CDBs de Disponibilidade Diária. Outros investimentos têm liquidez extremamente baixa, como investimentos em Imóveis.",
    references: [
      {
        name: "Deschatre, Gil Ari - Investimento em ações: Para os momentos de crise e de crescimento, 2011",
        url: "https://books.google.com.br/books/about/Investimento_em_a%C3%A7%C3%B5es.html?id=YF_OVjSNIyoC&redir_esc=y",
      },
      {
        name: "Exame",
        url: "https://exame.com/invest/guia/o-que-e-liquidez-saiba-como-esse-indicador-afeta-os-investimentos/",
      },
      {
        name: "Toro Investimentos",
        url: "https://blog.toroinvestimentos.com.br/investimentos/liquidez",
      },
    ],
  },
  {
    imageUrl: `${process.env.PUBLIC_URL}/flashcards/chovendo.jpg`,
    question:
      "Qual investimento oferece maior segurança em relação ao risco de perda de capital?",
    answer:
      "O investimento em títulos do Tesouro Nacional oferece a maior segurança possível em relação ao risco de perda de capital. Isso porque o investidor irá perder o seu dinheiro somente se o país falir, e esse evento tem chances muito menores de acontecer quando comparado à falência de uma empresa (que afeta investimentos em ações dessa empresa) ou à falência de um banco (que afeta investimentos em CDBs desse banco).",

    references: [
      {
        name: "Kiyosaki, Robert T. - O Guia de investimentos, 2002",
        url: "https://books.google.com.br/books/about/Investimento_em_a%C3%A7%C3%B5es.html?id=YF_OVjSNIyoC&redir_esc=y",
      },
      {
        name: "Genial Investimentos",
        url: "https://blog.genialinvestimentos.com.br/riscos-tesouro-direto/",
      },
      {
        name: "Estadão",
        url: "https://einvestidor.estadao.com.br/educacao-financeira/os-riscos-do-tesouro-direto/",
      },
    ],
  },
];

export default FlashCardsData;
