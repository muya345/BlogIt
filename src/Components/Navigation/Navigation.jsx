import { NavLink } from "react-router-dom";
import box from "@mui/material/Box";
function Navigation() {
  return (
    <div>
      <ol>
        <NavigationLink to="/" label="Landing Page" />
        <NavigationLink to="/login" label="Login" />
        <NavigationLink to="/signup" label="Sign Up" />
      </ol>
    </div>
  );
}

export default Navigation;

function NavigationLink({ to, label }) {
  return (
    <li>
      <NavLink to={to} activeClassName="active-link">
        {label}
      </NavLink>
    </li>
  );
}
