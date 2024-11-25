import React from 'react'


// Method 1
// function Card(props) {
//     console.log("props", props) // now this props is empty 
//     // to isko ese bharakese jaye taki isme value kuch a paye to like jaha hamne ye card render kiya vaha hamne kuch bhi valoue pass ki to vo yaha props me ajaygi
//     // to aab aygi ye value so iski ek or method hoti he props ko likhne ki 
//     return (

//         <div className="flex flex-col rounded-xl  p-4"
//             style={{
//                 border: '0.88px solid',

//                 backdropFilter: 'saturate(180%) blur(14px)',
//                 background: ' #ffffff0d',
//             }}
//         >
//             <div>
//                 <img
//                     src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
//                     alt="nft-gif"
//                     width="400"
//                     height="400"
//                     className="rounded-xl"
//                 />
//             </div>
//             <div className="flex flex-col  rounded-b-xl py-4 ">
//                 <div className="flex justify-between">
//                     <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
//                     <h1 className="font-bold font-RubikBold">Price</h1>
//                 </div>
//                 <div className="flex  justify-between font-mono">
//                     <p>#345</p>
//                     <p>0.01</p>
//                 </div>
//             </div>
//         </div>


//     )
// }

//Method 2
function Card({ username, btnText }) {
    console.log("username", username,) // now this props is empty 
    // to isko ese bharakese jaye taki isme value kuch a paye to like jaha hamne ye card render kiya vaha hamne kuch bhi valoue pass ki to vo yaha props me ajaygi
    // to aab aygi ye value so iski ek or method hoti he props ko likhne ki 
    return (

        <div className="flex flex-col rounded-xl  p-4"
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
                    <h1 className="font-RubikBold ">{username}</h1>
                    <h1 className="font-bold font-RubikBold">{btnText}</h1>
                </div>
                <div className="flex  justify-between font-mono">
                    <p>#345</p>
                    <p>0.01</p>
                </div>
            </div>
        </div>


    )
}

export default Card