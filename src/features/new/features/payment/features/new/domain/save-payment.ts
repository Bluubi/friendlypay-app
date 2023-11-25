import { Payment } from "../../../domain/Payment.ts";

export interface SavePayment {
  save(payment: Omit<Payment, "timestamp">): void;
}
