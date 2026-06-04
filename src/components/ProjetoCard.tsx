import { CSSProperties } from "react";
import Botao from "./Botao";

type ProjetoCardProps = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  demonstracao: string;
  background: string;
};

export default function ProjetoCard(props: ProjetoCardProps) {
  return (
    <div
      className="flex flex-col justify-between border-2 shadow-(--md-box-shadow) p-4 gap-2 max-w-xs"
      style={
        {
          backgroundColor: props.background,
        } as CSSProperties
      }
    >
      <div>
        <h2 className="text-2xl font-semibold border-b-2 mb-2">{props.nome}</h2>
        <p className="leading-relaxed break-word hyphens-none">
          {props.descricao}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-4 items-end justify-center">
          {props.tecnologias.map((tech) => (
            <span
              key={tech}
              className="bg-white border-2 border-black px-2 py-1 text-sm font-bold shadow-(--sm-box-shadow)"
            >
              {tech}
            </span>
          ))}
        </div>

        <Botao content="Ver código" href={props.demonstracao} color="#FF4F00" />
      </div>
    </div>
  );
}
