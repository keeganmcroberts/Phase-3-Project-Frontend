import { useState } from "react";

function Login() {
    return (
    <>
        <form className="loginForm">
            <h4>Financial Abundance Navigator</h4>
            <h1>FAN</h1>
            <div className="loginCard">
                <h2>Login</h2>
                
                <input
                type="text"
                name="username"
                placeholder="Username"
                />
                <input
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