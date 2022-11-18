import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged, username, id } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

  return (
    <HeaderStyled>
      <h1 className="main-header__title">Feisbuk</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLogged && (
            <>
              <li>
                <NavLink to={`/profile/${username}/${id}`}>My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/edit-profile">Edit Profile</NavLink>
              </li>
              <li>
                <Button text="Logout" action={logoutUser} />
              </li>
            </>
          )}
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
