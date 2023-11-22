import { NewPaymentRepository } from "../domain/new-payment-repository.ts";
import { Payment } from "../domain/Payment.ts";

import { injectable } from "tsyringe";

@injectable()
export class NewPaymentCmdLocalhostRepository implements NewPaymentRepository {
  execute({ owner, ...payment }: Payment): boolean {
    localStorage.setItem(owner, JSON.stringify(payment));
    return true;
  }
}
