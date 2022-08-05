import { useState } from "react";
import {Link} from "react-router-dom"


function Login({handleUsernameLogin, handlePasswordLogin, userToLogin, handleSubmit}) {


    return (
    <>
        <form className="loginForm" onSubmit={handleSubmit}>
           
            
            <div className="loginCard">
            <h1>Login</h1>
                <div className="entry">
                <input className="username_entry"
                onChange={handleUsernameLogin}
                value={userToLogin.username}
                type="text"
                name="username"
                placeholder="Username"
                />
                <input className="password_entry"
                onChange={handlePasswordLogin}
                value={userToLogin.password}
                type="text"
                name="password"
                placeholder="Password"
                />
                </div>
                <input className="submit_button"
                type="submit"
                name="submit"
                value="Submit"
                />
                <h2>Don't Have An Account?</h2>
                <button className="reg_button">Register</button>
            </div>
        </form>
    </>
    )
}

export default Login;