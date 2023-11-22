import { CONTROL } from "../../../../shared/Form/control-type.ts";

export const PAYMENT_CONTROLS: CONTROL[] = [
  {
    id: "owner",
    label: "Payment's owner",
    type: "string",
    readonly: false,
    required: true,
    initialValue: "",
  },
  {
    id: "amount",
    label: "Amount",
    type: "number",
    readonly: false,
    required: true,
    initialValue: 0,
  },
  {
    id: "activity",
    label: "Name of activity",
    type: "string",
    readonly: false,
    required: true,
    initialValue: "",
  },
];
