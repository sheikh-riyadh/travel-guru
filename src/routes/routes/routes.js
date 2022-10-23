import { createBrowserRouter } from "react-router-dom";
import Booking from "../../components/Booking/Booking";
import Home from "../../components/Home/Home";
import HotelDetails from "../../components/HotelDetails/HotelDetails";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000')
            }, {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000')
            }, {
                path: '/booking',
                element: <Booking></Booking>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Registration></Registration>
            }, {
                path: '/details',
                element: <HotelDetails></HotelDetails>
            }
        ]
    }
])