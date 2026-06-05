import { experiencias } from "../../data/experiencias";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section
      id="sobre"
      className="mx-auto mb-24 grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 md:mb-36 lg:mb-48 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:px-0"
    >
      <div className="min-w-0 border-b-2 p-4 pb-8 sm:p-6 lg:border-b-0 lg:border-r-2">
        <h2 className="mb-2 inline-block border-2 bg-(--coral-pink) px-3 py-2 text-2xl font-semibold shadow-(--sm-box-shadow) sm:text-3xl">
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
              key={xp.nome}
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
