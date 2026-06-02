type NavItemProps = {
  href: string;
  label: string;
};

export default function NavItem(props: NavItemProps) {
  return (
    <>
      <li>
        <a className="no-underline" href={props.href}>
          {props.label}
        </a>
      </li>
    </>
  );
}
