import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <NavLink to={"/"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Signup</NavLink>
          </li>
        </ul>
      </nav>
      
      <Outlet></Outlet>
    </div>
  );
}

export default App;
