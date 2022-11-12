import { Provider } from "react-redux";
import mockStore from "../mocks/stores/mockStore";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return <Provider store={mockStore}>{children}</Provider>;
};

export default ProviderWrapper;
