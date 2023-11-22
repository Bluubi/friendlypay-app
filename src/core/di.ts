import { container } from "tsyringe";
import { NewPaymentRepository } from "../features/new/features/payment/domain/new-payment-repository.ts";
import { NewPaymentCmdLocalhostRepository } from "../features/new/features/payment/infrastructure/new-payment-cmd-localhost-repository.ts";
container.register<NewPaymentRepository>("NewPaymentRepository", {
  useClass: NewPaymentCmdLocalhostRepository,
});
