import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section className="flex flex-col items-center w-full mb-36">
      <div className="max-w-5xl">
        <h2 className="text-2xl font-bold bg-(--coral-pink) px-3 py-2 shadow-(--sm-box-shadow) border-2 inline-block p-1 mb-2">
          Habilidades
        </h2>
        <table className="border-2 shadow-(--md-box-shadow) max-w-5xl bg-white">
          <thead className="bg-black text-white">
            <tr>
              <th className="border-2 border-black p-3 text-left text-lg">
                Área
              </th>
              <th className="border-2 border-black p-3 text-left text-lg">
                Tecnologias
              </th>
            </tr>
          </thead>

          <tbody>
            {skills.map((skill) => {
              return (
                <tr key={skill.area} className="border hover:bg-amber-300">
                  <td className="border-2 p-2 font-semibold">{skill.area}</td>
                  <td className="border-2 p-2">
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
