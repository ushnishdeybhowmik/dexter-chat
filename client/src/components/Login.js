import React from 'react';

const Login = ({setUser}) => {
  return (
    <div className="login-wrapper">
        <div className="login-title">
            User Login
        </div>
        <div className="login-formWrapper">
            <form className="login-form" method="POST" onSubmit="">
                <input name="username"></input>
            </form>
        </div>
    </div>
  )
}

export default Login