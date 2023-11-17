import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {doc, getDoc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "../firebase"
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"

export default function OAuth() {
    const navigate = useNavigate()
    async function onGoogleAuth(){
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.users

            // create ref
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef)

            if(!docSnap.exists()){
                // create user
                await setDoc(docRef,{
                    name: user.displayName,
                    email: user.email,
                    timeStamp: serverTimestamp()
                })
                navigate('/profile')
            }
            
        } catch (error) {
            console.log(error.message)
            console.log("There was an error in Google Auth Sign up")
            
        }
    }
  return (
    <>
      <button
        type="button"
        onClick={onGoogleAuth}
        className="flex items-center whitespace-nowrap w-full justify-center bg-red-600 font-medium text-sm uppercase text-white rounded-sm py-3 px-6 hover:bg-red-700 transition duration-200 ease-in-out hover:shadow-xl active:bg-blue-800"
      >
        {" "}
        <FcGoogle className="text-2xl mx-2 bg-white rounded-full" /> Continue
        with Google
      </button>
    
    </>
  );
}
