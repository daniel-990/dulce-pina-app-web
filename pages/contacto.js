import React, { Component } from 'react';
import {redes} from '../json/nav.json';

console.log(redes);

/** componentes de la app */
import HeaderPina from '../components/header/headerpina';
import Menu from '../components/menu/menu';
import Footer from '../components/footer/footer';

class Contacto extends Component{
  render(){
    const redesNav = redes.map((itemsRedesNav, i) => {
      return(

        <div className="redes-icono" key={i}>
        <style jsx>{`
          .color-f{
            color:#3C5A99;
            font-size: 26px;
          }
          .color-i{
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 26px;
          }
          .font-size{
            font-size: 24px;
          }
          .fuente-custom{
              font-family: 'Pacifico', cursive;
          }
          .fuente-custom a{
            color:black !important;
          }
        `}</style>
          <i className={itemsRedesNav.icon}></i> <span className="font-size fuente-custom"><a href={itemsRedesNav.url}>{itemsRedesNav.red}</a></span>
        </div>
      )
    })
    return(
      <div>
        <style jsx>{`
        .fuente-custom{
              font-family: 'Pacifico', cursive;
              font-size: 43px;
          }
          .footer-bottom{
            position: absolute;
            width: 100%;
            bottom: 0px;
          }
        `}</style>
        <HeaderPina />
        <Menu />
        <div className="container">
          <h2 className="fuente-custom">Contacto</h2>
          <div className="row">
            {redesNav}
          </div>
        </div>
        <footer className="page-footer footer-bottom">
            <Footer copyright="© 2019 Copyright Dulce pilla" maslinks="Daniel App" />
        </footer>
      </div>
    )
  }
}

export default Contacto;