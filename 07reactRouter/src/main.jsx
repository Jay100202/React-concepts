import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

//METHOD 1
//so ye createrouter browser kya he basically ek method he jiske andar array he 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />

//       }, {
//         path: "about",
//         element: <About />
//       }, {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//METHOD 2

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route

        path="github"
        element={<Github />}
      />
    </Route>
  )
)

// aab ham yaha pe loader ki baat karege basically loader is like hamar github pe api call ho raha he and ham api se data la rahe he 
// to loader ka use kya karega like jese hiapne github vala header pe hower kiya vaha turant hi data lelega vo boht hi jaldi api call kardega 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* in place of rendering this app we will do by using react router stuff 
    we will use something known as Router provider and this router will only works when we pass some props*/}

    <RouterProvider router={router} />

  </StrictMode>,
)
