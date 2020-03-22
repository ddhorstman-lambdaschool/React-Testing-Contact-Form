import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import "@testing-library/jest-dom/extend-expect";

test("renders App without crashing", () => {
  render(<App />);
});

test("contains a first name field", () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText(/first name/i));
});

test("contains a last name field", () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText(/last name/i));
});

test("contains an email field", () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText(/email/i));
});

test("contains a message field", () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText(/message/i));
});