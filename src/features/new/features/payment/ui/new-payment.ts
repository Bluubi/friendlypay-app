import { getControlInput } from "../../../../shared/Form/Control-Group.tsx";
import { Payment } from "../domain/Payment.ts";

export const CreatePayment = (event: Event) => {
  event.preventDefault();

  const payment: Payment = {
    owner: getControlInput('[name="owner"]').value,
    amount: Number(getControlInput('[name="amount"]').value),
    activity: getControlInput('[name="activity"]').value,
  };

  localStorage.setItem(payment.owner, JSON.stringify([payment]));
};
