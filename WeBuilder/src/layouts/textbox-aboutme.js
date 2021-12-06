import React from "react";
import Cloudinary from './cloudinary';

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


export default TextBoxAboutMe;