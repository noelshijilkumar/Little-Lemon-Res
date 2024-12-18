import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import Login from './pages/Login'
import UnderDevPage from './pages/UnderDevPage';
import { BookingProvider } from "./context/booking/BookingContext";

function App() {

  return (
    <BookingProvider>
      <main>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<UnderDevPage/>} />
            <Route path='/menu/:id' element={<UnderDevPage/>} />
            <Route path='/about' element={<UnderDevPage/>} />
            <Route path='/reservation' element={<Reservation/>} />
            <Route path='/order-online' element={<UnderDevPage/>} />
            <Route path='/order-online/:id' element={<UnderDevPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/sign-up' element={<UnderDevPage/>} />
            <Route path='/forgot-password' element={<UnderDevPage/>} />
            {/* <Route path='/*' element={<UnderDevPage/>} /> */}
          </Routes>
          <Footer/>
        </Router>
      </main>
    </BookingProvider>
  )
}

export default App
