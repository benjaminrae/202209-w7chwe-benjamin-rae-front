import { Provider } from "react-redux";
import mockInitialStore from "../mocks/stores/mockInitialStore";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return <Provider store={mockInitialStore}>{children}</Provider>;
};

export default ProviderWrapper;
