
import React, { Component } from 'react';
import Menu from './Menu';
import MenuPesquisa from './MenuPesquisa';
import Rodape from './Rodape';


class App extends Component {
    state ={
        name: 'CAROLS',
        logo: 'https://zeissolharesdomundo.com.br/wp-content/uploads/2016/07/zeiss-logo.png'
    }
    render() {
        return (
            <div className="container">
                <img src={this.state.logo} className="logo" alt="logo"/>
                <Menu />
                <h1>OPTICA {this.state.name} LTDA ME</h1>
                <MenuPesquisa />
                <Rodape />
            </div>
        );
    }
}

export default App;