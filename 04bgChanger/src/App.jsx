import { useState } from 'react'
import './App.css'
import Butt from './Butt.jsx'

function App() {
  console.log("app rendered");
  return (
  
    <div className="w-full h-screen duration-200 p-4" >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
           <Butt username="red" />    
           <Butt username="blue" />    
           <Butt username="green" />    
           <Butt username="olive" />    
           <Butt username="purple" />    
           <Butt username="black" />    
           <Butt username="lavender" />    
           <Butt username="orange" />    
       
      </div>

    </div>
    </div>

  )
}

export default App
