import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import PartPage from "./pages/PartPage";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {index: true, element:<HomePage/>},
            {path:"/part", element:<PartPage/>}
        ]
    }
])

export default router;
