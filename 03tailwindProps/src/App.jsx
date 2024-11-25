import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
function App() {

  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1, 2, 3, 4]

  // to now we woll learn about props to props kya hota he basicalluy 
  // props hamare componnent ko banata he reusable like ek baar ye card bana diya to kyu na isko ek component me erakha jaye or fir usko baar baar use kiya jaye 

  // to yaha niche jo hamne card ke liye chizin likhi ku na usko yuaha se hata ke ek naya component me bana du or fir isko use kardu yaha 
  // to sorc ke andar ek naya folder banake component nam ka and fir usme bola card,jsx
  return (
    <>
      <h1 className='bg-green-400 text-blackp-4 rounded-xl'>Tailwind test</h1>
      {/* <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',

          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div> */}
      {/* <Card channel="chaiaurcode" myArr= [1,2,3] myArr={name:"chai"}/> */}
      {/* this is how u pass the props here but u cannot pass array like this here
      so to pass array we will pass something as object but its still telling no 
      so to get this if iput the variable at the top like myobject and this is how we pass array also */}

      <Card username="chaiaurcode" someObject={myObj} someArr={newArr} btnText="click me" />
      {/* this is how we get the card from the componernt we created  */}
      <Card username="hitesh" btnText="visit me" />
      {/* Now yaha to ye do cards agaye like now maanlo apka data cards me alag alag he to fir kese ka rsakte he aap like 
      to ye saab hoga props se  */}
    </>
  )
}

export default App
