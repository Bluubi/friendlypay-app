import {useLoaderData} from "react-router";
import {useEffect, useState} from "react";
import {OwnerPayment} from "../domain/Payment.ts";
import {PaymentCard} from "./card/PaymentCard.tsx";


export const PaymentPage = () => {
    const [ payments, setPayments ] = useState<OwnerPayment>({})
    const loadedPayments = useLoaderData() as OwnerPayment;

    useEffect( () => {
        setPayments(loadedPayments);
    }, [payments]);

    return ( <PaymentCard payments={payments}></PaymentCard>)
}
