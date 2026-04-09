import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayouts from './layouts/Mainlayouts/Mainlayouts';
import Homepage from './pages/Homepage/Homepage';
import Books from './pages/Books/Books';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts/>,
    children: [
      {
        index : true , 
        element : <Homepage/>
      },  
      {
        path: "/books",
        element: <Books/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
