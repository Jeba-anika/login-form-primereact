import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;