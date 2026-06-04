import { CSSProperties } from "react";

type BotaoProps = {
  content: string;
  href?: string;
  color: string;
  download?: string;
};

export default function Botao(props: BotaoProps) {
  return (
    <a
      style={
        {
          backgroundColor: props.color,
        } as CSSProperties
      }
      href={props.href}
      target="_blank"
      download
      className="botao text-white text-center px-6 py-2 shadow-(--md-box-shadow) font-semibold border-2 border-black"
    >
      {props.content}
    </a>
  );
}
