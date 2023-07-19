import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/store";
import { Register } from "features/auth/Register";
import { Header } from "features/Header/Header";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
  ]);
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  );
};
