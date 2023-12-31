import { Button } from "../../../../../../../shared/Button/Button.tsx";
import styles from "./new-payment-page.module.css";
import {
  ControlGroup,
  getControlInput,
} from "../../../../../../../shared/Form/ui/ControlGroup.tsx";
import { PAYMENT_CONTROLS } from "../../../domain/payment-controls.ts";
import * as REACT from "react";
import { container } from "tsyringe";
import { PaymentRepository } from "../../../domain/payment-repository.ts";
import "./new-payment-page.module.css";
import Svg from "../../../../../../../shared/Svg/Svg.tsx";
import SVG from "../../../../../../../core/svg.ts";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

export const NewPaymentPage = () => {
  const formRef = useRef<HTMLFormElement>();
  const newPayment = (event: REACT.FormEvent) => {
    event.preventDefault();

    const savePaymentCmd =
      container.resolve<PaymentRepository>("PaymentRepository");

    const payment = {
      owner: getControlInput('[name="owner"]').value,
      amount: Number(getControlInput('[name="amount"]').value),
      activity: getControlInput('[name="activity"]').value,
    };

    savePaymentCmd.save(payment);
    formRef.current?.reset();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> New payment </h1>
      <p className={styles.subtitle}>
        {" "}
        Introduce the data related with your payment
      </p>
      <Svg src={SVG.LARRY_WITH_FRIEND} alt={""} />
      <form
        className={styles.form}
        onSubmit={(event) => newPayment(event)}
        ref={formRef}
      >
        <ControlGroup controls={PAYMENT_CONTROLS}></ControlGroup>
        <Button action={() => newPayment} type={"submit"}>
          <span> Create your payment </span>
        </Button>
      </form>
      <Outlet />
      <div className={styles.modal}></div>
    </div>
  );
};
