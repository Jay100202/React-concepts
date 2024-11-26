import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
    // to hamne ye dekha tha na outlet like upar header fir bichme outlet fir uske niche footer to usi tarah yaha ayga chidren usko as it is use kardo 
    // jese aap usercontetx.provider likhoge to kam nai hopayga like kya chiz access karega vo to ese apko data bhi paas karna padega 

    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {/* aab ye chikldren me ho sakta he card compnnent aye dashboard ke andar or card compnent aye hame usko s it is wrap kardege  */}
            {/* ye value kyu likha idhar like to aap konsi value ka access de rahe ho aap */}
            {children}
        </UserContext.Provider>
    )
}

// aab ham isko access kese karege like to iska access hame kahi bhi like aap.js me kar sakyte ya index.js me kar sakte 

export default UserContextProvider