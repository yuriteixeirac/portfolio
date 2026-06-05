import { CSSProperties } from "react";
import Botao from "./Botao";

type ProjetoCardProps = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  demonstracao: string;
  cor: string;
  imagem: string;
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
        <img
          className="border-2 shadow-(--sm-box-shadow) my-2"
          src={props.imagem}
        />
        <p className="leading-relaxed hyphens-none">{props.descricao}</p>
      </div>
      <Botao content="Ver código" href={props.demonstracao} color="#FF4F00" />
    </div>
  );
}
