import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import socketIO from 'socket.io-client';
import React, {useState} from 'react';
const URL = process.env.URL || 'http://10.2.19.151:4000';
const socket = socketIO.connect(URL);
function App() {

  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {
            user === {} ? <Route path="/auth" element={<Login setUser={setUser} />}></Route> :
            <>
              <Route path="/" element={<Home socket={socket} />}></Route>
              <Route path="/chat" element={<ChatPage socket={socket}/>}></Route>
            </>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;