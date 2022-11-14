import http from "./common/http";

export class UsersService {
  getCurrentUser() {
    return http.get("/current_user");
  }
  login(username, password) {
    return http.post("/users/login", { username, password });
  }
}
