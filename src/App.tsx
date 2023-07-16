import React from "react";
import { Counter } from "features/counter/Counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/store";
import { createGlobalStyle } from "styled-components";

export const App = () => {
  console.log(process.env.REACT_APP_BASE_URL);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Counter />,
    },
  ]);
  const GlobalStyled = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
 
  }
  body > #root > div {
    height: 100vh;
  }
  
  body{
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    div#root{
      display: flex;
      justify-content: center;
    }
  }
`;
  return (
    <Provider store={store}>
      <GlobalStyled />
      <RouterProvider router={router} />
    </Provider>
  );
};
