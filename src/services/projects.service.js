import http from "./common/http";

export class ProjectsService {
  getAll() {
    return http.get("/projects");
  }

  getById(id) {
    return http.get(`/projects/${id}`);
  }

  create(payload) {
    return http.post("/projects", payload);
  }

  update(id, payload) {
    return http.put(`/projects/${id}`, payload);
  }

  delete(id) {
    return http.delete(`/projects/${id}`);
  }

  findByTitle(title) {
    return http.get(`/projects?title=${title}`);
  }
}
