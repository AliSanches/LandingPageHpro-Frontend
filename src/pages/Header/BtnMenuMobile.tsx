import { GrMenu } from "react-icons/gr";

import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

import btn from "./BtnMenu.module.css";

const BtnMenuMobile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className={`border-0 fs-3 bg-transparent ${btn.colorCyan}`}
      >
        <GrMenu />
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className={btn.ContainerFullScreen}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className={`${btn.colorCyan}`}>H</span>Pro
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-column pe-3">
            <Nav.Link
              href="#action1"
              className={`${btn.navLinks} border-bottom`}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={`${btn.navLinks} border-bottom`}
            >
              A HPRO
            </Nav.Link>
            <Nav.Link
              href="#action1"
              className={`${btn.navLinks} border-bottom`}
            >
              PRODUTOS E SERVIÇOS
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={`${btn.navLinks} border-bottom`}
            >
              ATENDIMENTO
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={`${btn.navLinks} border-bottom`}
            >
              CLIENTES
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={`${btn.navLinks} border-bottom`}
            >
              BLOG
            </Nav.Link>
            <Nav.Link href="#action2" className={`${btn.navLinks}`}>
              CONTATO
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BtnMenuMobile;
