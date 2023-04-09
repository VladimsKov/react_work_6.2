import React from 'react';
class InputField extends React.Component {
            
    render() {
        const cardsThis = this.props.cardsThis;
    return (
        <>
        <span>Новая заметка:</span>
      <div className="inputBlock">
        <form className="inputBlock" onSubmit={(evt)=> {
          evt.preventDefault();          
          cardsThis.postData();          
          }}>                 
        <textarea 
        className="inputarea"
        rows="5"
        placeholder="Введите текст"
        maxLength="200"
        wrap="soft"
        onChange={cardsThis.cardTextChange}
        required>
        </textarea>
        <button type="submit" className="btn send-btn"></button>
        </form>
        <button className="btn update-btn" onClick={()=> cardsThis.getData()}></button>
      </div>
      </>
    )
  }
}
  export default InputField;
  