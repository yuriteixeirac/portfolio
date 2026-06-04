import Botao from "./Botao";

type ProjetoProps = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  demonstracao: string;
};

export default function ProjetoCard(props: ProjetoProps) {
  return (
    <div className="border-2 shadow-(--md-box-shadow) p-4">
      <h2 className="text-2xl font-semibold">{props.nome}</h2>
      <p>{props.descricao}</p>

      <p id="tecnologias">
        {props.tecnologias.map((tech) => {
          return <span>{tech} </span>;
        })}
      </p>
    </div>
  );
}
