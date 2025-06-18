import { useState ,useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,  setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null) // this is used to show selection to user without it  also it copies

  const copyPasswordToClip = useCallback(() =>{
    passwordRef.current.select();
    //passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])


const passwordGenerator = useCallback(() => {
  let pass=""
  let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
  if(numAllowed) str+="0123456789"
  if(charAllowed) str+= "!@#$%^&*+_=~"

  for(let i=1;i <= length; i++){
    let char=Math.floor(Math.random()*str.length +1)
    pass += str.charAt(char)
  }

  setPassword(pass)

    }, [length,numAllowed,charAllowed])
  
    useEffect(() => {passwordGenerator()}, [length, numAllowed , charAllowed,passwordGenerator])

  
    return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-10 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-7'>
     <input 
        type="text"
        value={password}
        className='outline-none w-full py-3 px-3 bg-white text-gray-500 my-3 rounded-lg'
        placeholder='Password'
        readOnly
        ref={passwordRef}
     />
     <button onClick={copyPasswordToClip} classNAme='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

     </div>
     <div className='flex test-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={60}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={numAllowed}
        id="numberInput"
        onChange={() => {setNumAllowed((prev) => !prev);}}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={charAllowed}
        id="charInput"
        onChange={() => {setCharAllowed((prev) => !prev);}}
        />
        <label htmlFor="charInput">Characters</label>

      </div>
     </div>
     </div>
    </>
  )
}

export default App
