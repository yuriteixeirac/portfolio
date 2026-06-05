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
      className="flex min-w-0 flex-col gap-3 border-2 p-4 shadow-(--md-box-shadow) sm:p-5"
      style={
        {
          backgroundColor: props.cor,
        } as CSSProperties
      }
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold sm:text-xl">{props.nome}</h2>
          <p className="text-sm opacity-70">{props.onde}</p>
        </div>
        <p className="shrink-0 text-sm sm:text-base">{props.data}</p>
      </div>
      <p>{props.descricao}</p>
    </div>
  );
}
