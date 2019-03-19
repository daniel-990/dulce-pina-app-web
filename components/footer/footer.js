import React, { Component } from 'react';
import { logoReact } from '../../json/nav.json';

class Footer extends Component{
    render(){
        return(
            <div>
                <style jsx>{`
                    .tamano-log-footer{
                        width: 100px;
                    }
                    .App-logo {
                        animation: App-logo-spin infinite 20s linear;
                        pointer-events: none;
                    }
                    .paddin-foot{
                        padding: 10px;
                    }
                    @keyframes App-logo-spin {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `}</style>
                <div className="footer-copyright">
                    <div className="container paddin-foot">
                        {this.props.copyright}
                        <a className="grey-text text-lighten-4 right" href="#!">{this.props.maslinks}</a>
                    </div>
                    <img src={logoReact} className="App-logo tamano-log-footer" alt="logo" />
                </div>
            </div>
        )
    }
}

export default Footer;