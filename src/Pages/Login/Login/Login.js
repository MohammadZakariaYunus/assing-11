import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            Toast('Sent email');
        }
        else {
            Toast('please enter your email address');
        }
    }


    const navigateRegister = event => {
        navigate('/register');
    }


    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-center m-5'>Please Login</h1>
            <Form onSubmit={handleSubmit} className='mb-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                <Button className='w-50 mb-3' variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <GoogleLogin></GoogleLogin>
            </Form>

            <p>New to Medi Corner? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer />
        </div>
    );
};

export default Login;