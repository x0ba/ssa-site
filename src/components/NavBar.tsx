import { useState } from "react";

export interface NavItem {
  text: string;
  link: string;
}

const NavItems: NavItem[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Ensemble",
    link: "#",
  },
  {
    text: "Join",
    link: "#",
  },
];

const NavBar = () => {
  const [selected, setSelected] = useState("Home");

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/src/assets/android-chrome-512x512.png"
              alt="SSA Logo"
              className="d-inline-block align-text-top navbar-logo"
            />
            SSA @ UCSD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NavItems.map((item) => (
                <li key={item.text} className="nav-item">
                  <a
                    className={
                      selected === item.text ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setSelected(item.text)}
                    aria-current="page"
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
