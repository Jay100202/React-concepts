
import { useState } from 'react'


function App() {

  const [color, setColor] = useState("");

  // so what will be the first approach in this 
  // to like first approach saab yahi sochte he ki button me onclick lelege jab uspe click hoga tab apan state change kara dege 
  // now ye onlick kya he ek function he like usko kya chaiye function chaoye 
  // to if ham esa likh de like onclick = {setcolor("red")}// iska matlab ye he ki apne onclick ko red return kiya balki onclick ko return value nai chaiye usko function chaiye 
  // so we can use callback
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "white" }}>White</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "violet" }}>Violet</button>
        </div>
      </div>
    </div>


  )
}

export default App
