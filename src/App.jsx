import { ToastContainer } from 'react-toastify'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';
import Experiences from './pages/Experiences';
import Form from './pages/Form';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const isLoggedIn = false
  return (
    <>
      <div>
        <BrowserRouter>
          {isLoggedIn ? (

            <>
              <header>
                <Header />
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/experiences" element={<Experiences />} />
                  <Route path="/form" element={<Form />} />
                </Routes>
              </main>
            </>
          ) :
            (<Login />)
          }
        </BrowserRouter>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
