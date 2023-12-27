import React from "react";
import style from "./services.module.css";

const Services = () => {
  return (
    <div className={style.general__container}>
      <div className={style.page__container}>
        <div className={style.services__top}>
          <p>
            Cada rubro tiene particularidades, y en GIO nos adaptamos a cada una
            de ellas. Imagina las tareas que haces repetidamente y no son
            centrales para tu negocio y tampoco contribuyen como ventajas
            competitiva. Allí ingresa nuestro servicio para eficientizar tu
            modelo de negocio.
          </p>
        </div>

        <div className={style.services__container}>
          <div className={style.services__title}>
            <h3 className={style.title}>SERVICIOS</h3>
          </div>

          <div className={style.services__subtitles}>
            <div className={style.gestion__section}>
              <div className={style.gestion__title}>
                <h3>GESTION</h3>
              </div>
              <div className={style.list__container}>
                <ul>
                  <li>Gestión de facturación.</li>
                  <li>Gestión de cobranza.</li>
                  <li>Administración y control de saldos.</li>
                </ul>
                <ul>
                  <li>Gestión de compras.</li>
                  <li>Gestión de pagos.</li>
                  <li>Administración de inventarios.</li>
                </ul>
                <ul>
                  <li>Reportes para la toma decisiones.</li>
                  <li>Lista de precios.</li>
                </ul>
              </div>
            </div>

            <div className={style.services__subtitles_down}>
              <div className={style.contable__section}>
                <div className={style.contable__title}>
                  <h3>CONTABLE</h3>
                </div>
                <div className={style.first_list_container_down}>
                  <ul>
                    <li>
                      Asesoramiento profesional tributario, laboral y
                      societario.
                    </li>
                  </ul>
                </div>
              </div>

              <div className={style.legales__section}>
                <div className={style.legales__title}>
                  <h3>LEGALES</h3>
                </div>

                <div className={style.list_container_down}>
                  <ul>
                    <li>Asesoría letrada.</li>
                    <li>Gestión de cobranza.</li>
                  </ul>
                </div>
              </div>

              <div className={style.marketing__section}>
                <div className={style.marketing__title}>
                  <h3>MARKETING</h3>
                </div>
                <div className={style.last_list_container_down}>
                  <ul>
                    <li>Web y digital.</li>
                    <li>Marketing empresarial.</li>
                    <li>Gestión de marca y diseño.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
