import { experiencias } from "../../data/experiencias";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section id="sobre" className="grid grid-cols-2 gap-12 m-auto mx-32 mb-48">
      <div className="border-r-2 p-6 items-center">
        <h2 className="text-3xl font-semibold mb-2 pb-1 bg-(--coral-pink) inline-block border-2 shadow-(--sm-box-shadow) px-3 py-2">
          Quem sou eu?
        </h2>
        <div className="flex flex-col gap-4">
          <p>
            Sou estudante de Informática no IFRN e desenvolvedor full stack em
            formação, com interesse em aplicações web, APIs, automações e
            ferramentas que resolvem problemas reais.
          </p>
          <p>
            Tenho experiência prática com Python, Django/Flask, JavaScript,
            React, WordPress e bancos de dados relacionais. Gosto de construir
            soluções funcionais, organizadas e fáceis de manter.
          </p>
          <p>
            Atualmente atuo com desenvolvimento e manutenção de sites, além de
            participar de projetos acadêmicos envolvendo coleta de dados,
            automação e uso de IA em sistemas web.
          </p>
          <p>
            Meu foco é evoluir como desenvolvedor criando projetos úteis,
            estudando boas práticas e aplicando tecnologia em contextos reais,
            seja no ambiente acadêmico, profissional ou em projetos próprios.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {experiencias.map((xp) => {
          return (
            <AboutCard
              nome={xp.nome}
              descricao={xp.descricao}
              onde={xp.onde}
              data={xp.data}
              cor={xp.cor}
            />
          );
        })}
      </div>
    </section>
  );
}
