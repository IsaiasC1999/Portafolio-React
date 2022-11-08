import React from 'react';
import style from './Contacto.module.css';
import FormContacto from './FormContacto';

const Contacto = () => {
    return ( 
    <>
      <section className={style.sectionContacto}>
        <h3 className={style.h3Contacto}>Contacto</h3>
        <FormContacto/>
      </section>
    </> 
    );
}
 
export default Contacto;