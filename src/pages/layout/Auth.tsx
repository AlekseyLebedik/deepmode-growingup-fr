import { Outlet } from "react-router";

import Paper from "@mui/material/Paper";

import "./auth.scss";

export default function Layout() {
  return (
    <Paper elevation={3} className="auth container">
      <div>Auth Provider</div>
      <Outlet />
    </Paper>
  );
}
