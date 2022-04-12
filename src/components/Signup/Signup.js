import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate  = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmBlur = event => {
        setConfirm(event.target.value)
    }
    
    if(user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirm){
            setError('your two password did not matched');
            return;
        }
        if(password < 6){
            setError('Password must be 6 characters or long')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
        <div>
        <h3 className='form-title'>Sign Up</h3>
       <form onClick={handleCreateUser}>
       <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Password' id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="confirm-Password">Confirm Password</label>
            <input onBlur={handleConfirmBlur} type="password" name="confirm-password" placeholder='Confirm Password' id="" required />
        </div>
        <p style={{color:'red'}}>
            {error}
        </p>
        <input onClick={handleCreateUser} className='form-submit' type="submit" value="Sign Up" />
       </form>
       <p>Already have an accont? <Link className='form-link' to='/login'>Log in</Link> </p>
        </div>
    </div>
    );
};

export default Signup;