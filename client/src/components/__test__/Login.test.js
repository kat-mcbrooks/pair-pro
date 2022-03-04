import React from 'react'
import Login from '../Login'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"


test('Submit button', () => {
    render(<Login />);
    const addBtn = screen.getByTestId("add-btn");

    expect(addBtn.textContent).toBe("Submit")

})

test('Login phrase', () => {
    render(<Login />);
    const loginEl = screen.getByTestId("login phrase");

    expect(loginEl.textContent).toBe("Log in and pair up")

})

test('Login text', () => {
    render(<Login />);
    const loginEl = screen.getByTestId("login text");

    expect(loginEl.textContent).toBe("Login")

})

test('Email input field', () => {
    render(<Login />);
    const inputEl = screen.getByTestId("email input");

    expect(inputEl.value).toBe()

})

test('Password input field', () => {
    render(<Login />);
    const inputEl = screen.getByTestId("password input");

    expect(inputEl.value).toBe()

})






