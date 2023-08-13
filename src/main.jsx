import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Profile from './components/Profile/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
