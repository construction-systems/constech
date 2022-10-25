import http from "./common/http";

export class UsersService {
  getCurrentUser() {
    return http.get("/current_user");
  }
}
