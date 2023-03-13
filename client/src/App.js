import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
 


const App = () => {
    const [user, setUser] = useState({name: '', id: ''});
    const [socket, setSocket] = useState();

    return (
            <>
            {
                user.name ? 
                <Home user={user} socket={socket}/> :
                <Login setUser={setUser} setSocket={setSocket}/>
            }
            </>
    )
}

export default App