import { useState } from "react";
import {Link} from "react-router-dom"


function Login({handleUsernameLogin, handlePasswordLogin, userToLogin, handleSubmit}) {


    return (
    <>
        <form className="loginForm" onSubmit={handleSubmit}>
            <h4>Financial Abundance Navigator</h4>
            <h1>FAN</h1>
            <div className="loginCard">
                <h2>Login</h2>
                
                <input
                onChange={handleUsernameLogin}
                value={userToLogin.username}
                type="text"
                name="username"
                placeholder="Username"
                />
                <input
                onChange={handlePasswordLogin}
                value={userToLogin.password}
                type="text"
                name="password"
                placeholder="Password"
                />
                <input
                type="submit"
                name="submit"
                value="Submit"
                />
                <h2>Don't Have An Account?</h2>
                <button>Register</button>
            </div>
        </form>
    </>
    )
}

export default Login;