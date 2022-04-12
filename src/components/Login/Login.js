import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password,  setPassword]  = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const location = useLocation();
      const from = location.state?.from?.pathname || '/'; 

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if(user){
        navigate(from, {replace:true})
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
            <div>
            <h3 className='form-title'>Log in</h3>
           <form onClick={handleUserSignIn}>
           <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="Password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Your password' id="" required />
            </div>
            <p style={{color:'red'}}>{error?.message}</p> 
            {
                loading && <p>Loading....</p>
            }
            <input className='form-submit' type="submit" value="Login" />
           </form>
           <p>New to Ema-John? <Link className='form-link' to='/signup'>Create an Account</Link> </p>
            </div>
        </div>
    );
};

export default Login;