import { Button } from "../../../../shared/Button/Button.tsx";
import {
  ControlGroup,
  getControlInput,
} from "../../../../shared/Form/Control-Group.tsx";
import { PAYMENT_CONTROLS } from "../domain/payment-controls.ts";
import * as REACT from "react";
import { container } from "tsyringe";
import { NewPaymentRepository } from "../domain/new-payment-repository.ts";
import "./new-payment-page.css";

export const NewPaymentPage = () => {
  const newPayment = (event: REACT.FormEvent) => {
    event.preventDefault();

    const newPaymentRepository = container.resolve<NewPaymentRepository>(
      "NewPaymentRepository",
    );

    const payment = {
      owner: getControlInput('[name="owner"]').value,
      amount: Number(getControlInput('[name="amount"]').value),
      activity: getControlInput('[name="activity"]').value,
    };

    newPaymentRepository.execute(payment);
  };

  return (
    <div className={"bottom-sheet"}>
      <form onSubmit={(event) => newPayment(event)}>
        <ControlGroup controls={PAYMENT_CONTROLS}></ControlGroup>
        <div>
          <Button label={"Create payment"}> </Button>
        </div>
      </form>
    </div>
  );
};
