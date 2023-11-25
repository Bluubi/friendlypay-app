import {ComponentProps} from "react";
import {OwnerPayment} from "../../domain/Payment.ts";
import styles from "./payment-card.module.css";

type PaymentCardProps = ComponentProps<'div'> & {
    payments: OwnerPayment;
}

export const PaymentCard = ({ payments}: PaymentCardProps) => {
    function render() {
        if(payments === null) {
            return (<></>)
        }
        const owners = Object.keys(payments);

        return owners.map( owner => {
            const allPayments = payments[owner].payments;
            return allPayments.map( payment => {
                return (
                    <div className={styles.card}>
                        <h3> Owner: </h3> <h4>{ owner } </h4>
                        <p> Activity: { payment.activity }</p>
                        <p> Amount: { payment.amount }€ </p>
                        { payment.description !== undefined ? <p>Brief description: { payment.description }</p> : <small className={styles.empty}>No description provided</small> }
                    </div>)
            })
        })

    }

    return (
           <section className={styles.container}>
               {render()}
           </section>
    )
}
