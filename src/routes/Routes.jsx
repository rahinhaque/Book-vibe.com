import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts/Mainlayouts";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import NoRoutesError from "../pages/error/NoRoutesError";
import BookDetails from "../pages/BookDetails/BookDetails";

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
      {
        path: "/booksdetails/:id",
        element: <BookDetails/> ,
        loader : ()=> fetch('/booksData.json')
      },
    ],
    errorElement: <NoRoutesError />,
  },
]);
