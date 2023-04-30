import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/Home/Catagory/Catagory";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },{
        path: "/catagory/:id",
        element: <Catagory/>,
        loader: ({params})=> fetch(`http://localhost:5000/catagories/${params.id}`)
      }
    ]
  },{
    path: "news",
    element: <NewsLayout/>,
    children: [
      {
        path: ":id",
        element: <News/>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
])
export default router