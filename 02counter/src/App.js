import {useState} from "react"


function App() {

  // useState() // ye kya kam karti he basically apke state ko change karti he basically 
  // iska matlab ye he nai ki ye value change karega apka iss change ko propogate kiya jata he hamare ui ke andar mean shamare DOM ke andar 
   
  // let counter = 5;
  const [counter,setCounter] = useState(5);// this 5 is basically a defult value jo ham denge 
  // setcounter kya he basically ek function he jo ki responsible he counter ko update karne ke liye counter me abhi initially 5 he deafult value  

  const addValue = ()=>{
    console.log("clicked",counter)
    // counter = counter + 1;
    // now hamne ye code likha he without using state and all to hamne iske baad value log me
    // 5 se 6 hui jaab hamne add ka button dabaya tab pr like ui me change nai hua 
    // so yaha problem arahi he ui updation me yahi pe react ki major power ati he 
    // like hamne pehle video me baat ki thi like react me ek button me 5-6 chiz update hoti he to react kya bolta he ke ye chiz 
    // aap nai karoge update ye chiz me karuga update to ye chiz hoga react-hooks se
    // so now we will use the hook
    if(counter >= 20){
      return
    }
    setCounter(counter+1);
  }

  const removeValue = () =>{
    if(counter <= 0){
      return
    }
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick= {addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
