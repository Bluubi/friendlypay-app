import { ComponentProps } from "react";
import { OwnerPayment } from "../../domain/Payment.ts";
import styles from "./payment-card.module.css";
import { Card } from "../../../../../../shared/Card/Card.tsx";

type PaymentCardProps = ComponentProps<"div"> & {
  payments: OwnerPayment;
};

export const PaymentCard = ({ payments }: PaymentCardProps) => {
  function render() {
    if (payments) {
      const owners = Object.keys(payments);

      return owners.map((owner) => {
        const allPayments = payments[owner].payments;
        return allPayments.map((payment, index) => {
          return (
            <Card key={index}>
              <h3> Owner: </h3> <h4>{owner} </h4>
              <p> Activity: {payment.activity}</p>
              <p> Amount: {payment.amount}€ </p>
            </Card>
          );
        });
      });
    }
  }

  return <section className={styles.container}>{render()}</section>;
};
