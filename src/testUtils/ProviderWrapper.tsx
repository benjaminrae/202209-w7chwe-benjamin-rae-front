import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockInitialStore from "../mocks/stores/mockInitialStore";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={mockInitialStore}>{children}</Provider>{" "}
    </BrowserRouter>
  );
};

export default ProviderWrapper;
