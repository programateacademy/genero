import React from "react";
import { Button } from "reactstrap";

const Container = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <p class="section-subtitle text-muted text-center pt-4">
            La primera ola es un periodo de consolidación del feminismo como un
            movimiento social y político que demanda igualdad con el género
            masculino, motivadas por escuelas de pensamiento e ideales que
            lideraron a la revolución francesa y la ilustración. Esta primera
            ola va a ser liderada por mujeres occidentales que tienen el
            privilegio de escribir y leer, con esto les fue suficiente para
            juntar fuerzas y construir las teorías base y los primeros partidos
            políticos para verse representadas en la vida pública. <br /> <br />
            Las obras de la primera ola del feminismo están preocupadas por
            reconocer las normas sociales de distintas culturas que ponían en
            desventaja a las mujeres de la época.En ese orden de ideas la
            primera ola va a tener una cercanía con el movimiento socialista que
            estaba reconociendo que los derechos no eran para todas las
            personas, estaban restringidos para ciertas clases sociales.
          </p>
          <div className="d-flex justify-content-center align-items-center mt-4">
          <Button class="btn mt-4">
            Profundizar <i class="mdi mdi-arrow-right"></i>
          </Button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container;
