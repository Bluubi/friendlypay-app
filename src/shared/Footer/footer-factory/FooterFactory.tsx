import { NewPaymentFooter } from "../new-payment-footer/NewPaymentFooter.tsx";
import { GoBackFooter } from "../go-back-footer/GoBackFooter.tsx";

export const FooterContainerFactory = (path: string): JSX.Element => {
  console.log(path);
  return FooterPresenter.get(path)!;
};

const FooterPresenter = new Map<string, JSX.Element>([
  ["/", <NewPaymentFooter />],
  ["/new/payment", <GoBackFooter />],
]);
