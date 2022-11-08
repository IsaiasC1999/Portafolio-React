import React from 'react';
import CardAcercaDe from './CardAcercaDe';
import CardHabi from './CardHabi';
import style from './SobreMi.module.css';
import {CardHabiInfo} from '../Datos'

const SobreMi = ()=>{

    return(
        <>
           
            <section className={style.sectionSobreMi}>
                <CardAcercaDe/> 
                <h3 className={style.h3Habi}>Habilidades</h3>
                <div className={style.conteCardHabi}>
                {CardHabiInfo.map((ele) => <CardHabi  title={ele.title}  key={ele.id} valor={ele.id}  dataitems={ele.items} /> )}
                </div>
              

            </section>
        </>
    );

}


export default SobreMi;