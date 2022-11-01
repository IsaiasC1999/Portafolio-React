import React from 'react';
import style from './Header.module.css'


const Header = ()=>{

    return(
        <header className={style.menu}>
            <h2>Isaias</h2>
            <nav>
              <ul>
                <li className={style.liMenu} >HOME</li>
                <li className={style.liMenu} >ACERCA DE MI</li>
                <li className={style.liMenu} >PROYECTOS</li>
                
              
              </ul>
            </nav>
            <button className={style.btnContacto}>Contactame</button> 
        </header>
    );


}


export default Header;