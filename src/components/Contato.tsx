import { contatos } from "../../data/contatos";

export default function Contato() {
  return (
    <section id="contato" className="flex justify-center px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
      <div className="w-full max-w-5xl border-2 border-black bg-white shadow-(--md-box-shadow)">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0 bg-(--coral-pink) p-5 sm:p-8">
            <h2 className="max-w-xl text-3xl font-black leading-tight sm:text-4xl">
              Entre em contato
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              Estou aberto a oportunidades de estágio, projetos e colaborações
              envolvendo desenvolvimento web, backend, automações e sistemas com
              foco em resolver problemas reais.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              Entre em contato caso tenha se interessado pelo meu trabalho e
              queira colaborar comigo!
            </p>
          </div>

          <div className="min-w-0 bg-(--coral-pink) p-5 sm:p-8">
            <div className="mb-5 border-2 border-black bg-white px-4 py-3 font-mono shadow-(--sm-box-shadow)">
              <p className="text-lg font-semibold sm:text-xl">
                {">"} Formas de contato
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contatos.map((contato) => (
                <a
                  key={contato.label}
                  href={contato.href}
                  target={
                    contato.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contato.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`${contato.bg} group min-w-0 border-2 border-black p-3 font-bold shadow-(--sm-box-shadow) sm:p-4`}
                >
                  <div className="flex min-w-0 items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm uppercase tracking-wide">
                        {contato.label}
                      </p>
                      <p className="break-words text-lg sm:text-xl">
                        {contato.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
