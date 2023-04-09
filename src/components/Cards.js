import React from 'react';
import InputField from "./InputField";
import OutputField from "./OutputField";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.url = "http://localhost:7777"
        this.state = {
            cardText: "",
            cardList: [], 
        };
        this.cardTextChange = this.cardTextChange.bind(this);
    }
    
    componentDidMount() {
        this.getData()                              
    }
    
    cardTextChange({target}) {
        this.setState({cardText: target.value});
    }
    
    async getData() {
        fetch(`${this.url}/notes`)
        .then(response => response.json())
        .then(list => this.setState({cardList: list}))               
    }
    
    async postData() {
        const data = JSON.stringify({
            id: 0,
            content: this.state.cardText
        });
        const response = await fetch(`${this.url}/notes`, {
            method: "POST",
            headers: {                
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: data
        });
        if (response.ok) {
            this.getData();
        }
    }
    
    async delData(id) {
        const response = await fetch(`${this.url}/notes/${id}`, {
            method: "DELETE"
        });        
        if (response.ok) {
            this.getData()            
        }
        
    }    
    render() {        
        return (
            <div className="container">
            <InputField cardsThis={this}/>
            <OutputField cardList={this.state.cardList} cardsThis={this}/>
            </div>
            )
        }
        
    }
    
    export default Cards;