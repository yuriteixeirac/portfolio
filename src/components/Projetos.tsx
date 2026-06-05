import ProjetoCard from "./ProjetoCard";
import { projetos } from "../../data/projetos";

export default function Projetos() {
  return (
    <section id="projetos" className="mb-24 px-4 sm:px-6 md:mb-36 lg:mb-48 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-2 inline-block border-2 bg-(--coral-pink) px-3 py-2 text-2xl font-bold shadow-(--sm-box-shadow)">
          Projetos
        </h2>
        <p className="max-w-5xl text-lg mb-3">
          Projetos desenvolvidos para resolver problemas reais com aplicações
          web, automações, APIs e ferramentas internas, todos publicados e
          documentados no GitHub para pronto uso.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projetos.map((data) => {
            return (
              <ProjetoCard
                key={data.nome}
                nome={data.nome}
                descricao={data.descricao}
                tecnologias={data.tecnologias}
                demonstracao={data.demonstracao}
                cor={data.cor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
