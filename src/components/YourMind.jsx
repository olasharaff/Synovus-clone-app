import React from 'react'
import { YourMinds } from './SliderData'

export default function YourMind() {
  return (
    <div className="flex justify-end flex-col my-36">
      <div className="flex justify-center">
        <h1 className="text-6xl text-red-500">What's on your Mind?</h1>
      </div>
      <div className="flex justify-end px-9 items-center gap-4 mt-20">
        {YourMinds.map((item, index) => (
          <div className="relative" key={index}>
            <img src={item.pic} alt="" className="rounded-full w-[300px]" />
            <div className="absolute bottom-32 left-10">
              <h1 className="text-2xl text-white font-extrabold border-b-8 border-[#14b5d1] pb-2">
                {item.content}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
