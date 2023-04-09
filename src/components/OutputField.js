import React from 'react';
import Card from "./Card";
class OutputField extends React.Component {
    
    render() {        
        return (
            <ul className="outputfield">
            {
                this.props.cardList.map((el) => <Card key={el.id}
                el={el} cardsThis={this.props.cardsThis}/>)
            }
            </ul>
            )
        }
    }
    export default OutputField;