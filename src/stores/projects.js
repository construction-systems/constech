import { defineStore } from "pinia"
import { ProjectsService } from "../services/projects.service.js";

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [],
    loading: false,
    error: null,
  }),
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
  actions: {
    async fetchProjects() {
      this.loading = true
      await new ProjectsService().getAll()
        .then((response) => {
          this.projects = response.data
          this.loading = false
        })
        .catch((error) => {
          this.error = error
          this.loading = false
        })
    }
  }
})
