import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import contato from "./SectionContatoInicio.module.css";

const SectionContatoInicio = () => {
  return (
    <div
      className="container-lg py-2 d-flex justify-content-center align-items-center gap-3 justify-content-sm-between"
      style={{ height: "38px" }}
    >
      <div className="d-flex gap-3">
        <div className="d-flex gap-1">
          <FaPhoneAlt className={contato.colorCyan} />
          <p className={contato.fs10}>(19) 3412-1919</p>
        </div>
        <div className="d-flex gap-1">
          <MdOutlineEmail className={contato.colorCyan} />
          <p className={contato.fs10}>contato@hpro.com.br</p>
        </div>
      </div>
      <div className="d-sm-flex d-none gap-2">
        <button className={`btn text-white btn-sm ${contato.bgCyan}`}>
          Cliente
        </button>
        <button
          className={`btn text-white btn-sm d-none d-md-block ${contato.bgCinza}`}
        >
          Trabalhe Conosco
        </button>
        <button className={`btn text-white btn-sm ${contato.bgCyan}`}>
          Nuvem
        </button>
      </div>
      <div className="d-none d-lg-flex gap-3 text-white fs-4">
        <a href="#" className={contato.linksSociais}>
          <FaFacebook />
        </a>
        <a href="#" className={contato.linksSociais}>
          <FaSquareInstagram />
        </a>
        <a href="#" className={contato.linksSociais}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SectionContatoInicio;
