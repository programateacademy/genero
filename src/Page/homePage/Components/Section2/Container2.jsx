import React from "react";
import { Button } from "reactstrap";

const Container2 = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <p class="section-subtitle text-muted text-center pt-4">
            La segunda ola del feminismo va a estar marcada por el
            reconocimiento de las distinciones entre mujeres, sí bien las
            mujeres tienen punto de convergencia en sus demandas, la verdad es
            que muchas de sus circunstancias van a estar medidas por sus
            condiciones raciales, económicas y culturas haciendo que cada vez
            necesiten una lectura más detallada de sus historias… <br /> <br />
            Así es como esta ola crece en fundamentación teórica y unifica
            conceptos como patriarcado, heteronorma, roles de género y en
            avances legislativos sobre la integración de las mujeres en la
            educación superior, la adquisición de bienes y compartir la potestad
            de sus hijos e hijas.
          </p>
          <div className="d-flex justify-content-center align-items-center mt-4">
          <Button class="btn mt-4" href="/pageWave/Cards-Second-Wave/Second-Wave-Books">
            Profundizar <i class="mdi mdi-arrow-right"></i>
          </Button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container2;
