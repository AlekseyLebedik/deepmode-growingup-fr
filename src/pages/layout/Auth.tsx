import { Outlet } from "react-router";
import "./Auth.scss";
import Paper from "@mui/material/Paper";

export default function Layout() {
  return (
    <Paper elevation={3} className="auth container">
      <div>Auth Provider</div>
      <Outlet />
    </Paper>
  );
}
