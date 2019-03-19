import React, { Component }  from 'react';
import Head from 'next/head';

/** componentes de la app */
import HeaderPina from '../components/header/headerpina';
import Menu from '../components/menu/menu';
import Catalogo from '../components/catalogo/catalogo';
import Footer from '../components/footer/footer';

class IndexPage extends Component{
  render(){
    return (
      <div>
        <HeaderPina />
        <div className="container-app">
          <style jsx>{`
              .fuente-custom{
                  font-family: 'Pacifico', cursive;
                  font-size: 43px;
                  text-align: center;
              }
          `}</style>
            <Menu />
            <div className="container">
              <h2 className="fuente-custom">Catalogo de prendas</h2>
              <Catalogo texto="Este es el catalogo de mi pagina"/>
            </div>
            <footer className="page-footer">
              <Footer copyright="© 2019 Copyright Dulce pilla" maslinks="Daniel App" />
            </footer>
        </div>
      </div>
    )
  }
}

export default IndexPage;