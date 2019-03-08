import React, { Component } from 'react';

class Menu extends Component {
    state = {  
        menu : ['OLHARES', 'VISAO',"EXPERIENCIA_ZEISS", 'LOJAS', 'SOBRE']
    }
    render() { 
        const menu = this.state.menu.map((entry, index) =>{
            return <li className="menu-inside"
                    key={index}
                    onClick={ () => {console.log(this)} }
                    >{entry}</li>;
        })
        return <ul className="menu">{menu}</ul>;
    }
}
 
export default Menu;