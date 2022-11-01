import React from 'react';
import style from './Home.module.css'
import computadora from '../../src/asset/img/computacion.png';



const Home = ()=>{


   return(
    <section className={style.sectionHome}>
        <div className={style.divTitulo}>
            <h2 className={style.h2Home}>Soy, <span className={style.spanName}>Isaias Romano</span></h2> 
            <h3 className={style.h3Home}>Desarrolador Jr en .NET</h3>
            <p className={style.pHome}>Este es mi portafolio Cv diseñado en Figma y codificado <br/> 
                        en React.js. Aqui podra ver mis protectos y habilidades</p>
            <button className={style.btnHome}>Descargar Cv</button>   
        </div>
        <div>
                <img src={computadora} alt="Computing" />
        </div>
    </section>
   );

}



export default Home;