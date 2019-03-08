import React, { Component } from 'react'

class Rodape extends Component {
    state = {
        imagens: ["https://picsum.photos/200/200/?random","https://picsum.photos/200/200/?image=0","https://picsum.photos/200/200/?image=12"]
    }
    render() {
        const listaImagens = this.state.imagens.map((imagem) => {
            return (
                <img className="grid" src={imagem} alt='imagem'/>
            )
        });
        return (
            <div className="footer">
                <div className="share">SHARE</div>
                <h2 className="centralizado">MAIS CONTEUDOS</h2>
                <div> {listaImagens} </div>
            </div>
        );
    }

}

export default Rodape;