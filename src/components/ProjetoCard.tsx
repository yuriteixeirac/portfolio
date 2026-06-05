import { CSSProperties } from "react";
import Botao from "./Botao";

type ProjetoCardProps = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  demonstracao: string;
  cor: string;
};

export default function ProjetoCard(props: ProjetoCardProps) {
  return (
    <div
      className="flex min-w-0 flex-col justify-between gap-3 border-2 p-4 shadow-(--md-box-shadow)"
      style={
        {
          backgroundColor: props.cor,
        } as CSSProperties
      }
    >
      <div>
        <h2 className="mb-2 border-b-2 text-xl font-semibold sm:text-2xl">
          {props.nome}
        </h2>
        <p className="break-words leading-relaxed hyphens-none">
          {props.descricao}
        </p>
      </div>

      {/*<div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-4 items-end justify-center">
          {props.tecnologias.map((tech) => (
            <span
              key={tech}
              className="bg-white border-2 border-black px-2 py-1 text-sm font-bold shadow-(--sm-box-shadow)"
            >
              {tech}
            </span>
          ))}
        </div>*/}

      {/*</div>*/}
      <Botao content="Ver código" href={props.demonstracao} color="#FF4F00" />
    </div>
  );
}
