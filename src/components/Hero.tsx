import borzoi from "../assets/dog.jpg";
import Botao from "./Botao";

export default function Hero() {
  return (
    <div id="hero" className="flex mx-56 my-8 py-4 text-xl">
      <div id="profile" className="w-3xl mr-4 shadow-(--box-shadow)">
        <img src={borzoi} className="border-2" />
      </div>

      <div id="about-me" className="flex justify-between flex-col">
        <div id="info" className="flex flex-col gap-3">
          <div id="me">
            <h1 className="font-bold text-4xl">Yuri Teixeira</h1>
            <i className="opacity-70">Desenvolvedor Full-Stack</i>
          </div>
          <p className="text-lg">
            Desenvolvedor Full Stack e analista em formação, com foco em Python,
            Flask/Django, JavaScript, React e WordPress, focado em construir
            aplicações de valor para seu negócio.
          </p>
          <p className="text-lg">
            Construo aplicações web, APIs e soluções para automação de
            processos.
          </p>
        </div>

        <div id="links" className="flex justify-end gap-6">
          <Botao
            href="https://github.com/yuriteixeirac/"
            content="GitHub"
            color="var(--primary)"
          />
          <Botao
            href="./CURRICULO.tex"
            content="Currículo"
            color="var(--secondary)"
          />
        </div>
      </div>
    </div>
  );
}
