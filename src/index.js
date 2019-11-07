import React from 'react';
import ReactDOM from 'react-dom';
import debug from 'debug';
//import Express from 'express';
import './index.css';
//import btstrp from ''
  class Ola extends React.Component {
    render() {
        return (
            <div>
                <h1 className="titulo"> Olá - Tentando </h1>
                <p>
                    React / Node.js / Express - VSC code
                    GITHUB
                </p>
            </div>);
    }
};
 ReactDOM.render(
        <Ola />,
     document.getElementById('root')
 );
  