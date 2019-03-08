import React, { Component } from 'react'

class MenuPesquisa extends Component {
    state = {  
        links: ['#','#','#']
    }
    render() { 
        const links = this.state.links.map((link) => {
            return <li><a href={link} >LINK</a></li>
        })
        return(
            <div className="links">
                <input type="text" className="pesquisa"/>
                <ul>{links}</ul>
            </div>
        );
    }
}
 
export default MenuPesquisa;