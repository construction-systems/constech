<template>
  <main class="w-full h-[100vh] flex justify-center items-center">
    <img src="../../assets/logo-top-left.svg" class="fixed top-0 left-0 hidden md:block" />
    <Card class="w-11/12 md:w-1/2 lg:w-1/4 shadow-xl rounded-xl p-5">
      <template #title>
        <h1 class="text-2xl font-bold text-center">{{ $t("login.title") }}</h1>
      </template>
      <template #content>
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-col">
            <InputText class="h-[35px] mb-5" type="text" :placeholder="$t('login.username.placeholder')"
              v-model="username" />
            <InputText class="h-[35px]" type="password" :placeholder="$t('login.password.placeholder')"
              v-model="password" />
          </div>
          <Button type="submit" class="w-full mt-5 bg-main rounded-lg" :label="$t('login.actions.login')" />
        </form>
      </template>
      <template #footer>
        <router-link to="/register" class="w-full">
          <Button class="w-full font-normal bg-secondary rounded-lg" :label="$t('login.actions.register')" />
        </router-link>
      </template>
    </Card>
  </main>
</template>

<script>
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useUsersStore } from "../../stores/users.js";
export default {
  components: {
    Card,
    InputText,
    Button
  },

  setup() {
    const userStore = useUsersStore();
    return { userStore }
  },
  mounted() {
    if (this.userStore.currentUser != null) {
      this.$router.push('/')
    }
  },
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      await this.userStore.login(this.username, this.password)
        .then(r => {
          setTimeout(() => {
            this.$router.push('/')
          }, 2000)
        })
    },
  },
}
</script>
