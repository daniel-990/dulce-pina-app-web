import React, { Component } from 'react';
import Head from 'next/head';

class HeaderPina extends Component{
    render(){
        return(
        <Head>
            <title>Dulce Piña Catalogos</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
              
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Pacifico&amp;subset=cyrillic" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
  
          </Head>
        )
    }
}

export default HeaderPina;