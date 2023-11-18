import { Button } from "../../../../shared/Button/Button.tsx";
import { ControlGroup } from "../../../../shared/Form/Control-Group.tsx";
import { paymentControls as controls } from "../domain/Payment.ts";

export const NewPaymentPage = () => {
  const CreatePayment = (event: Event) => {
    event.preventDefault();

    const owner = (document.querySelector('[name="owner"]') as HTMLInputElement)
      .value;
    const amount = (
      document.querySelector('[name="amount"]') as HTMLInputElement
    ).value;
    const activity = (
      document.querySelector('[name="activity"]') as HTMLInputElement
    ).value;

    console.log(owner, activity, amount);
  };

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
