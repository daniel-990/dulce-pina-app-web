import React, { Component } from 'react';
import { moduleAirtableData } from '../../database/airtableconnections';
const url = moduleAirtableData.config.url+moduleAirtableData.config.apiKey;

class Catalogo extends Component{
    constructor(){
        super();
        this.state = {
            database:[]
        }
    }
    componentDidMount(){
        fetch(url)
        .then((rest) => rest.json())
        .then(data => {
            
            console.log(data);
            this.setState({database: data.records});

        }).catch(err => {
            console.log(err);
        })
    }
    render(){
        const dataTable = this.state.database.map((itemsDb, i) => {
           return(
               <div className="col m4" key={i}>
                    <div className="card">
                    <style jsx>
                        {` .fuente-custom{ font-family: 'Pacifico', cursive;} 
                        .pildoras{
                            padding: 3px;
                            border-radius: 11px;
                            color: #e91e63;
                            font-size: 16px;
                            margin: 1px;
                            font-weight: 700;
                        } 
                        .fondo-uni{
                            background-color: #7b1fa2 !important;
                            font-weight: 700 !important;
                        }
                        `}
                    </style>
                        <div className="card-image waves-effect waves-block waves-light">
                            {/* <img className="activator" src={itemsDb.fields.imagenes[0].url} /> */}
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4 fuente-custom">
                                <strong>{itemsDb.fields.estilo_ref}</strong>
                            </span>
                            <p>Cantidad: <span className="new badge fondo-uni" data-badge-caption="Uni">{itemsDb.fields.cantidad}</span></p>
                            <p>Precio docena: <span className="pildoras">{itemsDb.fields.precio_docena}$</span></p>
                            <p>Precio media docena: <span className="pildoras">{itemsDb.fields.precio_media_docena}$</span></p>
                            <p>Tipo: <strong>{itemsDb.fields.tipo}</strong></p>
                            <p>
                            <i className="fas fa-angle-right"></i> {itemsDb.fields.descripcion}
                            </p>
                            <hr></hr>
                            <p>Vendedor: <strong className="fuente-custom">{itemsDb.fields.vendedor}</strong></p>
                        </div>
                    </div>
               </div>
           )
        })
        return(
            <div className="row">
                {dataTable}
            </div>
        )
    }
}

export default Catalogo;