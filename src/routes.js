import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Login from "views/examples/Login.jsx";
import Partners from "views/examples/Partners.jsx";
import Score from "views/examples/Score.jsx";
import Icons from "views/examples/Icons.jsx";

var routes = [
  {
    path: "/dash",
    name: "Visão Geral",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    isOnMenu: 1
  },
  {
    path: "/partners",
    name: "Parceiros",
    icon: "ni ni-shop text-red",
    component: Partners,
    layout: "/admin",
    isOnMenu: 1
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
    isOnMenu: 0
  },
  {
    path: "/score",
    name: "Score",
    icon: "ni ni-diamond text-green",
    component: Score,
    layout: "/admin",
    isOnMenu: 1
  },
  {
    path: "/settings",
    name: "Configurações",
    icon: "ni ni-ui-04 text-yellow",
    component: Profile,
    layout: "/admin",
    isOnMenu: 1
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  }
];

export default routes;
