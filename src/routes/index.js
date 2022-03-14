import AuthView from "../views/auth/AuthView";
import Dashboard from "../views/auth/Dashboard";
import MainView from "../views/MainView";

let routes = [
  {
    path: "/auth",
    component: AuthView,
    layout: "auth",
  },
  {
    path: "/auth/dashboard",
    component: Dashboard,
    layout: "auth",
  },
  {
    path: "/",
    component: MainView,
    layout: "main",
  },
];
export default routes;
