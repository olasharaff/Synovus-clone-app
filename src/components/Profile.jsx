import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isFormData] = useState({
    name: auth.currentUser.displayName,
  });
  const { name } = isFormData;
  // Splitting the name into an array of [first, last]
  const nameParts = name.split(" ");

  // Now you can use firstName and lastName in your component
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const OnLogOut = () => {
    auth.signOut();
    navigate("/");
  };
  const handleAccount = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="px-3 my-10 overflow-hidden">
      <h1 className="lg:text-5xl text-3xl text-center font-medium text-red-500">
        Welcome {firstName}!!
      </h1>
      <div className="max-w-7xl  p-5 bg-slate-100  my-10 rounded-lg ">
        <div className="max-w-xs bg-red-500 shadow-lg p-5 rounded-2xl text-white transition duration-100 ease-in-out hover:shadow-2xl mb-5">
          <h1 className="text-3xl uppercase mb-2 hover:animate-shake">
            {firstName} {lastName}
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
            <Popup
              trigger={
                <div className="flex gap-10  flex-wrap justify-between border-2 border-white  p-3 rounded-md cursor-pointer hover:shadow-2xl shadow">
                  <div>
                    <h1 className="text-gray-700 text-2xl font-medium mb-2">
                      Investment
                    </h1>
                    <p className="lg:text-5xl text-3xl font-semibold">
                      $<span>23,475,000</span>
                    </p>
                    <p className="text-rose-500 lg:text-sm text-xs">
                      pending.......
                    </p>
                  </div>
                  <div>
                    <h1 className="text-yellow-500 text-2xl font-medium">
                      Manage
                    </h1>
                  </div>
                </div>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> Transfer fund</div>
                  <div className="content">
                    <h1 className="text-base">
                      <span className="text-red-500 font-semibold">Ops!!</span>{" "}
                      Your investment is still pending.{" "}
                    </h1>
                  </div>
                  <div className="actions">
                    <Link to="https://www.synovus.com/contact-us/" target='_blank'>
                      {" "}
                      <button className="button px-6 py-2 bg-red-500 text-white rounded-md mr-5 hover:bg-black">
                        Contact Bank
                      </button>
                    </Link>

                    <button
                      className="button px-6 py-2 bg-green-500 text-white rounded-md hover:bg-black"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div>
            <Popup
              trigger={
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
                    <h1 className="text-yellow-500 text-2xl font-medium">
                      Manage
                    </h1>
                  </div>
                </div>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> Transfer Fund</div>
                  <div className="content">
                    <div>
                      <h1 className="font-medium ">
                        <span className="text-red-500">Zelle</span> is not
                        available at a moment
                      </h1>
                    </div>
                    <h1 className="text-center">
                      Do you want to make transfer?
                    </h1>
                    <p className="text-center">
                      Yes- enter your account number
                    </p>
                    <input
                      type="number"
                      onChange={handleAccount}
                      placeholder="Enter Account Number"
                      className="border-2 border-gray-300 rounded-md p-2 my-2"
                    />
                  </div>
                  <div className="actions">
                    <Popup
                      trigger={
                        <button className="button px-6 py-2 bg-green-500 text-white rounded-md hover:bg-black">
                          {" "}
                          Transfer{" "}
                        </button>
                      }
                      position="top center fixed"
                      nested
                    >
                      <div className="max-w-lg">
                        <p>
                          Link sent! Check your phone to complete the
                          transaction.
                        </p>
                      </div>
                    </Popup>
                    <button
                      className="button bg-red-500 text-white px-6 py-2 rounded-md ml-5 hover:bg-black"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            <Popup
              trigger={
                <div className="flex gap-10  flex-wrap justify-between border-2 border-white p-3 rounded-md my-5 cursor-pointer hover:shadow-2xl shadow">
                  <div>
                    <h1 className="text-gray-700 text-2xl font-medium mb-2">
                      Saving Account
                    </h1>
                    <p className="lg:text-5xl text-3xl font-semibold">$4.21</p>
                  </div>
                  <div>
                    <h1 className="text-yellow-500 text-2xl font-medium">
                      Manage
                    </h1>
                  </div>
                </div>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> Move your fund </div>
                  <div className="content">
                    <div>
                      <h1 className="font-medium  mb-5 text-sm">
                        {" "}
                        You can only the money in the
                        <span className="text-red-500"> Savings</span> to{" "}
                        <span className="text-red-500">Checking</span>
                      </h1>
                    </div>
                    <h1 className="text-center text-base">
                      Do you want to make Move?
                    </h1>

                    <input
                      type="number"
                      onChange={handleAccount}
                      placeholder="Enter amount to move"
                      className="border-2 border-gray-300 rounded-md p-2 my-2"
                    />
                  </div>
                  <div className="actions">
                    <Popup
                      trigger={
                        <button className="button px-6 py-2 bg-green-500 text-white rounded-md hover:bg-black">
                          {" "}
                          Move it{" "}
                        </button>
                      }
                      position="top center fixed"
                      nested
                    >
                      <div className="max-w-lg">
                        <p>
                          Move! It's will reflect soon in your checking account
                        </p>
                      </div>
                    </Popup>
                    <button
                      className="button bg-red-500 text-white px-6 py-2 rounded-md ml-5 hover:bg-black"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </Popup>
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
