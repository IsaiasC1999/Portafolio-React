import React from 'react';
import style from './CardHabi.module.css'

const CardHabi = ({title,dataitems,valor})=>{

    return(
        <div className={style.divCarHabi}>
                <h3 className={style.h3CardHabi}>{title}</h3>
                <ul className={style.ulCardHabi}>
                    {dataitems.map((ele) =>( <li key={valor} className={style.liCardHabi} >{ele}</li> ))}
                </ul>
        </div>
    );

}


export default CardHabi;