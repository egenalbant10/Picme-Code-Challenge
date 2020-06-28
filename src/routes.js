import Menu from "views/Menu.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";

var routes = [
  {
    path: "/index",
    name: "Anasayfa",
    icon: "ni ni-tv-2 text-primary",
    component: Menu,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Giriş",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Üye Ol",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
