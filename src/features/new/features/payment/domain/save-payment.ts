import { Payment } from "./Payment.ts";

export interface SavePayment {
  save(payment: Payment): void;
}
