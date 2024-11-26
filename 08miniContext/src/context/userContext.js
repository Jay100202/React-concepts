// so ye jo context he na like usercontext he usi tarike se hamar login ka context ho sakta he , product ka context ho sakta he multiple context ham bana sakte he

import React from "react";

//PART 1
// now ham context banayge do yte createContext kya he ye ek method he jiss tarah hamara usestate , useEffect method he usi tarah ye he 

const UserContext = React.createContext()

export default UserContext

// part 2 
// Aab hamne ye jo context banaya he to ye context hame deta he ek major chiz vo he hamari provider
// so context he kya context hame ek variable hi to provide kar raha he so end of the day ham is conetx provider k owrapper bana denge
// like ese

{/* <userContext>
   <Login />
   <Card>
      <Dashboard />
    </Card>
<userContext/> */}  
// Now hamne isko sabhi to wrap kar douya userconetxt me to jese hi hamne isko ese wrap kara diya  usercontext me 
// to jese hi hamne usko wrap kara diya to ye banjayga ye provider, provider ka matlab he ki koi bhi hamara component usko access mil jayga ye hamare usercontext ko
// means tum iss context ko global variable hi mano tum means ye usercontext sari ke sare comoonents ke state ka access le sakti he 

// so we will create usercontetxprovider.js

