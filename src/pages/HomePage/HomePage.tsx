import RegisterForm from "../../components/RegisterForm/RegisterForm";
import HomePageStyled from "./HomePageStyled";
import { ReactComponent as Friends } from "../../resources/svgs/friends.svg";

const HomePage = () => {
  return (
    <HomePageStyled>
      <section className="home-page__cta">
        <h2>Meet friends, make enemies</h2>
        <Friends />
      </section>
      <RegisterForm />
    </HomePageStyled>
  );
};

export default HomePage;
