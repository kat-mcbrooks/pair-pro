import React from 'react'
import Home from '../Home'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('header renders with correct text', () => {
    render(<Home />);
    const headerEl = screen.getByTestId("header");

    expect(headerEl.textContent).toBe("Home")   
})
