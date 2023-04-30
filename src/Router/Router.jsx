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
        loader: ({params})=> fetch(`https://the-dragon-news-server-mobassherkhandakar.vercel.app/catagories/${params.id}`)
      }
    ]
  },{
    path: "news",
    element: <NewsLayout/>,
    children: [
      {
        path: ":id",
        element: <News/>,
        loader: ({params})=> fetch(`https://the-dragon-news-server-mobassherkhandakar.vercel.app/news/${params.id}`)
      }
    ]
  }
])
export default router