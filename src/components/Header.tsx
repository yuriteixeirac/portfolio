import NavItem from "./NavItem";
import githubIcon from "../assets/github.svg";

export default function Header() {
  return (
    <section
      id="header"
      className="flex justify-between items-center py-3 text-lg px-8"
    >
      <nav>
        <ul className="flex gap-16">
          <NavItem href="#" label="Home" />
          <NavItem href="#sobre" label="Sobre" />
          <NavItem href="#contato" label="Contatos" />
        </ul>
      </nav>

      <a href="">
        <img src={githubIcon} className="w-8 p-0" />
      </a>
    </section>
  );
}
