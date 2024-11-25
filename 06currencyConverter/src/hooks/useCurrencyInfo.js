
// function hello(){
//     return []
// } // so this is also a custom hook

import { useEffect,useState } from "react";

function useCurrencyInfo(currency){

    const [data,setData] = useState({})
    //now yaha me ek api call karana chahata hu like jab ye hook load hoga tab me ye api call karana chahata hu and all
    useEffect(() =>{
        console.log(currency)
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        
        .then((res) => res.json())
        .then((res) => setData(res.currency))
    },[currency])
    
    console.log
    return data;
}

export default useCurrencyInfo

// this is all about how we create the custom hooks
//  now we will see about components how we can reuse the same components 