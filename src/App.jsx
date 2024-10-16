import { NavLink, Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-4">
          <li><NavLink to={"/"}>Login</NavLink></li>
          <li><NavLink to={"/signup"}>Signup</NavLink></li>
        </ul>
      </nav>
    <Outlet></Outlet>
    </div>
  )
}

export default App
