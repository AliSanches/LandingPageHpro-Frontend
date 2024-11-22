import BtnMenuMobile from "./BtnMenuMobile";
import logo from "/Hpro.png";

import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";

import btn from "./BtnMenu.module.css";

const Header = () => {
  return (
    <div className="container-lg">
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">
          {" "}
          <img
            src={logo}
            alt={logo}
            className="my-2"
            style={{ width: "220px" }}
          />
        </div>
        <div className="ms-auto d-flex align-items-center justify-content-center d-xl-none">
          <BtnMenuMobile />
        </div>
        <div className="ms-3 d-flex gap-3">
          <Nav
            className="me-auto  my-2 my-lg-0 d-none d-xl-flex "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className={`${btn.navFullScreen}`}>
              HOME
            </Nav.Link>
            <Nav.Link href="#action2" className={`${btn.navFullScreen}`}>
              A HPRO
            </Nav.Link>
            <Nav.Link href="#action1" className={`${btn.navFullScreen}`}>
              PRODUTOS E SERVIÇOS
            </Nav.Link>
            <Nav.Link href="#action2" className={`${btn.navFullScreen}`}>
              ATENDIMENTO
            </Nav.Link>
            <Nav.Link href="#action2" className={`${btn.navFullScreen}`}>
              CLIENTES
            </Nav.Link>
            <Nav.Link href="#action2" className={`${btn.navFullScreen}`}>
              BLOG
            </Nav.Link>
            <Nav.Link href="#action2" className={`${btn.navFullScreen}`}>
              CONTATO
            </Nav.Link>
          </Nav>
        </div>
      </Stack>
    </div>
  );
};

export default Header;
