import Logo from "@components/logo/Logo";
import Nav from "@components/site/nav/Nav";
import "./header.css";

export default function Header() {
  return (
    <header className={`py-[1rem] mb-[1rem]`}>
      <a href="/" className="text-gradient">
        <Logo />
      </a>
      <Nav />
    </header>
  );
}
