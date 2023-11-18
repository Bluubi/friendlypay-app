import { CONTROL } from "../../../../../core/control-type.ts";

export interface Payment {
  owner: string;
  activity: string;
  amount: number;
  description?: string;
}

export function paymentControls(): CONTROL[] {
  return [
    {
      id: "owner",
      label: "Payment's owner",
      type: "string",
      readonly: false,
      initialValue: "",
    },
    {
      id: "amount",
      label: "Amount",
      type: "number",
      readonly: false,
      initialValue: 0,
    },
    {
      id: "activity",
      label: "Name of activity",
      type: "string",
      readonly: false,
      initialValue: "",
    },
  ];
}
