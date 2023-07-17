import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/store";
import { Auth } from "features/auth/Auth";
import { GlobalStyled } from "app/globalStyled";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
  ]);
  return (
    <Provider store={store}>
      <GlobalStyled />
      <RouterProvider router={router} />
    </Provider>
  );
};
