import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
export default function App() {
  return (
    <BrowserRouter>

    <Header />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route element={<PrivateRoute/>}>
      <Route path='/Profile' element={<Profile />} />
      <Route path='/create-listing' element={<CreateListing />} />
      <Route path='/update-listing/:listingId' element={<UpdateListing/>} />
      </Route>
      <Route path='/About' element={<About />} />

      </Routes>

      </BrowserRouter>
  )
}
