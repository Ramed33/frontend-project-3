import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import App from "../../app";

describe("Initial Page", () => {
    test('renders App', () => {
        const { getByText } = render(
          <Provider store={store}>
            <App />
          </Provider>
        );
      
        expect(getByText(/Welcome to globe app/i)).toBeInTheDocument();
    });
});
  