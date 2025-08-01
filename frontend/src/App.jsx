import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Appointment from './Appointment'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import Footer from './components/Footer'
import MyAppointment from './pages/MyAppointment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'> 
    <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointment' element={<MyAppointment />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export { App };