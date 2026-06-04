import borzoi from "../assets/dog.jpg";
import Botao from "./Botao";

export default function Hero() {
  return (
    <div id="hero" className="flex my-8 text-xl max-w-5xl m-auto p-12 ">
      <div id="about-me" className="flex flex-col justify-between pr-8">
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <h1 className="text-6xl font-bold bg-(--coral-pink) px-3 py-2 shadow-(--md-box-shadow) border-2 inline-block p-1 mb-2">
              Yuri Teixeira
            </h1>
            <i className="opacity-70 block">Desenvolvedor full-stack</i>
          </div>
          <p className="text-2xl">
            Desenvolvedor Full Stack e analista em formação, focado em Python,
            Flask & Django, JavaScript, Node.js, React e WordPress, com
            experiência acadêmica e profissional.
          </p>
        </div>

        <div id="links" className="flex gap-6">
          <Botao
            href="https://github.com/yuriteixeirac/"
            content="GitHub"
            color="#3D348B"
          />
          <Botao href="./CURRICULO.tex" content="Currículo" color="#26A65B" />
        </div>
      </div>

      <div id="profile" className="border-3 shadow-(--lg-box-shadow) h-fit">
        <img src={borzoi} />
      </div>
    </div>
  );
}
