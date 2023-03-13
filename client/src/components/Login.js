import React, {useState} from 'react';
import Box from '@mui/material/Box';
//import { useNavigate } from 'react-router-dom';
//import SOCKET from 'socket.io-client';

const Login = ({setUser, setSocket}) => {

  const [userLocal, setUserLocal] = useState('');
  const [pwdLocal, setPwdLocal] = useState('');
  const URL = process.env.URL || 'http://10.2.19.151:4000';

  
  function userAuth(username, pass){
    //getUser from MongoDB
    //return user.pwd === pass
  }

  function handleSubmit(e) {
    e.preventDefault();
    //if(userAuth(userLocal, pwdLocal)){
    //  socket = SOCKET.connect(url)
    //  setSocket(socket);
    //  setUser({name: userLocal, id: socket.id});
    //  style statement
    //  useNavigate(`user/${userLocal})
    //}
    //else {
    //  style statement
    //}
  }
  return (
    // <div className="login-wrapper">
    //     <div className="login-title">
    //         User Login
    //     </div>
    //     <div className="login-formWrapper">
    //         <form className="login-form" method="POST" onSubmit={e => handleSubmit(e)} id="loginForm">
    //             <input name="username" className="login-input" onChange={(e) => setUserLocal(e.target.value)}></input>
    //             <input name="password" type="password" className="login-password" onChange={(e) => setPwdLocal(e.target.value)}></input>
    //         </form>
    //           <button type="submit" form="loginForm" class="login-button" value="Submit">Submit</button>
    //     </div>
    // </div>

    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />


  )
}

export default Login;