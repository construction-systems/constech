import Login from "../pages/common/Login.vue";
import Home from "../pages/common/Home.vue";
import Register from "../pages/common/Register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

export default routes;
