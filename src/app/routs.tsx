import { Layout } from "../pages/layout";
import { MainPage } from "../pages/main";


export const routes = [
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <MainPage/>
            }
        ]
    }
]