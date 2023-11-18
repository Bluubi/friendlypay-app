import { Payment } from "./Payment.ts";

export interface NewPaymentRepository {
  execute(payment: Payment): void;
}
