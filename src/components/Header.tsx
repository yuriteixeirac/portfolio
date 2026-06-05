import NavItem from "./NavItem";
import githubIcon from "../assets/github.svg";

export default function Header() {
  return (
    <section
      id="header"
      className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 text-sm sm:px-6 sm:text-base lg:px-8 lg:text-lg"
    >
      <nav>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-8 lg:gap-x-16">
          <NavItem href="#" label="Home" />
          <NavItem href="#sobre" label="Sobre" />
          <NavItem href="#contato" label="Contatos" />
        </ul>
      </nav>

      <a href="" className="shrink-0">
        <img src={githubIcon} className="w-7 p-0 sm:w-8" />
      </a>
    </section>
  );
}
