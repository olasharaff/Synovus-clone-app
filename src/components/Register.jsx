import React, { useEffect, useState } from 'react'
import OAuth from '../components/OAuth'
import {useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import {serverTimestamp, doc, setDoc} from "firebase/firestore"
import {db} from "../firebase"
import { toast } from 'react-toastify'

export default function Register() {
  const navigate = useNavigate()
  const [isFormData, setIsFormData] =useState({
    first_Name: "",
    last_Name: "",
    email: "",
    password: "",
  })
  const [greetingMessage, setGreetingMessage] = useState("")
  const [unUsedForm, setUnSedForm] = useState({
    account_type: "",
    account_number: "",
    ssn: "",
    number: "",

  })
  const {account_type, account_number, ssn, number} = unUsedForm
  const {first_Name,last_Name, email, password} = isFormData
  const handleSelectChange = (e) => {
    setIsFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    
  }
  const handleUnUseFormData = (e) => {
    setUnSedForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmitSignUp(e){
    e.preventDefault()

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      updateProfile(auth.currentUser, {displayName: `${first_Name} ${last_Name}`})

      const formDataCopy = {...isFormData};
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, "users", user.id), formDataCopy)
      toast.success("Account created successfully")
      navigate("/profile")


    
      
    } catch (error) {
      toast.error("Error creating account")
      console.log("There is problem while creating the account")
      
    }

  }
  // CREATING CURRENT TIME
 useEffect(() => {
const date = new Date();
const hour = date.getHours();

if (hour < 12) {
  setGreetingMessage("Good Morning");
} else if (hour < 18) {
  setGreetingMessage("Good Afternoon");
} else if (hour < 24) {
  setGreetingMessage("Good Evening");
}
 },[])
  

  return (
    <div>
      <div className="mt-10 mb-10">
        <h1 className="text-center text-4xl mb-3 text-red-800 font-medium">
          {greetingMessage} 
        </h1>
        <h1 className="text-center text-4xl  text-red-800 font-medium">
          Welcome to{" "}
          <span className="text-font text-red-400">Self </span>Enrollment
        </h1>
        <p className="text-center mb-6 font-semibold">Please Enter your credentials</p>
        <div className="max-w-3xl px-9 mx-auto">
          <form onSubmit={onSubmitSignUp}>
            <div className="flex justify-center gap-10">
              <div className="flex flex-col">
                <div className="mb-6">
                  <label className="text-sm">
                    Account Type
                    <span className="text-[#7234F5] text-sm"> *</span>
                  </label>
                  <input
                    type="text"
                    id="account_type"
                    value={account_type}
                    placeholder="Deposit"
                    onChange={handleUnUseFormData}
                    disabled
                    className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-sm">
                    Full Name{" "}
                    <span className="text-[#7234F5] text- sm"> *</span>
                  </label>
                  <input
                    type="text"
                    id="first_Name"
                    value={first_Name}
                    placeholder="Full Name"
                    onChange={handleSelectChange}
                    className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mb-6">
                  <label className="text-sm">
                    Last 5 of SSN
                    <span className="text-[#7234F5] text- sm"> *</span>
                  </label>
                  <input
                    type="number"
                    id="ssn"
                    value={ssn}
                    placeholder="XXX-XXX-1234"
                    disabled
                    onChange={handleUnUseFormData}
                    className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mb-6">
                  <label className="text-sm">
                    Number
                    <span className="text-[#7234F5] text- sm"> *</span>
                  </label>
                  <input
                    type="number"
                    id="number"
                    value={number}
                    disabled
                    placeholder="+1-123-456-7890"
                    onChange={handleUnUseFormData}
                    className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mb-6">
                  <label className="text-sm">
                    Account Number{" "}
                    <span className="text-[#7234F5] text- sm"> *</span>
                  </label>
                  <input
                    type="number"
                    id="account_number"
                    value={account_number}
                    onChange={handleUnUseFormData}
                    disabled
                    placeholder="Account Number"
                    className="w-full rounded-md px-5 py-3 border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mb-6">
                  <label className="text-sm">
                    Last Name
                    <span className="text-[#7234F5] text- sm"> *</span>
                  </label>
                  <input
                    type="text"
                    id="last_Name"
                    value={last_Name}
                    onChange={handleSelectChange}
                    placeholder="Last Name"
                    className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mb-6">
                  <label className="text-sm">
                    Email
                    <span className="text-[#7234F5] text- sm"> *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleSelectChange}
                    placeholder="email"
                    className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mb-6">
                  <label className="text-sm">
                    Passowrd
                    <span className="text-[#7234F5] text- sm"> *</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleSelectChange}
                    placeholder="password"
                    className="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
              <button className="w-[300px] p-2 mb-3 rounded-md bg-red-500 text-white">
                <OAuth />
              </button>
              <button className="w-[300px] p-2 mb-3 rounded-md bg-red-500 text-white">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
