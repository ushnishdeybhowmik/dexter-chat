import React, {useState} from 'react';
//import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {

  const [userLocal, setUserLocal] = useState('');
  const [pwdLocal, setPwdLocal] = useState('');

  function userAuth(username, pass){
    //getUser from MongoDB
    //return user.pwd === pass
  }

  function handleSubmit(e) {
    e.preventDefault();
    //if(userAuth(userLocal, pwdLocal)){
    //  setUser(userLocal);
    //  style statement
    //  useNavigate('/chat')
    //}
    //else {
    //  style statement
    //}
  }
  return (
    <div className="login-wrapper">
        <div className="login-title">
            User Login
        </div>
        <div className="login-formWrapper">
            <form className="login-form" method="POST" onSubmit={e => handleSubmit(e)} id="loginForm">
                <input name="username" className="login-input" onChange={(e) => setUserLocal(e.target.value)}></input>
                <input name="password" type="password" className="login-password" onChange={(e) => setPwdLocal(e.target.value)}></input>
            </form>
              <button type="submit" form="loginForm" class="login-button" value="Submit">Submit</button>
        </div>
    </div>
  )
}

export default Login;