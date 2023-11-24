import { container } from "tsyringe";
import { NewPaymentRepository } from "../features/new/features/payment/domain/new-payment-repository.ts";
import { NewPaymentCmdLocalStorageRepository } from "../features/new/features/payment/infrastructure/new-payment-cmd-local-storage-repository.ts";
container.register<NewPaymentRepository>("NewPaymentRepository", {
  useClass: NewPaymentCmdLocalStorageRepository,
});
