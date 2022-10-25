import { defineStore } from  "pinia"
import { UsersService } from  "../services/users.service.js"

export const useUsersStore = defineStore({
  id:  "users" ,
  state: () => ({
    currentUser: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCurrentUser() {
      this.loading = true
      await new UsersService().getCurrentUser()
        .then((response) => {
          this.currentUser = response.data
          this.loading = false
        })
        .catch((error) => {
          this.error = error
          this.loading = false
        })
    }
  }
})
