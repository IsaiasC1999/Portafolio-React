import React from 'react';
import style from './CardAcercaDe.module.css'


const CardAcercaDe = ()=>{


    return(
        <div className={style.CardAcercaDe}>
            <div className={style.imgCard}></div>
            <div className={style.CardText}>
                <h3 className={style.h3AcercaDe}>Acerca De Mi</h3>
                <p className={style.pAcercaDe}> Hola ! me llamo Isaias Romano , tengo 23 años soy Desarrollador en .NET, Soy actualmente estudiante de la <br/>
                la carrera Ing. en Sistemas en Tucuman, Argentina. Empece con la programacion alla por el año 2018, con la<br/> 
                materia algoritmo y estructuras de Datos. Desde ese entonces siempre me intereso el area pero nunca habia <br/>
                profundizado, hasta que a mediados de 2021, me decidi adentrarme de lleno. Empece aprendiendo el <br/>
                lenguaje  de c# y me adentre a todas las tecnologias que proporciona .Net, hoy en dia aprendiendo React.js.<br/> <br/>

                Sigo con las mismas ganas y motivacion de los primeros dias. Y convecido si uno estudia lo que gusta, se <br/>
                volvera bueno en ello. </p>
            </div>
        </div>
    );

}


export default CardAcercaDe;