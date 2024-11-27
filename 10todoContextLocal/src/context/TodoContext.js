import { createContext,useContext } from "react";

export const TodoContext = createContext({
    // now ye he hamari peoperties
    todos:[{
        id:1,
        todo:'Todo message',
        completed : false
    },],
   // aab ham likhege functionalities
   // ye like aap jab add click karoge to ye functionality trigger hogi usme aap ye todo paas karoge uparjo he Todo message karke
   // aab ye kam kya karegi vo uki functioality ha vo add vale page pe likhege
   addTodo : (todo) =>{},
   updateTodo :(id,todo) =>{},
   deleteTodo :(id) =>{},
   toggleComplete:(id) => {}
})

// to ye basically kya karta he like jab bhi useContext karoge to usko ek contetx dena padega like
// kiske bare me tum baat kar rahe ho jese aap todos ke bare me baat kar rahe , login ke bare me baat kar rahe 
// dashboard ke bare me and all 
export const useTodo = () =>{
    return useContext(TodoContext)
}

// fir ham provider bhi yaha se export karte he kyuki ham ye nai chahte ki main file ke andar saab wrap karna padega like 
// todocontext.provider vo nai krna he to sidha ham variable hi export kardete he
export const TodoProvider = TodoContext.Provider