import Login from "../pages/common/Login.vue";
import Register from "../pages/common/Register.vue";
import Home from "../pages/Home.vue";
import Settings from "../pages/Settings.vue";
import Projects from "../pages/Projects.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/settings", component: Settings },
  { path: "/projects", component: Projects }
];

export default routes;
