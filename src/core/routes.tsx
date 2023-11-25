import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App.tsx";
import { NewPaymentPage } from "../features/new/features/payment/features/new/ui/NewPaymentPage.tsx";
import { Footer } from "../shared/Footer/Footer.tsx";
import styles from "./routes.module.css";
import {PaymentPage} from "../features/new/features/payment/ui/PaymentPage.tsx";
import {container} from "tsyringe";
import {PaymentRepository} from "../features/new/features/payment/domain/payment-repository.ts";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div className={styles.flex}>
        <Outlet />
          <Footer />
      </div>
    ),
    children: [
      {
        path: "",
        element: <>
                  <App />
                  <PaymentPage />
        </>,
        loader: () => {
          const findAllPaymentsQry = container.resolve<PaymentRepository>("PaymentRepository");
          return findAllPaymentsQry.findAll();
        }
      },
      {
        path: "new/payment",
        element: <NewPaymentPage />,
      },
    ],
  },
]);
