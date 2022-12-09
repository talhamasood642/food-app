import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { useState, useEffect } from 'react'
import { db } from '../../../firebase'
import { set } from "firebase/database";
import { storage } from '../../../firebase'
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../../firebase'
import { v4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";



const CardForm = () => {



    // Login 

    // const [show, setShow] = useState(true);
    // const handleClose = () => setShow(false);



    // const [loginemail, setLoginEmail] = useState("");
    // const [loginpassword, setLoginPassword] = useState("");

    // const login = (e) => {
    //     e.preventDefault()
    //     signInWithEmailAndPassword(auth, loginemail, loginpassword)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const {user} = userCredential.user;
    //             if (user === "LoggedIn") {

    //             }
    //             alert("Loged in Successfuly");
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // }


    //  Form Data
    const [img, setImg] = useState(null);
    const [imgList, setImgList] = useState([0]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const imgListRef = ref(storage, "imagesupload/")

    const formSubmit = async(e) => {
        e.preventDefault(e);

      

        
        if (img === null) return;
        const imageRef = ref(storage, `imagesupload/${img.name}`)
        uploadBytes(imageRef, img).then(() => {
            alert("Image Uploaded")
        })
    }

    useEffect(() => {
        listAll(imgListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImgList(() => [
                        url
                    ])
                })
            })
        })

    }, [])






    // Login

    return (
        <>
            <div className='form-card-head' method="POST">
                <Link to="/card"> <i className="fa-solid fa-arrow-left-long card-back-arrow arrow" /></Link>
                <h1>Add Your Card</h1>
            </div>
            <div className='width'>
                <form className='cardform'>

                    <div className="input-group mb-3">
                        <input type="file" className="form-control" onChange={(e) => setImg(e.target.files[0])} />
                        <label className="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputText" className="form-label">Product Name</label>
                        <input type="text" className="form-control" value={title} aria-describedby="emailHelp" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputText" className="form-label">Description</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputText" className="form-label">Price</label>
                        <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className='card-form-btn'>
                        <button type="submit" className="btn btn-primary me-4" onClick={formSubmit}>Click Your Add</button>
                        <Link to="#signup"><button type="submit" className="btn btn-danger" >Cancel Your Card</button></Link>
                    </div>
                    {imgList.map((url) =>  {
                        if (imgList.length > 0) {
                            return <img src={url} alt="img" height={60} key={url.id} {...url}/>
                        }
                    })}
                    
                    {title}
                    {description}
                    {price}
                </form>
            </div>






            {/* Login */}





            {/* <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header >
                <Modal.Title>First Please Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setLoginEmail(e.target.value)} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setLoginPassword(e.target.value)} />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary me-4" onClick={login}>Submit</button>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/signup"><p>If you Don't have Account Please Signup!!</p></Link>
            </Modal.Footer>
        </Modal> */}




        </>
    )
}

export default CardForm
