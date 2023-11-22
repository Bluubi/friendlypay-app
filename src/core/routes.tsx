import { createBrowserRouter } from "react-router-dom";
import { NewPaymentPage } from "../features/new/features/payment/ui/new-payment-page.tsx";
import App from "../App.tsx";
import { Footer } from "../features/shared/Footer/Footer.tsx";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <Footer /> },
      {
        path: "new/payment",
        element: <NewPaymentPage />,
      },
    ],
  },
]);
