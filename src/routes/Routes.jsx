import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts/Mainlayouts";
import Homepage from "../pages/Homepage/Homepage";
import Books from '../pages/Books/Books';
import NoRoutesError from "../pages/error/NoRoutesError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
    errorElement: <NoRoutesError/>
  },
]);
