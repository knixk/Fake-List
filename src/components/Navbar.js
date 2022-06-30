import { useNavigate } from "react-router-dom";

// const initialValues = {

// }

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const { name } = e.target;
    // console.log(name);
    if (name === "logout") {
      setIsLoggedIn(false);
      navigate("/");
    } else {
      setIsLoggedIn(false);
      navigate("/");
    }
  };

  const path = window.location.pathname;

  return (
    <div>
      <nav className="nav-container">
        <h2 className="logo">Fake List</h2>
        {isLoggedIn ? (
          path === "/home" && (
            <button name="logout" onClick={handleClick}>
              Log Out
            </button>
          )
        ) : path === "/" ? (
          ""
        ) : (
          <button name="login" onClick={handleClick}>
            Login
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
