// now lets create the store here 
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice"

// ye configure store ek objecrt hi lega
export const store = configureStore({
    reducer:todoReducer
}) 


// Now ham banayge reducer now redux toolkit me hamar reducer jo banta he vo thoda alag he
// ham isko bolte he slices nam me kuch nai rakh bus ham naming convention redux toolkit ki rakhte he
// so ekl naya folder banayge features karke aab is featire ke andar like boht kuch ho sdakta he like login feature ho sakta he todo feature and all to abhi ham todo feature dekhkhege


// IMP NOTES

//redux ek alag chiz he and react-redux ek alag chiz he 
// redux core library he and react-redux uska implementation he wiring karne ke liye taki react and redux ki apas me communication ho sake