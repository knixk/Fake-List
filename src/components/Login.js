import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";

const initialValues = {
  inputone: "",
  inputtwo: "",
};

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  let navigate = useNavigate();

  const [data, setData] = useState({ initialValues });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    await setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    if (data.inputone === "foo" && data.inputtwo === "bar") {
      navigate("/home");
      setIsLoggedIn(true);
    } else {
      alert("Wrong credentials.");
    }
    <div className="form-container">
      <p>Login</p>
      <input
        onChange={handleInputChange}
        name="inputone"
        value={data.inputone}
        className="input"
      />
      <input
        type="password"
        onChange={handleInputChange}
        name="inputtwo"
        value={data.inputtwo}
        className="input"
      />
      <button onClick={handleClick} className="btn">
        Login
      </button>
      <p>Not a member?</p>
      <a href="/">Sign Up</a>
    </div>;
  };

  return (
    <>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <div className="login">
        <div className="form-container">
          <p>Login</p>
          <input
            onChange={handleInputChange}
            name="inputone"
            value={data.inputone}
            className="input"
          />
          <input
            type="password"
            onChange={handleInputChange}
            name="inputtwo"
            value={data.inputtwo}
            className="input"
          />
          <button onClick={handleClick} className="btn">
            Login
          </button>
          <p>Not a member?</p>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default Login;
