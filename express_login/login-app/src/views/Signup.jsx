import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPsw, setConfPsw] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [dateOB, setDateOB] = useState("");
    const [userCreated, setUserCreated ] = useState(false);

    const signupPost = async () => {

        try {
            
            const userInfo = {
                email: email,
                password: password,
                firstName: firstName,
                surname: surname,
                date_of_birth: dateOB
            }
    
            const response = await axios.post('http://localhost:8099/users/signup', userInfo)

            if(response.status === 200){

                setUserCreated(true)
                console.log("setUserCreated :", userCreated);

            }

           await console.log("userCreated :", userCreated);
    

        } catch (error) {
            console.error(error.response);
        }


    }

    console.log("email :",email);
    return (
        <div>
            <div className="container">
                <h1 className="text-center">Signup</h1>
                <div className="mb-2">
                    <label className="form-label">Email</label>
                    <input className="form-control" onChange={(e => setEmail(e.target.value))} type="email" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Password</label>
                    <input className="form-control" onChange={(e => setPassword(e.target.value))} type="password" />
                    <p>* password lenght up to 8 character</p>
                </div>
                <div className="mb-2">
                    <label className="form-label">Confirm password</label>
                    <input className="form-control" onChange={(e => setConfPsw(e.target.value))} type="text" />
                </div>
                <div className="mb-2">
                    <label className="form-label">FirstName</label>
                    <input className="form-control" onChange={(e => setFirstName(e.target.value))} type="text" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Surname</label>
                    <input className="form-control" onChange={(e => setSurname(e.target.value))} type="text" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Date of birth</label>
                    <input className="form-control" onChange={(e => setDateOB(e.target.value))} type="text" />
                </div>
                <button type="button" className="btn btn-primary mt-2" onClick={signupPost}>Submit</button>
            </div>
        </div>
    );
}

export default Signup;
