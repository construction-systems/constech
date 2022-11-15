import http from "./common/http";

export class UsersService {
  login(username, password) {
    return http.post("/users/login", { username, password });
  }
}
