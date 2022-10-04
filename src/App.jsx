import { ToastContainer } from 'react-toastify'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import 'react-toastify/dist/ReactToastify.css';



function App() {
const isLoggedIn = true

  return (
    <>
      <div className="container">
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
                  <Route path="/register" element={<Register />} />
                </Routes>
              </main>
            </>
          ) : (
            <Login />
          )}
        </BrowserRouter>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
