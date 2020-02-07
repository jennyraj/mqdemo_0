import React, {Fragment, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',

    });

    const {name, email, password} = formData;

    const onChange = (e: any) => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e: any) => {
        e.preventDefault();

        console.log(formData);
        const newUser = {

            email,
            password
        };
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const body = JSON.stringify(newUser);
            const resp = await axios.post('/api/users', body, config);
            console.log(resp.data);

        } catch (err) {
            console.log(err.response.data);
        }
    };


    return (
        <Fragment>
            <h1 className="large text-primary">Log In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>

            <form className="form" onSubmit={e => onSubmit(e)}>


                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email"
                           value={email}
                           onChange={e => onChange(e)}
                    />

                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}

                    />
                </div>

                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Don't have an account? <Link to="register">Sign In</Link>
            </p>
        </Fragment>
    );
};

export default Login;