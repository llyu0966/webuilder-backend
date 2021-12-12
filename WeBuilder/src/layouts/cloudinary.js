import React, { useState } from "react";
import { Form } from 'react-bootstrap';

function Cloudinary(props) {

    const [image, setImage] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    // const [notFound, setnotFound] = useState(false)





    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'farukh')

        const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dywoy9ilo/image/upload ',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        // console.log(file.secure_url)
        // setTimeout(saveImage(e), 1000);
        saveImage(file.secure_url);
    }

    const saveImage = (file) => {
        fetch("/api/image/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: file, type: props.type }),

        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('Content validation');
            })
            .then(post => {
                setSuccess(true);
            })
            .catch(err => {
                setError(true);
            });
    }



    const errorMesasage = () => {
        let errMess = null;
        if (this.state.error) {
            errMess = (
                <div className="alert alert-danger">
                    "There was an error saving this post."
                </div>
            );
        }

    }


    return (
        <div>
            {errorMesasage}
            <Form.Group controlId="formFile" className="mb-3 input-file section-description">
                <Form.Control
                    type="file"
                    className="label-width"
                    onChange={uploadImage} />
            </Form.Group>
            <img src={image} alt="show preview" style={{ width: '300px' }} />



        </div>
    );
}
export default Cloudinary;