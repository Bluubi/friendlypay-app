import { NewPaymentRepository } from "../domain/new-payment-repository.ts";
import { Payment } from "../domain/Payment.ts";

export class NewPaymentLocalhostRepository implements NewPaymentRepository {
  execute(payment: Payment): void {
    localStorage.setItem("payment", JSON.stringify(payment));
  }
}
