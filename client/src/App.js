import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';


const navigate = useNavigate();

const App = () => {

    const [user, setUser] = useState({name: '', id: ''});
    const [socket, setSocket] = useState();
    useEffect(() => {
        navigate(`/user/${user.name}`)
    }, [user]);

    return (
        <BrowserRouter>
            <Routes>

                {
                    user.name ? 
                    <Route path='/login' element={<Login setUser={setUser} setSocket={setSocket}/>}></Route> :
                    <Route path={`/user/${user.name}`} element={<Home user={user} socket={socket}/>}></Route>
                }
            </Routes>
        </BrowserRouter>
    )
}

export default App