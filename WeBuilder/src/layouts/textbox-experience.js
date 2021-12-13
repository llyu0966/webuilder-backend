import React from "react";
import { Form } from 'react-bootstrap';

class TextBoxExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: [], description: [] };

  }

  createUI() {
    return this.state.name.map((el, i) =>
      <div key={i}>
        <input type="text" name={el || ''} className="name-input" placeholder="Header Name" onChange={this.handleChangeName.bind(this, i)} />
        <textarea description={el || ''} className="description-input" placeholder="Description" onChange={this.handleChangeDescription.bind(this, i)} rows={5} />
      </div>
    )

  }

  /*
    createName(){
      return this.state.name.map((el, i) => 
          <div key={i}>
              
            <input type="text" name={el||''}   className="name-input" placeholder="Header Name" onChange={this.handleChangeName.bind(this, i)} />
 
          </div>  
        
      )
    }
    createDescription(){
        return  this.state.description.map((el, i) => 
            <div key={i}>
              <textarea  description={el||''}  className="description-input" placeholder="Description" onChange={this.handleChangeDescription.bind(this, i)} rows={5}/>
              
          </div> 
        )
      }
    */

  handleChangeName(i, event) {
    let name = [...this.state.name];
    name[i] = event.target.value;
    this.setState({ name });
  }
  handleChangeDescription(i, event) {
    let description = [...this.state.description];
    description[i] = event.target.value;
    this.setState({ description });
  }

  addClick() {

    this.setState(prevState => ({ name: [...prevState.name, ''] }))
    this.setState(prevState => ({ description: [...prevState.description, ''] }))

  }

  removeClick(i) {
    let name = [...this.state.name];
    name.splice(i, 1);
    this.setState({ name });

    let description = [...this.state.description];
    description.splice(i, 1);
    this.setState({ description });
  }

  handleSubmit(event) {
    /* alert('A name was submitted: ' + this.state.values.join(', '));
     event.preventDefault();
     */
  }


  render() {
    if (this.props.category) {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Label className="h2 enter-head">Experience</Form.Label>
          {this.createUI()}
          <br />
          {/* <button onClick={this.addClick.bind(this)}><Plus/></button>
              <button onClick={this.removeClick.bind(this)}><Dash/></button>*/  }
          <input type='button' value='remove' onClick={this.removeClick.bind(this)} />
          <input type='button' value='add' onClick={this.addClick.bind(this)} />

          <input type="submit" value="Save" />

        </Form>
      );
    } else {
      return (null);
    }
  }
}


export default TextBoxExp;