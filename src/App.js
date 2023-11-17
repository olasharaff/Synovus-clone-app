import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import PopSignIn from "./components/PopSignIn";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<PopSignIn/>  } />
          <Route path="/register" element={<Register />} />
          
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
