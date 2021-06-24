import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="container">
            <h1 className="text-center">Login</h1>
            <div className="mb-3 row col-5 offset-3">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e => setEmail(e.target.value))} id="staticEmail"/>
                </div>
            </div>
            <div className="mb-3 row col-5 offset-3">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" onChange={(e => setPassword(e.target.value))} id="inputPassword" />
                </div>
            </div>
        </div>
    );
}

export default Login;
