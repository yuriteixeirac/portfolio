export const projetos = [
  {
    nome: "notIFica",
    descricao:
      "Plataforma digital destinada ao setor de comunicação do IFRN campus Ceará-Mirim. Usada para a mostra de comunicados e notícias fornecidas por servidores e portais de comunicação em TVs espalhadas estratégicamente pelo campi.",
    demonstracao: "https://github.com/yuriteixeirac/notifica",
    tecnologias: ["Python", "Django", "MySQL", "Celery", "Redis", "Swagger"],
    cor: "#ff6b6b",
  },

  {
    nome: "Trackerzon",
    descricao:
      "Uma aplicação baseada em 2 microsserviços que registra produtos da Amazon e periodicamente verifica valores, com o intuito de auxiliar a decidir o melhor momento de comprar o produto.",
    demonstracao: "https://github.com/yuriteixeirac/trackerzon",
    tecnologias: [
      "Java",
      "Spring Boot",
      "Python",
      "MySQL",
      "RabbitMQ",
      "Playwright",
    ],
    cor: "#4ECDC4",
  },

  {
    nome: "Laika",
    descricao:
      "Um daemon para monitoramento de pastas que busca eventos de alteração em arquivos e engatilha a indexação em bancos de vetores para posterior busca semântica. Possui uma TUI para busca e visualização do conteúdo dos arquivos.",
    demonstracao: "https://github.com/yuriteixeirac/laika",
    tecnologias: ["Python", "Textual", "ChromaDB", "SQLite", "Watchdog"],
    cor: "#8A3FFC",
  },
];
