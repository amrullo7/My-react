import React, { lazy, Suspense } from 'react'
import Layout from './Layout/Layout'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Products =lazy(()=>import("./Pages/Products"))
const Home =lazy(()=>import("./Pages/Home"))
const About =lazy(()=>import("./Pages/About"))

import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Authflow from './Pages/Authflow';
import Check from './Pages/Check';
import Me from './Pages/Me';
import Wishlist from './Pages/Wishlist';
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:
          <Authflow>

          <Suspense fallback={<div>
            <p>{t("Home")}</p>
            <p>{t("Loading your page please be patient....")}</p>
          </div>}>
                  
            <Home/>
          </Suspense>
          </Authflow>

        },
        {
          path:"shop/:id",
          element:
          <Authflow>

          <Suspense fallback={
            <div> 
              <p>{t("About")}</p>
            <p>{t("Loading your page please be patient....")}</p>
            </div>
          }>
<About/>
          </Suspense>
          </Authflow>
        },
        {
          path:"cart",
          element:
          <Authflow>

          <Suspense fallback={<div>{t("LOADING......")}</div>}>

            <Products/>
          </Suspense>
          </Authflow>
        },{
          path:"wish",
          element:<Wishlist/>
        },
        {
          path:"check",
          element:
          
          <Authflow>

            <Check/>
          </Authflow>
        },{
          path:"me",
          element:
          
          <Authflow>

            <Me/>
          </Authflow>
        },
        {
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