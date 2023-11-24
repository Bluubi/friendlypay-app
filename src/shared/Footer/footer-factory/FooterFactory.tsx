import { HomeFooter } from "../new-payment-footer/HomeFooter.tsx";
import { NewPaymentPageFooter } from "../go-back-footer/NewPaymentPageFooter.tsx";

export const FooterContainerFactory = (path: string): JSX.Element => {
  console.log(path);
  return FooterPresenter.get(path)!;
};

const FooterPresenter = new Map<string, JSX.Element>([
  ["/", <HomeFooter />],
  ["/new/payment", <NewPaymentPageFooter />],
]);
