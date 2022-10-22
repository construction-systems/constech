import { defineStore } from 'pinia'
import { ProjectsService } from "../services/projects.service.js";

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [],
    loading: false,
    error: null,
  }),
  getters: {
  },
  actions: {
    async fetchProjects() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await new ProjectsService().getAll()
      } catch (e) {
        this.error = e
      } finally {
        this.loading = false
      }
    }
  }
})
