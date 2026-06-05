import { contatos } from "../../data/contatos";

export default function Contato() {
  return (
    <section id="contato" className="flex justify-center px-8 py-28">
      <div className="w-full max-w-5xl border-2 border-black bg-white shadow-(--md-box-shadow)">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
          <div className="bg-(--coral-pink) p-8">
            <h2 className="max-w-xl text-4xl font-black leading-tight">
              Entre em contato
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              Estou aberto a oportunidades de estágio, projetos e colaborações
              envolvendo desenvolvimento web, backend, automações e sistemas com
              foco em resolver problemas reais.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              Entre em contato caso tenha se interessado pelo meu trabalho e
              queira colaborar comigo!
            </p>
          </div>

          <div className="bg-(--coral-pink) p-8">
            <div className="mb-5 border-2 border-black bg-white px-4 py-3 font-mono shadow-(--sm-box-shadow)">
              <p className="text-xl font-semibold">{">"} Formas de contato</p>
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
                  className={`${contato.bg} group border-2 border-black p-4 font-bold shadow-(--sm-box-shadow)`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-wide">
                        {contato.label}
                      </p>
                      <p className="text-xl">{contato.value}</p>
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
