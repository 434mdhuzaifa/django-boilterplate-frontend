import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import MailRequest from './MailRequest.jsx';
import ResetPassword from './ResetPassword.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
    mutations: {
      retry: 2,
    },
  },
});
const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/mailrequest",
        element:<MailRequest></MailRequest>
      },
      {
        path:"/passwordreset",
        element:<ResetPassword></ResetPassword>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
