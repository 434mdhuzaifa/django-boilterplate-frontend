import { Toaster } from "react-hot-toast";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useUserData } from "./store";
import { Button } from "antd";

function App() {
  const { user, setUser } = useUserData();
  const navigate=useNavigate()
  function onClick() {
    setUser(null);
    navigate("/")
  }
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <nav>
        <ul className="flex justify-center gap-4 mt-1 items-center">
          <li>
            <NavLink to={"/"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Signup</NavLink>
          </li>
          {user != null && (
            <li>
              <div className="border p-1 flex gap-1 items-center justify-center rounded-lg">
                <span>
                  Hi,<span className="text-red-400">{user?.username}</span>
                </span>
                <Button onClick={onClick}>Logout</Button>
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
