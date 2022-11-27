import React from 'react';

class Card extends React.Component{
    render(){
        return (
            <div className="card md-3">
                <h3 className="card-header"> {this.props.title} </h3>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;


// Quando se usa class tem que importar o React from 'react';

// O react existe pra seer dinâmico, e pra que isso aconteça usamos a props

// O this.props (props - é de propriedade)
// existe.propriedade