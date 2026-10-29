import React, { lazy, Suspense } from 'react'
import Layout from './Layout/Layout'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Products =lazy(()=>import("./Pages/Products"))
const Home =lazy(()=>import("./Pages/Home"))
const About =lazy(()=>import("./Pages/About"))

import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
                                            

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:

          <Suspense fallback={<div>
            <p>Home</p>
            <p>Loading your page please be patient....</p>
          </div>}>
                  
            <Home/>
          </Suspense>
        },
        {
          path:"about",
          element:

          <Suspense fallback={
            <div> 
              <p>About </p>
            <p>Loading your page please be patient....</p>
            </div>
          }>
<About/>
          </Suspense>
        },
        {
          path:"products",
          element:
          <Suspense fallback={<div>LOADING......</div>}>

            <Products/>
          </Suspense>
        },{
          path:"login",
          element:<Login/>
        }
      ]
    },{
      path:"*",
      element:<NotFound/>
    }
  ])
  return (
    <div>
<RouterProvider  router={router} />
    </div>
  )
}

export default App