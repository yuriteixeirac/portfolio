import ProjetoCard from "./ProjetoCard";

export default function Projetos() {
  return (
    <div className="flex gap-16 m-auto justify-center mb-96">
      <ProjetoCard
        nome="notIFica"
        descricao="lorem ipsum dolor sit amet"
        tecnologias={["Python", "Django", "MySQL"]}
        demonstracao="https://github.com/yuriteixeirac/notifica"
      />

      <ProjetoCard
        nome="Laika"
        descricao="lorem ipsum dolor sit amet"
        tecnologias={["Python", "Django", "MySQL"]}
        demonstracao="https://github.com/yuriteixeirac/notifica"
      />

      <ProjetoCard
        nome="notIFica"
        descricao="lorem ipsum dolor sit amet"
        tecnologias={["Python", "Django", "MySQL"]}
        demonstracao="https://github.com/yuriteixeirac/notifica"
      />
    </div>
  );
}
