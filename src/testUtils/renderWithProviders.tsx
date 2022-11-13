import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store, RootState } from "../redux/store";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyles from "../styles/GlobalStyles";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { BrowserRouter } from "react-router-dom";

interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { ui: uiReducer, user: userReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
