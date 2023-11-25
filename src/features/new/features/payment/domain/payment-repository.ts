import { FindPayment } from "./find-payment.ts";
import { SavePayment } from "../features/new/domain/save-payment.ts";
import { FindPayments } from "./find-payments.ts";

export interface PaymentRepository
  extends FindPayment,
    SavePayment,
    FindPayments {}
