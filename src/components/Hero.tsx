import borzoi from "../assets/dog.jpg";
import Botao from "./Botao";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto mb-24 mt-6 flex max-w-5xl flex-col gap-8 px-4 py-6 text-base sm:px-6 sm:py-8 sm:text-lg md:mb-36 md:mt-8 md:px-10 lg:mb-48 lg:flex-row lg:p-12 lg:text-xl"
    >
      <div
        id="about-me"
        className="flex min-w-0 flex-col justify-between lg:pr-8"
      >
        <div className="mb-6 flex flex-col gap-4">
          <div>
            <h1 className="mb-2 inline-block border-2 bg-(--coral-pink) px-2 py-2 text-4xl font-bold shadow-(--md-box-shadow) sm:px-3 sm:text-5xl lg:text-6xl">
              Yuri Teixeira
            </h1>
            <i className="opacity-70 block">Desenvolvedor full-stack</i>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Desenvolvedor Full Stack em formação, focado em criar aplicações
            web, APIs e automações com Python, Flask/Django, JavaScript,
            Node.js, React e WordPress.
          </p>
        </div>

        <div id="links" className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Botao
            href="https://github.com/yuriteixeirac/"
            content="Ver projetos"
            color="#3D348B"
          />
          <Botao href="./CURRICULO.pdf" content="Currículo" color="#26A65B" />
        </div>
      </div>

      <div
        id="profile"
        className="h-fit w-full max-w-xs self-center border-3 shadow-(--lg-box-shadow) sm:max-w-sm lg:max-w-[360px] lg:self-auto"
      >
        <img src={borzoi} className="block w-full" />
      </div>
    </section>
  );
}
