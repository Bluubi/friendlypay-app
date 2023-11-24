import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App.tsx";
import { NewPaymentPage } from "../features/new/features/payment/ui/NewPaymentPage.tsx";
import { Footer } from "../shared/Footer/Footer.tsx";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "new/payment",
        element: <NewPaymentPage />,
      },
    ],
  },
]);
