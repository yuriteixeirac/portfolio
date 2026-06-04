export const projetos = [
  {
    nome: "notIFica",
    descricao:
      "Plataforma digital destinada ao setor de comunicação do IFRN campus Ceará-Mirim. Usada para a mostra de comunicados e notícias fornecidas por servidores e portais de comunicação em TVs espalhadas estratégicamente pelo campi.",
    demonstracao: "https://github.com/yuriteixeirac/notifica",
    tecnologias: ["Python", "Django", "MySQL", "Celery", "Redis", "Swagger"],
    background: "#ff6b6b",
  },

  {
    nome: "Trackazon",
    descricao:
      "Uma aplicação baseada em 2 microsserviços que registra produtos da Amazon e periodicamente verifica valores, com o intuito de auxiliar a decidir o melhor momento de comprar esse produto.",
    demonstracao: "https://github.com/yuriteixeirac/trackazon",
    tecnologias: [
      "Java",
      "Spring Boot",
      "Python",
      "MySQL",
      "RabbitMQ",
      "Playwright",
    ],
    background: "#26A65B",
  },

  {
    nome: "Laika",
    descricao:
      "Um daemon para monitoramento de pastas que busca eventos de alteração em arquivos e engatilha a indexação em bancos de vetores para posterior busca semântica. Possui uma TUI para busca e visualização do conteúdo dos arquivos.",
    demonstracao: "https://github.com/yuriteixeirac/laika",
    tecnologias: ["Python", "Textual", "ChromaDB", "SQLite", "Watchdog"],
    background: "rebeccapurple",
  },
];
