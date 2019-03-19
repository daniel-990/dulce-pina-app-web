import React, { Component } from 'react';
import { menupage } from '../../json/nav.json';
import { emoji } from '../../json/nav.json';
import { titulo } from '../../json/nav.json';
import Link from 'next/link';

class Menu extends Component{
    render(){
        const data = menupage.map((elems, i) =>{
            return(
                <li key={i}><Link href={elems.href}><a className={elems.class}>{elems.nombre}</a></Link></li>
            )
        });
        return(
            <div>

            <style jsx>{`
                .tamano-logo{
                    width: 9%;
                }
                .padding10px{
                    padding: 15px;
                }
                .fuente-custom{
                    font-family: 'Pacifico', cursive;
                }
                .border-menu{
                    border-bottom: 1px dashed white;
                }
            `}</style>

                <nav className="nav-extended">
                    <div className="nav-content border-menu">
                        <span className="nav-title padding10px fuente-custom">
                            {emoji}{titulo}
                        </span>
                    </div>

                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {data}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;