import React from "react";

class TextBoxExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
      name:[], 
      description: [], 
      error: false,
      success: false,
    };
  }

  createUI(){
    return this.state.name.map((el, i) =>    
        <div key={i}>
          <input type="text" name={el||''}   className="name-input" placeholder="Header Name" onChange={this.handleChangeName.bind(this, i)} />
          <textarea  description={el||''}  className="description-input" placeholder="Description" onChange={this.handleChangeDescription.bind(this, i)} rows={5}/>
        </div>
      )
  
  }

  saveExperience = (event) => {
    fetch("/api/experience/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({header: this.state.name[this.state.name.length-1], description: this.state.description[this.state.description.length-1]}),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Experience validation');
      })
      .then(experience => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
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
     let name= [...this.state.name];
     name[i] = event.target.value;
     this.setState({ name });
  }
    handleChangeDescription(i, event) {
     let description = [...this.state.description];
     description[i] = event.target.value;
     this.setState({ description });
  }
  
  addClick(){
   
    this.setState(prevState => ({ name: [...prevState.name, '']}))
    this.setState(prevState => ({ description: [...prevState.description, '']}))
    
  }
  
  removeClick(i){
     let name = [...this.state.name];
     name.splice(i,1);
     this.setState({ name });

    let description = [...this.state.description];
    description.splice(i,1);
    this.setState({ description });
  }
  


  render() {
    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this text."
        </div>
      );
    }
    if (this.props.category) {
    return (
      <div>
          <p className="h2 enter-head">Experience</p>
          { errorMessage }
          {this.createUI()}  
          <br/>
          {/* <button onClick={this.addClick.bind(this)}><Plus/></button>
          <button onClick={this.removeClick.bind(this)}><Dash/></button>*/  }
          <input type='button' value='remove' onClick={this.removeClick.bind(this)}/>   
          <input type='button' value='add' onClick={this.addClick.bind(this)}/>

          <button onClick={this.saveExperience}>Save</button>
        
      </div>
    );
  } else {
    return (null);
  }
  }
}


export default TextBoxExp;