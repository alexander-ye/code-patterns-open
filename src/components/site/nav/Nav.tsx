import "./nav.css";
import { navLinks } from "@lib/constants";

export default function Nav() {
  return (
    <nav>
      <ul role="menubar">
        {navLinks.map((link: any) => {
          return (
            <li key={link} className="nav-item" role="menuitem">
              <a href={link.url} className="nav-item-url">
                {link.label}
              </a>
              {link.subnav ? (
                <ul className="subnav" role="menu">
                  {link.subnav.map((subnavLink: any) => {
                    return (
                      <li
                        key={subnavLink}
                        className="subnav-item"
                        role="menuitem"
                      >
                        <a href={subnavLink.url}>{subnavLink.label}</a>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
