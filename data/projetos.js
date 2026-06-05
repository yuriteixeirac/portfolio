import notificaImg from "../src/assets/notifica.png";
import odontomsImg from "../src/assets/odontoms.png";
import laikaImg from "../src/assets/laika.png";

export const projetos = [
  {
    nome: "notIFica",
    descricao:
      "Plataforma digital destinada ao setor de comunicação do IFRN campus Ceará-Mirim. Usada para a mostra de comunicados e notícias fornecidas por servidores e portais de comunicação em TVs espalhadas pelo campi.",
    demonstracao: "https://github.com/yuriteixeirac/notifica",
    tecnologias: ["Python", "Django", "MySQL", "Celery", "Redis", "Swagger"],
    cor: "#ff6b6b",
    imagem: notificaImg,
  },

  {
    nome: "OdontoMS",
    descricao:
      "Uma serviço multi-tenant de gerenciamento de clínica odontológica que fornece automação e integração de processos como agendamento e pagamento para clínicas de pequeno a médio porte.",
    demonstracao: "https://github.com/yuriteixeirac/odonto-ms",
    tecnologias: ["Python", "Flask", "MySQL", "SQLAlchemy", "Tailwind CSS"],
    cor: "#4ECDC4",
    imagem: odontomsImg,
  },

  {
    nome: "Laika",
    descricao:
      "Um daemon para monitoramento de pastas que busca eventos de alteração em arquivos e engatilha a indexação em bancos vetoriais para busca semântica. Possui uma TUI para busca e visualização do conteúdo dos arquivos.",
    demonstracao: "https://github.com/yuriteixeirac/laika",
    tecnologias: ["Python", "Textual", "ChromaDB", "SQLite", "Watchdog"],
    cor: "#8A3FFC",
    imagem: laikaImg,
  },
];
