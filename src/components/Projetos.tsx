import ProjetoCard from "./ProjetoCard";
import { projetos } from "../../data/projetos";

export default function Projetos() {
  return (
    <div className="flex gap-8 justify-center mb-96">
      <div className="mx-auto w-fit">
        <h2 className="text-2xl font-bold bg-(--coral-pink) px-3 py-2 shadow-(--sm-box-shadow) border-2 inline-block p-1 mb-2">
          Projetos
        </h2>
        <p className="max-w-5xl text-lg mb-3">
          Projetos desenvolvidos para resolver problemas reais com aplicações
          web, automações, APIs e ferramentas internas, todos publicados e
          documentados no GitHub para pronto uso.
        </p>

        <div className="flex gap-8">
          {projetos.map((data) => {
            return (
              <ProjetoCard
                nome={data.nome}
                descricao={data.descricao}
                tecnologias={data.tecnologias}
                demonstracao={data.demonstracao}
                background={data.background}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
