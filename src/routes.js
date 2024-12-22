
import {
    HOME_ROUTE,
    PROVIDERS_ROUTE,
    SALE_ROUTE,
    TARIFFS_ROUTE,
    RATINGS_ROUTE

} from "./utils/consts";

import Home from "./pages/Home";
import Providers from "./pages/Providers";
import Ratings from "./pages/Ratings";
import Sale from "./pages/Sale";
import Traffics from "./pages/Tariffs";


export const publicRoutes = [

    {
        path: HOME_ROUTE,
        Component: Home


    },
    {path: PROVIDERS_ROUTE,
        Component: Providers},

    {path: SALE_ROUTE,
        Component: Sale},

    {path:  TARIFFS_ROUTE,
        Component: Traffics},

    {path: RATINGS_ROUTE,
        Component: Ratings},
]