import React from 'react'
import Register from '../Register'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('Register', () => {
    render(<Register />);
    const headerEl = screen.getByTestId("register text");

    expect(headerEl.textContent).toBe("Register")   
})

test('Register phrase', () => {
    render(<Register />);
    const headerEl = screen.getByTestId("register phrase");

    expect(headerEl.textContent).toBe("Please create an account")   
})


test('Name input field', () => {
    render(<Register />);
    const inputEl = screen.getByTestId("name input");

    expect(inputEl.value).toBe()

})

test('Email input field', () => {
    render(<Register />);
    const inputEl = screen.getByTestId("email input");

    expect(inputEl.value).toBe()

})

test('Password input field', () => {
    render(<Register />);
    const inputEl = screen.getByTestId("password input");

    expect(inputEl.value).toBe()

})


test('Confirm password input field', () => {
    render(<Register />);
    const inputEl = screen.getByTestId("confirm password input");

    expect(inputEl.value).toBe()

})

test('Languages input field', () => {
    render(<Register />);
    const inputEl = screen.getByTestId("languages input");

    expect(inputEl.value).toBe()

})

test('Bio input field', () => {
    render(<Register />);
    const inputEl = screen.getByTestId("bio input");

    expect(inputEl.value).toBe()

})

test('Submit button', () => {
    render(<Register />);
    const addBtn = screen.getByTestId("add-btn");

    expect(addBtn.textContent).toBe("Submit")

})