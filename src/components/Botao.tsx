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
      className="botao inline-block border-2 border-black px-5 py-2 text-center text-sm font-semibold text-white shadow-(--md-box-shadow) sm:px-6 sm:text-base"
    >
      {props.content}
    </a>
  );
}
