import React from 'react'

export default function Goal() {
  return (
    <div className="flex justify-end">
      <div className="max-w-5xl flex flex-wrap px-6 gap-4 mb-8 border-t-8 border-red-500 py-36">
        <div className="lg:max-w-xs max-w-lg px-3">
          <h1 className="text-6xl text-red-500 mb-6">
            Let's get to know each other
          </h1>
          <p className="text-[17.4px] mb-8">
            Synovus is in the goals business, and we want to know yours. Whether
            your financial aspirations are personal or for your business, we can
            help you reach them.
          </p>
          <h1 className="text-2xl font-extrabold">Where we are</h1>
        </div>
        <div>
          <img
            src="https://www.synovus.com/-/media/images/local/home-page/synovus/bridge.jpg"
            alt=""
            className="mb-4"
          />
          <select id="dropdown" className="border p-2  w-full rounded-md">
            <option value="" className='text-sm font-light'>Choose your community</option>
            <option value="option1">Dothan</option>
            <option value="option2">Birmingham</option>
            <option value="option3">Huntsville</option>
            <option value="option1">Miami</option>
            <option value="option2">Orlando </option>
            <option value="option3">Jacksonville</option>
            <option value="option1">Palm Beach</option>
            <option value="option2">Sarasota</option>
            <option value="option3">Tampa Bay</option>
          </select>
        </div>
      </div>
    </div>
  );
}
