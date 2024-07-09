import HumaaansWireframe from '../Images/Humaaans Wireframe.png';
import '../Styles/SignUp.modules.css';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';

interface Props {
    backToLoginHandler: () => void;
}

function SignUp({backToLoginHandler}: Props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };
      
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
      
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://54.82.168.119:8081/api/users/SignUp', {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            });
            console.log('SignUp Success!', response.data);
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response ? error.response.data.message : 'An unexpected error occurred';
                setErrorMessage(message);
            } else {
                // Handle case where error is not an AxiosError
                console.error('SignUp Error:', error);
                setErrorMessage('An unexpected error occurred');
            }
        }
    };

    return (
        <div style={{
            margin: 0,
            padding: 0,
            height: '100vh',
            background: 'linear-gradient(to right, #6358DC 50%, white 50%)'
        }}>
            <div className="blue-half">
                <img id="wireframe" src={HumaaansWireframe} alt="login image" />
            </div>

            <div className="white-half">
                <button id='back' onClick={backToLoginHandler}>
                    &lt; Back
                </button>
                <div id="sign-up-container">
                    <div id="account-signup">
                        Account Sign Up
                    </div>

                    <div id="descriptionn">
                        Become a member and enjoy pro learning
                    </div>

                    <div id="sign-up-form">
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <form onSubmit={handleSubmit}>
                            <div id="sign-up-fields">
                                <div id="float-left">
                                    <label htmlFor="first-name">First name</label><br />
                                    <input type="text" className="name" name="first-name" onChange={handleFirstNameChange}/>
                                </div>
                                <div id="float-right">
                                    <label htmlFor="last-name" >Last name</label><br />
                                    <input type="text" className="name" name="last-name" onChange={handleLastNameChange}/>
                                </div>
                            </div>
                            <label htmlFor="emailaddress"> Email address</label><br />
                            <input type="text" id="emailaddress" name="email-address" onChange={handleEmailChange}/><br />
                            <label htmlFor="pass-word"> password</label><br />
                            <input type="text" id="pass-word" name="pass-word" onChange={handlePasswordChange}/><br />

                            <button type="submit" id="submitt"> Submit </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;