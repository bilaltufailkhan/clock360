import AuthView from "../views/auth/AuthView";
import ClockYield from "../views/ClockYield";
import Dashboard from "../views/Dashboard";
import MainView from "../views/MainView";

let routes = [
  {
    path: "/auth",
    component: AuthView,
    layout: "auth",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    layout: "main",
  },
  {
    path: "/yield",
    component: ClockYield,
    layout: "main",
  },
  {
    path: "/",
    component: MainView,
    layout: "main",
  },
];
export default routes;
