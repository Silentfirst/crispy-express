import React, { useState } from 'react';
import { signIn } from '../config/auth';
import { useAuth } from '../hook/AuthProvider';

export default function Login() {
    const { userLoggedIn, currentUser } = useAuth(); // Destructure userLoggedIn and currentUser from useAuth
    console.log(useAuth())
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleClick = async () => {
        const response = await signIn(email, password);
        console.log(email, password);
    };

    return (
        <>
            {userLoggedIn ? `Already Logged in as ${currentUser}` : (
                <>
                    <input type="email" name="email" id="email" placeholder='Email' onChange={handleEmail} />
                    <input type="password" name="password" id="password" placeholder='6 digit' onChange={handlePassword} />
                    <button onClick={handleClick}>Login</button>
                </>
            )}
        </>
    );
}