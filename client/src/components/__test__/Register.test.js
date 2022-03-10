import React from 'react'
import RegisterPage from '../RegisterPage'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('RegisterPage', () => {
    render(<RegisterPage />);
    const headerEl = screen.getByTestId("register text");

    expect(headerEl.textContent).toBe("Sign Up Here")   
})

test('RegisterPage phrase', () => {
    render(<RegisterPage />);
    const headerEl = screen.getByTestId("register phrase");

    expect(headerEl.textContent).toBe("You'll be Pair Programming in no time!")   
})


test('Name input field', () => {
    render(<RegisterPage />);
    const inputEl = screen.getByTestId("name input");

    expect(inputEl.value).toBe()

})

test('Email input field', () => {
    render(<RegisterPage />);
    const inputEl = screen.getByTestId("email input");

    expect(inputEl.value).toBe()

})

test('Password input field', () => {
    render(<RegisterPage />);
    const inputEl = screen.getByTestId("password input");

    expect(inputEl.value).toBe()

})


test('Confirm password input field', () => {
    render(<RegisterPage />);
    const inputEl = screen.getByTestId("confirm password input");

    expect(inputEl.value).toBe()

})

test('Languages input field', () => {
    render(<RegisterPage />);
    const inputEl = screen.getByTestId("languages input");

    expect(inputEl.value).toBe()

})

test('Bio input field', () => {
    render(<RegisterPage />);
    const inputEl = screen.getByTestId("bio input");

    expect(inputEl.value).toBe()

})

test('Submit button', () => {
    render(<RegisterPage />);
    const addBtn = screen.getByTestId("add-btn");

    expect(addBtn.textContent).toBe("Submit")
})
test('Logout button is not on register page', () => {
    render(<RegisterPage />);
    const noLogout = screen.queryByText("Logout");

    expect(noLogout).not.toBeInTheDocument();

})