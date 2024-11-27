import conter from "./SectionGestao.module.css";

import diretoria from "/Diretoria.png";

import { useState } from "react";

const SectionGestao = () => {
  const [isMovie, setIsMovie] = useState(false);

  const handleClick = () => {
    setIsMovie(true);
  };

  return (
    <div className="container-lg d-flex justify-content-center flex-column text-center">
      <div className="my-3">
        <span className="fs-4 ">Soluções de TI para</span>
        <h1 className={conter.colorCyan}>Gestão Corporativa</h1>
      </div>
      <div className="d-flex justify-content-center">
        {isMovie ? (
          <video controls className={conter.movie}>
            <source src="./Videos/video1.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src={diretoria}
            alt={diretoria}
            className={`${conter.logo}`}
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default SectionGestao;
