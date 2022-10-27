import React from "react";
/*Importar el CV */
import CV from "../../assets/leonardo melchiori.pdf";

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
