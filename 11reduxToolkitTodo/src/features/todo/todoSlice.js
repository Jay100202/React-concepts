import { createSlice, nanoid } from "@reduxjs/toolkit";


// to ye methid jo he createSlice vo hamar slixe bana denga or fir hamne ek or chiz li
//nanoid aab ye nanoid kya he basically like hamne hamare prev todo me id li thi like date.now and all to uski jagah aab ye nanoid lege ye basically hamara unique id banaygi

// to aab kya hoga like iske baad starting me store empty rahega koi unique value rahegi to hamare paas rahega initial state
// initial state can be array, object anything 
const initialState = {
   todos : [{id:1, text:"Hello world"}]
}
function hello() {
    console.log("Hello")
}
// aab ham slice banayge like reducer hi samjo but reducer ka bada version
export const todoSlice = createSlice({
    // aab har ek slice ka unique nam rehta he so 
    name: "todo",
    //  aab ham dete he initial state like haar ek slice ka 
    initialState,

    // aab the important thisng is reducer to reducer me ayga kya hamari properties and function 
    // to function ham bahar likh ke uska refernce yaha call kar sakte he ese 
    reducers: {
        // Method 1
        // addTodo : hello
        // now yah jo function he usme hamesha 2 chix pass hogi
        // state and another is action 
        // so yahichange hhe contect api me like aap function ka declarartion karte the pr uski defination nai likhte the
        // context api addtodo : () => {}
        // to ye state kesi he like jo jo chizeing abhi hamare intialstate me unki hame access degi
        // to ye action kya hote he badically apke paas koi value aye like jese ye remove apne aap to ye remove nai hojayga uski liye hame id lagegi to vo values hame kaha se milegi action me se 
        // action matlab simple jo bhi apka data paas ho raha he
        addTodo: (state, action) => { 
            const todo = {
                id: nanoid(),
                // yaha ye payload object he to usme biht kuch aap badme access kar sakte he
                text: action.payload
            }

            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const todo = state.todos.map((todo) => 
                todo.id = action.payload.id ? { ...todo, text: action.payload } : todo)
            
            state.todos.push(todo);
        }
        
    }
})

// now ye istarah se ecxport nai kiya jat he iska bhi export karne ka ek tarika hota he

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

// now hame ye saab store ko bhi batana padega na gto yaha pe reducer ko export kardo
export default todoSlice.reducer

// now ye karne ke baad go to store.js