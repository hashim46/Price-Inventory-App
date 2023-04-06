import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { userInfo } from './services/userService';

import './index.css';

import EditInventory from './pages/inventory/Edit';
import IndexInventory from './pages/inventory/Index';
import NewInventory from './pages/inventory/New';
import ShowInventory from './pages/inventory/Show';
import EditComment from './pages/comments/Edit';

import Register from './pages/users/Register';
import Login from './pages/users/Login';

import Navbar from './components/Navbar';
import LoggedInStatusBar from './components/Footer'

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      
      let token = localStorage.getItem("token")

      if (token) {
          getLoggedInUser()
      } else {
          setIsLoading(false)
      }

      async function getLoggedInUser() {
          const user = await userInfo()
          setUser(user)
          setIsLoading(false)
      }

  }, [])

  let loggedIn = user.username

  return (
    <div className="App">
      <Navbar user={loggedIn} setUser={setUser} />
      <Routes>
          <Route path='/inventory' element={<IndexInventory user={loggedIn} />} />
          <Route path='/inventory/:id' element={<ShowInventory user={loggedIn} />} />
          {loggedIn ?
            <>
              <Route path='/inventory/new' element={<NewInventory user={loggedIn} />} />
              <Route path='/inventory/:id/edit' element={<EditInventory />} />
              <Route path='/inventory/:id/comments/:cid' element={<EditComment />} />
              {!isLoading && <Route path='*' element={<Navigate to='/inventory' />} />}
            </>
            :
            <>
              <Route path='/register' element={<Register setUser={setUser} />} />
              <Route path='/login' element={<Login setUser={setUser} />} />
              {!isLoading && <Route path='*' element={<Navigate to='/login' />} />}
            </>
          }
      </Routes>
      <LoggedInStatusBar user={loggedIn} setUser={setUser} />
    </div>
  );
}

export default App;
