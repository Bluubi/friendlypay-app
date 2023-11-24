import { NewPaymentRepository } from "../domain/new-payment-repository.ts";
import { Payment } from "../domain/Payment.ts";

import { injectable } from "tsyringe";

@injectable()
export class NewPaymentCmdLocalStorageRepository
  implements NewPaymentRepository
{
  execute({ owner, ...payment }: Payment): boolean {
    const hasOwner = localStorage.getItem(owner);
    if (!hasOwner) {
      return this.storePayment({ owner, ...payment });
    }
    const payments = JSON.parse(hasOwner!) as Payment[];
    payments.push({ owner, ...payment });
    console.log(payments);
    return true;
  }

  private storePayment({ owner, ...payment }: Payment) {
    localStorage.setItem(owner, JSON.stringify(payment));
    const storedCorrectly = localStorage.getItem(owner);
    return storedCorrectly !== null;
  }
}
