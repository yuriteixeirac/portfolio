import { CSSProperties } from "react";

type AboutCardProps = {
  nome: string;
  descricao: string;
  onde: string;
  data: string;
  cor: string;
};

export default function AboutCard(props: AboutCardProps) {
  return (
    <div
      className="flex flex-col border-2 p-5 shadow-(--md-box-shadow)"
      style={
        {
          backgroundColor: props.cor,
        } as CSSProperties
      }
    >
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">{props.nome}</h2>
          <p className="opacity-70">{props.onde}</p>
        </div>
        <p>{props.data}</p>
      </div>
      <p>{props.descricao}</p>
    </div>
  );
}
