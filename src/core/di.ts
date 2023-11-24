import { container } from "tsyringe";
import { PaymentLocalStorageRepository } from "../features/new/features/payment/infrastructure/payment-local-storage-repository.ts";
import { PaymentRepository } from "../features/new/features/payment/domain/payment-repository.ts";

container.register<PaymentRepository>("PaymentRepository", {
  useClass: PaymentLocalStorageRepository,
});
