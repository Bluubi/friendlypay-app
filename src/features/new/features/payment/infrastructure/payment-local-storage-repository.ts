import { PaymentRepository } from "../domain/payment-repository.ts";
import {
  Owner,
  OwnerPayment,
  Payment,
  Payments,
  StoredPayment,
} from "../domain/Payment.ts";

import { injectable } from "tsyringe";

@injectable()
export class PaymentLocalStorageRepository implements PaymentRepository {
  dataName = "payments";
  save({ owner, ...payment }: StoredPayment): boolean {
    const store = getStore(this.dataName);
    if (!store) {
      createPayments(this.dataName, { owner, ...payment });
      return true;
    }

    if (hasOwnerAlreadyStoredPayments(store, owner)) {
      const { payments } = store[owner];
      payments.push(payment);
      storePayment(this.dataName, store, owner, [...payments]);
      return true;
    } else {
      const payments = [payment];
      storePayment(this.dataName, store, owner, payments);
      return true;
    }
  }

  find(ownerName: Owner): Payments {
    return getStoreFromOwner(getStore(this.dataName), ownerName);
  }

  findAll(): OwnerPayment {
    return getStore(this.dataName)!;
  }
}

function getStore(dataName: string) {
  return JSON.parse(localStorage.getItem(dataName)!) as OwnerPayment;
}

function createPayments(
  dataName: string,
  { owner, ...payment }: StoredPayment,
) {
  localStorage.setItem(
    dataName,
    JSON.stringify({
      [owner]: {
        payments: [payment],
      },
    }),
  );
}

function getStoreFromOwner(store: OwnerPayment, owner: string): Payments {
  return store[owner];
}

function hasOwnerAlreadyStoredPayments(store: OwnerPayment, owner: string) {
  return getStoreFromOwner(store, owner) !== undefined;
}

function storePayment(
  dataBaseName: string,
  store: OwnerPayment,
  owner: string,
  payments: Payment[],
) {
  localStorage.setItem(
    dataBaseName,
    JSON.stringify({
      ...store,
      [owner]: {
        payments: [...payments],
      },
    }),
  );
}
