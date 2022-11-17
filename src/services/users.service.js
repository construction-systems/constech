import http from "./common/http";

export class UsersService {
  login(username, password) {
    return http.post("/users/login", { username, password });
  }
  register(payload) {
    return http.post("/users/register", payload);
  }
}
