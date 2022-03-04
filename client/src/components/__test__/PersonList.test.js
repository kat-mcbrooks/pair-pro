import React from 'react'
import PersonList from '../PersonList'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('PersonList renders with correct text', () => {
    render(<PersonList />);

    const nameEl = screen.getByTestId("name");
    expect(nameEl.textContent).toBe('')  
    
})

// test('PersonList renders with correct text', () => {
//     render(<PersonList />);

//     const nameEl = screen.getByTestId("name");
//     expect(nameEl.textContent).toBe("Name: ")   
// })