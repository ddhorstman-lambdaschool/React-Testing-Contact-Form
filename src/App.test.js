import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import "@testing-library/jest-dom/extend-expect";

test("renders App without crashing", () => {
  render(<App />);
});

test("contains all relevant fields", () => {
  const { getByPlaceholderText } = render(<ContactForm />);

  expect(getByPlaceholderText(/first name/i));
  expect(getByPlaceholderText(/last name/i));
  expect(getByPlaceholderText(/email/i));
  expect(getByPlaceholderText(/message/i));

});

test("displays submssions", () => {

  const Form = render(<ContactForm />);
  act(() => {
    const firstName = Form.getByPlaceholderText(/first name/i);
    const lastName = Form.getByPlaceholderText(/last name/i);
    const email = Form.getByPlaceholderText(/email/i);
    const message = Form.getByPlaceholderText(/message/i);
    const submit = Form.getByRole(/button/i);

    fireEvent.keyPress(firstName, { key: 'd', code: 68, charCode: 68 });
    fireEvent.keyPress(lastName, { key: 'd', code: 68, charCode: 68 });
    fireEvent.keyPress(email, { key: 'd', code: 68, charCode: 68 });
    fireEvent.keyPress(message, { key: 'd', code: 68, charCode: 68 });

    fireEvent.click(submit);
  });

  expect(Form.getByText(/firstName/i));

});
