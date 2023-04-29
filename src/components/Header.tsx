import { useAppSelector } from "../app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../context/store";

const Header = () => {
  // const user = useAppSelector((state) => state.user);
  const user = useSelector((state: RootState) => state.user);

  return (
    <header>
      <h1>oal</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>UserName: {user.username}</li>
      </ul>
    </header>
  );
};

export default Header;
