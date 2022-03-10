import React from 'react'
import LoginPage from '../LoginPage'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"


test('Submit button', () => {
    render(<LoginPage />);
    const addBtn = screen.getByTestId("add-btn");

    expect(addBtn.textContent).toBe("Log in")

})

test('Login phrase', () => {
    render(<LoginPage />);
    const loginEl = screen.getByTestId("login phrase");

    expect(loginEl.textContent).toBe("Welcome back to PairPro!")

})

test('Login text', () => {
    render(<LoginPage />);
    const loginEl = screen.getByTestId("login text");

    expect(loginEl.textContent).toBe("Login")

})

test('Email input field', () => {
    render(<LoginPage />);
    const inputEl = screen.getByTestId("email input");

    expect(inputEl.value).toBe()

})

test('Password input field', () => {
    render(<LoginPage />);
    const inputEl = screen.getByTestId("password input");

    expect(inputEl.value).toBe()

})

test('Logout button is not on login page', () => {
    render(<LoginPage />);
    const noLogout = screen.queryByText("Logout");

    expect(noLogout).not.toBeInTheDocument();

})





