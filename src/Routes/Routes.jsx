import Main from '../Layout/Main.jsx';
 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../pages/Home/Home/Home.jsx';
import Menu from '../pages/Home/Menu/Menu/Menu.jsx';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        }
      ]
    },
 
  ]);