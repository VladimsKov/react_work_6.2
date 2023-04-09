import React from 'react';
class Card extends React.Component {  
    render() {        
        return (            
            <li className="card" >
            <div className="cardData">{this.props.el.content}</div>
            <button className="del-btn btn" onClick={()=> 
                {this.props.cardsThis.delData(this.props.el.id)}
            }>                    
            </button>
            </li>
            )
        }
    }
    export default Card;