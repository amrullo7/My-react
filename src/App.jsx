import React from 'react'
import Layout from './Layout/Layout'
import About from './Pages/About'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Products from './Pages/Products'
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"products",
          element:<Products/>
        },
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