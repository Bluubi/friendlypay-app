export type Payment = {
  activity: string;
  amount: number;
  description?: string;
};

export type Owner = string;

export type StoredPayment = Payment & {
  owner: Owner;
};

export type OwnerPayment = {
  [key in string]: Payments;
};

export type Payments = {
  payments: [
    {
      activity: string;
      amount: number;
      description?: string;
    },
  ];
};
