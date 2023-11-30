import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import style from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={style.general_container}>
        <div className={style.container}>
          <div className={style.text}>
            <h1 className={style.title}>ENFOCATE EN LO IMPORTANTE</h1>
            <p className={style.description}>
              "Arriesga más de lo que los otros consideran que es seguro. Sueña
              más de lo que los otros piensan que es práctico". <br />
              <b>Howard Schultz</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
