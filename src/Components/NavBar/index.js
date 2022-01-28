import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

const NavBar = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code == currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
    
  }, [currentLanguage, t]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={currentLanguageCode == "en" ? "ms-auto" : "me-auto"}>
            {/* <NavLink href="/home"></NavLink>
            <NavLink href="/projects"></NavLink>
            <NavLink href="/offers"></NavLink> */}
            <NavLink to="/" className="nav-item nav-link">
              {t("home")}
            </NavLink>
            <NavLink to="/projects" className="nav-item nav-link">
              {t("projects")}
            </NavLink>
            <NavLink to="/offers" className="nav-item nav-link">
              {t("offers")}
            </NavLink>
            <NavLink to="/new-job" className="nav-item nav-link">
            New Job
            </NavLink>
            <NavLink to="/signup" className="nav-item nav-link">
            Sign Up
            </NavLink>
            <NavDropdown title={t("lung")} id="basic-nav-dropdown">
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <NavDropdown.Item
                    href="#"
                    className={classNames("dropdown-item", {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code);
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </NavDropdown.Item>
                </li>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
