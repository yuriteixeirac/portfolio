import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section className="mb-24 flex w-full flex-col items-center px-4 sm:px-6 md:mb-36 lg:px-8">
      <div className="w-full max-w-5xl">
        <h2 className="mb-2 inline-block border-2 bg-(--coral-pink) px-3 py-2 text-2xl font-bold shadow-(--sm-box-shadow)">
          Habilidades
        </h2>
        <table className="block w-full border-2 bg-white text-sm shadow-(--md-box-shadow) sm:table sm:text-base">
          <thead className="hidden bg-black text-white sm:table-header-group">
            <tr>
              <th className="border-2 border-black p-3 text-left text-lg">
                Área
              </th>
              <th className="border-2 border-black p-3 text-left text-lg">
                Tecnologias
              </th>
            </tr>
          </thead>

          <tbody className="block sm:table-row-group">
            {skills.map((skill) => {
              return (
                <tr
                  key={skill.area}
                  className="block border-b-2 border-black p-3 hover:bg-amber-300 last:border-b-0 sm:table-row sm:border-0 sm:p-0"
                >
                  <td className="block border-black font-semibold sm:table-cell sm:border-2 sm:p-2">
                    {skill.area}
                  </td>
                  <td className="mt-1 block break-words leading-relaxed sm:mt-0 sm:table-cell sm:border-2 sm:p-2">
                    {skill.tecnologias.map((tecnologia, index) => {
                      return (
                        <span key={tecnologia}>
                          {tecnologia}
                          {index < skill.tecnologias.length - 1 && ", "}
                        </span>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
