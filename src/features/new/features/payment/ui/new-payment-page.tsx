import { Button } from "../../../../shared/Button/Button.tsx";
import { ControlGroup } from "../../../../shared/Form/Control-Group.tsx";
import { paymentControls as controls } from "../domain/Payment.ts";
import { CreatePayment } from "./new-payment.ts";

export const NewPaymentPage = () => {
  return (
    <>
      <form onSubmit={CreatePayment}>
        <ControlGroup controls={controls()}></ControlGroup>

        <div>
          <Button label={"Create payment"}> </Button>
        </div>
      </form>
    </>
  );
};
