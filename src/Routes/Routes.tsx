import { Routes, Route } from "react-router-dom";

import { HomeCatalog } from "../Pages/HomeCatalog";

import { DefaultLayout } from "../layouts/DefaultLayout";
import { Checkout } from "../Pages/Checkout";
import { OrderCompletedSuccess } from "../Pages/OrderCompletedSuccess";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomeCatalog />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order_completed_success" element={<OrderCompletedSuccess />} />
            </Route>
        </Routes>
    )
}