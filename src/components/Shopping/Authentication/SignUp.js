import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import  {auth}  from '../../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {


    // SignUp Modal
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    // SignUp Authentication
    const [fname, setFname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const submit = (e) => {
        e.preventDefault(e);
        createUserWithEmailAndPassword(auth , email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(fname, email, password);
                alert("Register Successful")
                if(user){
                    window.location.assign("/FormCard")

                }
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + errorMessage)
                // ..
            });
    }


    return (
        <>


            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Please SignUp!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='POST'>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="name" class="form-control" value={fname} id="name" aria-describedby="nameHelp" onChange={(e) => setFname(e.target.value)} />
                            <div id="nameHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" value={email} id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id={password} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default SignUp
