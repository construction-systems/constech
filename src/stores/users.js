import { defineStore } from "pinia";
import { UsersService } from "../services/users.service.js";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    currentUser: cookies.get("currentUser") || null,
    loading: false,
    error: null,
  }),
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  actions: {
    async login(username, password) {
      this.loading = true;
      await new UsersService()
        .login(username, password)
        .then((response) => {
          this.currentUser = response.data;
          cookies.set("currentUser", JSON.stringify(response.data));
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
    async register(payload) {
      await new UsersService()
        .register(payload)
        .then((response) => {
          console.log(response.data);
        })
    },
    logout() {
      this.currentUser = null;
      cookies.remove("currentUser");
    },
  },
});
