import { useState, useCallback, useEffect, useRef } from 'react'



function App() {

  // the first thing we required here is alength 
  const [length, setLength] = useState(8);
  const [numberAllowerd, setnumberAllowed] = useState(false)
  const [charactersAllowed, setcharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // ref hook

  const passwordRef = useRef(null);// hamne defauklt value ese null di he
  // to aab isko use karne kie liye like apne input field me jana padega and avah like ref likhna padega
  // ref = {passwordRef}

  // now maanlo ye function hamne bana diya but aab ye chiz he ki ye method baar baar call hoga 
  // like jab number pe click karege tab bhi ye call higa characters pr karege tab ye call hoga length vale me bhi ye call hoga 
  // to baar baa rye chiz call ho rahi he to koi to tarika hoga jisase ham isko optimize kar sake 

  // so iske liye hamare paas ek tarika hota he useCallback 
  // so useCallback is the react hook that lets u cache a function defination between re-renders
  // to iska meaning ye he ki mere paas ek function he usko jitna ho sake aap usko cache me rakhdo 
  // cache matlab usko memory me rakhdo agar me usko vapis se run karo to jitna part pehle ka use hota he usko use kardo  

  // const passwordGenerator = useCallback(fn,dependencies)
  // so this takes two rhings function and dependencies so what is this dependencies this is nothing but a state 
  // like ham length click karege to ye method call hoga , number pe call hoga , characters to ye number ,length, characters ye he dependencies or ye dependencies array ke form me pass hogi

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // this will be noething but alal the password jisase ham password banayge 
    if (numberAllowerd) {
      str += "0123456789"
    }
    if (charactersAllowed) {
      str += "!@#$%^&*()-_=+\|[]{};:/?.>"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowerd, charactersAllowed, setPassword])

  // Now hame esa chaiye like jab bhi hamara page ese refresh ho to ek password ana chaiye to hame ye method call karani padegi like to kese karege 
  // password genertor method hame call karani padegi

  // to ham isko ese kar sakte he kya 
  // passwordGenerator(); // isme hamne call back use kiya he to isliye ye nai work karega 
  // to if mene call back remove kardiya to erro chali jaygi to if mene remove kiya call back then ye 
  // passwordGenerator() lagay then ayga too mene react renders 

  // to iske liye hamare pass ek or hook he vo he useEffect hook

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowerd, charactersAllowed, passwordGenerator])
  // useeffect me dependencies add kyu ki he basically agar kahi pe like length, number, characters me kuch bhi chasnge ho rahi he to vo method run kardo
  // or jo hamare callback me dependency he to vo isliye he ki jis pr dependency he hamari and possible run hoga kese bhi aap uss method ko optimize kardo


  // Now iske baad hamara chiz he like copy jo button hamne banay usko ham kese use karege like 
  // means hamne jab copy ka button dabay to kitne text copy hona chaiye and like hmare code me input text field and button ka ese koi relation hi nai he to kese karege 
  // so for this we have something known as useRefernce stuff

  // so use reference is nothing but like kisi bhi chiz ka mujhe refernce lena hota he tab useRefernce hook ayga 
  // useRef ko use karne ke liye hame usko variable bana na padega toi vo ham upar define karege 

  const copyPasswordToclip = useCallback(() => {

    window.navigator.clipboard.writeText(password)
    // now iscode me passwordref kaha liya hamne ike uske bina hi ye copy vala to chal gay 
    // to hamne ye poassword refernce isliye liye becz like user ko highlight ho ki ha apne ye password copy hua he and all 
    passwordRef.current?.select()
    // we can also select the range
    passwordRef.current?.setSelectionRange(0, 3)
  }, [password])
  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 '>
        <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToclip} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}

            />
            <label> length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowerd}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }}
            />
            <label> Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="characterInput"
              onChange={() => {
                setcharacterAllowed((prev) => !prev)
              }}
            />
            <label> characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
