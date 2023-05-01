import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagory from "../pages/Home/Home/Catagory/Catagory";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
const router = createBrowserRouter([
  {
    path:"/",
    element: <LoginLayout/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/catagory/0"></Navigate>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      }
    ]
  },
  {
    path: "/catagory",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Catagory />,
        loader: ({ params }) =>
          fetch(
            `https://the-dragon-news-server-mobassherkhandakar.vercel.app/catagories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) =>
          fetch(
            `https://the-dragon-news-server-mobassherkhandakar.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
