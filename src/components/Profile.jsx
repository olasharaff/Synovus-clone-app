import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate();
  const [isFormData] = useState({
    name: auth.currentUser.displayName
  })
  const {name} = isFormData

  const OnLogOut = () =>{
    auth.signOut()
    navigate('/')

  }

 

  return (
    <div className="px-3 my-10 overflow-hidden">
      <h1 className="lg:text-5xl text-3xl text-center font-medium text-red-500">
        Welcome!!
      </h1>
      <div className="max-w-7xl  p-5 bg-slate-100  my-10 rounded-lg ">
        <div className="max-w-xs bg-red-500 shadow-lg p-5 rounded-2xl text-white transition duration-100 ease-in-out hover:shadow-2xl mb-5">
          <h1 className="text-3xl uppercase mb-2 hover:animate-shake">
            {name}
          </h1>
          <p className="font-bold">
            Acc:{" "}
            <span className="font-light hover:animate-shake ">215052432</span>
          </p>
          <p className="font-bold hover:animate-shake ">
            SSN: <span className="hover:animate-shake">XXX-XX-7459</span>
          </p>
          <div>
            <button
              className="bg-white text-red-500 px-4 py-1.5 rounded-md mt-3 hover:bg-black hover:text-white transition duration-150 ease-in-out"
              onClick={OnLogOut}
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="">
          <h1 className="text-center text-3xl text-red-500 my-6">
            Account Summary
          </h1>
          <div>
            <div className="flex gap-10  flex-wrap justify-between border-2 border-white  p-3 rounded-md cursor-pointer hover:shadow-2xl shadow">
              <div>
                <h1 className="text-gray-700 text-2xl font-medium mb-2">
                  Investment
                </h1>
                <p className="lg:text-5xl text-3xl font-semibold">
                  $<span>13,500,000</span>
                </p>
                <p className="text-rose-500 lg:text-sm text-xs">
                  pending.......
                </p>
              </div>
              <div>
                <h1 className="text-yellow-500 text-2xl font-medium">Manage</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-10  flex-wrap justify-between border-2 border-white  p-3 rounded-md my-5 cursor-pointer hover:shadow-2xl shadow">
              <div>
                <h1 className="text-gray-700 text-2xl font-medium mb-2">
                  Checking Account
                </h1>
                <p className="lg:text-5xl text-3xl font-semibold">$87.00</p>
                <p className="text-green-500 lg:text-sm text-xs">
                  available cash
                </p>
              </div>
              <div>
                <h1 className="text-yellow-500 text-2xl font-medium">Manage</h1>
              </div>
            </div>
            <div className="flex gap-10  flex-wrap justify-between border-2 border-white p-3 rounded-md my-5 cursor-pointer hover:shadow-2xl shadow">
              <div>
                <h1 className="text-gray-700 text-2xl font-medium mb-2">
                  Saving Account
                </h1>
                <p className="lg:text-5xl text-3xl font-semibold">$4.21</p>
              </div>
              <div>
                <h1 className="text-yellow-500 text-2xl font-medium">Manage</h1>
              </div>
            </div>
          </div>
          <div className="border-t-4 border-red-700 ">
            <div className="flex justify-between  border-2 border-white shadow-xl p-3 rounded-md my-5">
              <div>
                <h1 className=" font-medium lg:text-2xl text-xl mb-3">
                  Last Transactions
                </h1>
                <p className="mb-1 lg:text-base text-sm">Starbuck</p>
                <p className="mb-1 lg:text-base text-sm">Amazon</p>
                <p className="mb-1 lg:text-base text-sm">Card Payment</p>
                <p className="mb-1 lg:text-base text-sm">Google Ad services</p>
                <p className="mb-1 lg:text-base text-sm">AT&T wireless</p>
              </div>
              <div className="text-end">
                <div className="whitespace-nowrap flex flex-wrap font-medium mb-3 gap-4">
                  <p className="text-green-600 text-sm flex items-center ">
                    <IoMdArrowDropup className="text-2xl" />
                    $1580.00
                  </p>
                  <p className="text-red-600 text-sm flex items-center">
                    <IoMdArrowDropdown className="text-2xl" />
                    $1430.00
                  </p>
                </div>
                <p className="mb-1 lg:text-base text-sm">-$13.80</p>
                <p className="mb-1 lg:text-base text-sm">-$14.99</p>
                <p className="mb-1 lg:text-base text-sm">-$253.6</p>
                <p className="mb-1 lg:text-base text-sm">-$12.00</p>
                <p className="mb-1 lg:text-base text-sm">-$108.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
