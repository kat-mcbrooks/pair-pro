// import { useContext, useReducer } from "react";
// import Header from '../Header'
// import { AuthContext } from "../../context/AuthContext";

// import { render, screen } from '@testing-library/react'
// import "@testing-library/jest-dom/extend-expect"
// import { MemoryRouter } from 'react-router-dom';

// const initialState = {
//     isLoggedIn: true,
//     user: "user",
//     isFetching: false,
//     error: false,
//   };

// const Wrapper = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
       
//       <AppContext.Provider value={{ state, dispatch }}>
//           {children}
//       </AppContext.Provider>
      
//     );
//   };

//   render(<Wrapper />);


// // test('header renders with correct text', () => {
   
// //     render(
// //         <AuthContext.Provider>
// //              const { state } = useContext(AuthContext);
// //     <Header />, {wrapper: MemoryRouter});
// //     </AuthContext.Provider>
   
// //     const headerEl = screen.getByTestId("nav");

// //     expect(headerEl.textContent).toBe("PairPro Login Register")   
// // })