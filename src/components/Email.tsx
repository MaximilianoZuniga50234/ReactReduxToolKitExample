import { useSelector } from "react-redux";
import { RootState } from "../context/store";
import { useAppSelector } from "../app/hooks";
import { useAppDispatch } from "../app/hooks";
import { changeEmail } from "../context/userSlice";

const Email = () => {
  const email = useAppSelector((state) => state.user.email);
  //const email = useSelector((state: RootState) => state.user.email);

  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    dispatch(changeEmail(e.target.value));
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={handleChange}
      />
    </div>
  );
};

export default Email;
