import NavItem from "./NavItem";
import githubIcon from "../assets/github.svg";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-56 py-3 border-b-2 text-lg">
      <nav>
        <ul className="flex gap-8">
          <NavItem href="" label="Home" />
          <NavItem href="" label="Sobre" />
          <NavItem href="" label="Projetos" />
        </ul>
      </nav>

      <a href="">
        <img src={githubIcon} className="w-8 p-0" />
      </a>
    </div>
  );
}
