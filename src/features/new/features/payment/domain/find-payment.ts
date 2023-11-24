import { Owner, Payments } from "./Payment.ts";

export interface FindPayment {
  find(owner: Owner): Payments;
}
