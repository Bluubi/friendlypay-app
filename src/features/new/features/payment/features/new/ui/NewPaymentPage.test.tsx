import "reflect-metadata";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewPaymentPage } from "./NewPaymentPage.tsx";

describe("<NewPaymentPage />", () => {
  it("should render", async () => {
    render(<NewPaymentPage />);

    const ownerInput = await screen.findByTestId("owner");
    const amountInput = await screen.findByTestId("amount");
    const activityInput = await screen.findByTestId("activity");
    const submit = await screen.findByTestId("submit");

    await userEvent.type(ownerInput, "Peter");
    await userEvent.type(amountInput, "20");
    await userEvent.type(activityInput, "Presents");

    await userEvent.click(submit);
  });
});
