import { useState } from "react";

function Login() {
    return (
    <>
        <form>
            <h1>Login</h1>
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
        </form>
        <h2>Don't Have An Account?</h2>
        <button>Register</button>
    </>
    )
}

export default Login;