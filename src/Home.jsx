import React from 'react'
import Slider from './components/Slider'
import YourMind from './components/YourMind'
import SignIn from './components/SignIn'
import Goal from './components/Goal'

export default function Home() {
  return (
    <div>
        <Slider/>
        <YourMind/>
        <SignIn/>
        <Goal/>
    </div>
  )
}
