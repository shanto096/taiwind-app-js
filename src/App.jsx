import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Navber/Nav'
import Pricelist from './Component/Pricelist/Pricelist'
import Chat from './Component/chat/Chat'
import PhonePriceChat from './Component/PhonePriceChat/PhonePriceChat'

function App() {

  return (
   <div>
    <Nav></Nav>
    <Pricelist></Pricelist>
    <Chat></Chat>
    <PhonePriceChat></PhonePriceChat>

   </div>
  )
}

export default App
