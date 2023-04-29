import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./context/userSlice";
import Header from "./components/Header";
import Email from "./components/Email";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Email></Email>
    </div>
  );
}

export default App;
