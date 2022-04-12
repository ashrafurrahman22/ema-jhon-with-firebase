import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddresss] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddresss(event.target.value)
    }
    const handleConfirmBlur = event => {
        setPhone(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping)
        
    }

    return (
        <div className='form-container'>
        <div>
        <h3 className='form-title'>Shipping Information</h3>
       <form onClick={handleCreateUser}>
       <div className="input-group">
            <label htmlFor="email">Name</label>
            <input onBlur={handleNameBlur} type="text" name="text" placeholder='Your Name' id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input value={user?.email} readOnly type="email" name="email" placeholder='Your Email' id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" placeholder='Address' id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="phone ">Phone Number</label>
            <input onBlur={handleConfirmBlur} type="text" name="phone" placeholder='Contact Number' id="" required />
        </div>
        <p style={{color:'red'}}>
            {error}
        </p>
        <input onClick={handleCreateUser} className='form-submit' type="submit" value="Order" />
       </form>
        </div>
    </div>
    );
};

export default Shipment;