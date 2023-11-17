import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { PiLockKeyOpenDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../assets/loginkey.jpg"

export default function PopSignIn() {
  const navigate = useNavigate();
  const [isFormData, setIsFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = isFormData;
  const handleSelectChange = (e) => {
    setIsFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  async function onSubmitSignIn(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/profile");
      }
    } catch (error) {
      toast.error("Error while signing in");
    }
  }

  return (
    <div className="flex gap-5 lg:flex-wrap flex-wrap-reverse max-w-6xl px-9 mx-auto items-center my-20">
    <div className="max-w-xl" >
    <img src={login} alt="" className="w-full rounded-2xl" />

    </div>
      <div className="max-w-md bg-red-500 p-4 rounded-2xl">
        <div className="flex items-center font-medium text-xl text-white mb-5">
          <h1 className="text-2xl mr-2">
            <PiLockKeyOpenDuotone />{" "}
          </h1>
          <h1>Manage your account</h1>
        </div>
        <form onSubmit={onSubmitSignIn}>
          <input
            type="text"
            className="w-full text-xl px-5 text-black rounded-md mb-4 font-light"
            placeholder="Synovus"
            disabled
          />
          <input
            type="email"
            id="email"
            value={email}
            className="w-full text-sm px-5 py-5 text-black rounded-md mb-[1px] font-light  "
            placeholder="Username"
            onChange={handleSelectChange}
          />
          <input
            type="password"
            id="password"
            value={password}
            className="w-full text-sm px-5 py-5 text-black rounded-md mb-5 font-light "
            placeholder="Password"
            onChange={handleSelectChange}
          />
          <h1 className="text-sm text-white text-center font-light">
            <Link className="hover:underline">Forget Username?</Link> |{" "}
            <Link className="hover:underline">Forget Password?</Link>
          </h1>
          <button className="bg-white text-red  text-center px-4 py-3 w-full rounded-md my-6 hover:border-2 hover:border-blue-600" target="_blank">
            Login
          </button>
          <h1 className="bg-transparent border-2 border-white  text-center px-4 py-3 w-full rounded-md mb-4 hover:border-2 hover:border-blue-600">
            <Link to="/register" className="hover:underline">
              {" "}
              Enroll
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
