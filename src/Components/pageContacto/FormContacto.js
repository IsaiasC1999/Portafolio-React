import React from 'react';
import style from './FormContacto.module.css';
import icoPerso from '../../asset/img/IconoPersona.png';
import icoMsj  from '../../asset/img/defiMensa.png';
import icoConte from '../../asset/img/IconoConte.png';
const FormContacto = () => {
    return ( 
        <>
         <form className={style.formContacto}>
            <h3 
            className={style.h3Contacto}>Formulario</h3>
            <div  className={style.conteinerInputs}>
             <img src={icoPerso}  alt="gg2" className={style.iconosText}  />  
             <input type="text" placeholder='Nombre...' className={style.inputContacto} />
            </div>
            
            <div className={style.conteinerInputs} >
              <img  src={icoMsj} alt="Viva" className={style.iconosText} />  
            <input type="e-mail" placeholder='E-mail...' className={style.inputContacto} />
            </div>

            <div className={style.conteinerInputs} >
             <img src={icoConte} alt="gg3" className={style.iconosText} />   
            <textarea rows="6" placeholder='Mensaje...' className={style.textareaContacto} />
            </div >

            <input type="submit" className={style.inputEnviar} />
         </form>   
        </>
     );
}
 
export default FormContacto;