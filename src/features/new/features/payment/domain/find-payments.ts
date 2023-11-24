import { OwnerPayment } from "./Payment.ts";

export interface FindPayments {
  findAll(): OwnerPayment;
}
