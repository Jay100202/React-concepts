import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { setUser } = useContext(UserContext)
  // ye set user kaha se aya  to hamne usercontext me ek state banay tha na like jaha pe hamne props me value pass ki thi
  // to vo value isiliye to passki this kyuki if mujhe vovalue se data chaiye tome sirf user se lelu or if mujhe user me kuch add karna ho to me setuser se add kardu
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }

  // ye to hua ham data bhej rahe aab ham isk oaccess karege to go to profile.js
  return (
    <div>
      <h2>Login</h2>

      <input
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        type="text" placeholder='username' />
      <input
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        type="password" placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
