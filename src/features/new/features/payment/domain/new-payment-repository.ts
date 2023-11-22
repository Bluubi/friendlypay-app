import { Payment } from "./Payment.ts";

export interface NewPaymentRepository {
  execute(payment: Omit<Payment, "owner">): boolean;
}
