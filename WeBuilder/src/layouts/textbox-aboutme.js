import React from "react";
import Cloudinary from './cloudinary';

class TextBoxAboutMe extends React.Component {
    state = {
        error: false,
        success: false,
        content: '',
      }
    
      contentChanged = (event) => {
        this.setState({
          content: event.target.value
        });
      }
    
      savePost = (event) => {
        fetch("/api/about/", {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({content: this.state.content}),
        })
          .then(res => {
            if(res.ok) {
              return res.json()
            }
    
            throw new Error('Content validation');
          })
          .then(aboutMe => {
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
    
      render() {
        let errorMessage = null;
        if(this.state.error) {
          errorMessage = (
            <div className="alert alert-danger">
              "There was an error saving this text."
            </div>
          );
        }
    
        return (
            <div>
                <p className="h2 enter-head">Input About Me Picture</p>
                <Cloudinary />
                {errorMessage}
                <p className="h2 enter-head"> Enter Your About Me Text Here: </p>
                <label className="label-width">
                <textarea 
                className="description-input"
                value={this.state.content}
                onChange={this.contentChanged}
                rows={5}> </textarea>
                </label>
                <button onClick={this.savePost}>Save</button>

            </div>
        );
      }
}
/**
function TextBoxAboutMe(props) {

    const handleSubmit = e => {
        alert('A name was submitted: ' + this.state.values.join(', '));
        e.preventDefault();
    }


    if (props.category) {
        return (
            <form onSubmit={handleSubmit}>

                    <p className="h2 enter-head">Input About Me Picture</p>
                    <Cloudinary />
                    <p className="h2 enter-head"> Enter Your About Me Text Here: </p>
                    <label className="label-width">
                        <textarea className="description-input" rows={5}> </textarea>
                    </label>
                    <input type="submit" value="Save" />

            </form>
        );
    } else {
        return (null);
    }

}
*/

export default TextBoxAboutMe;