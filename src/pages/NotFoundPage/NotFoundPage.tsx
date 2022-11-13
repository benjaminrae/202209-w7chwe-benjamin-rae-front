import NotFoundPageStyled from "./NotFoundPageStyled";
import { ReactComponent as Lost } from "../../resources/svgs/lost.svg";
import Button from "../../components/Button/Button";

const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <h2 className="not-found__title">There aren't any friends here</h2>
      <Lost className="not-found__logo" />
      <Button text="Home" />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
