<template>
  <main class="w-full h-[100vh] flex justify-center items-center">
    <img src="../../assets/logo-top-left.svg" class="fixed top-0 left-0 hidden sm:block"/>
    <Card class="w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/4l shadow-xl rounded-xl">
      <template #title>
        <h1 class="text-2xl font-bold text-center">{{ $t("register.title") }}</h1>
      </template>
      <template #content>
        <form @submit.prevent="register" v-bind="formData">
          <div class="flex flex-col md:flex-row md:justify-between">
            <div class="w-full mb-5 flex justify-between">
              <div class="w-1/2 flex justify-center">
                <InputText class="w-11/12 h-[35px]" type="text" :placeholder="$t('register.firstname.placeholder')" v-model="formData.firstName"/>
              </div>
              <div class="w-1/2 flex justify-center">
                <InputText class="w-11/12 h-[35px] " type="text" :placeholder="$t('register.lastname.placeholder')" v-model="formData.lastName"/>
              </div>
            </div>
            <div class="flex flex-col">
              <InputText class="h-[35px] mb-5" type="text" :placeholder="$t('register.username.placeholder')" v-model="formData.username" />
              <InputText class="h-[35px] mb-5" type="password" :placeholder="$t('register.password.placeholder')" v-model="formData.password" />
              <InputText class="h-[35px]" type="password" :placeholder="$t('register.password.confirmation.placeholder')" v-model="formData.passwordConfirmation" />
            </div>
          </div>
          <Button type="submit" class="w-full mt-5 rounded-lg bg-main" :label="$t('register.actions.register')"/>
        </form>
      </template>
      <template #footer>
        <router-link to="/login" class="w-full">
            <Button class="w-full font-normal bg-secondary rounded-lg" :label="$t('register.actions.login')"/>
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
  name: 'Register',
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
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        passwordConfirmation: '',
      }
    }
  },
  methods: {
    register() {
      if (this.password === this.passwordConfirmation) {
        this.userStore.register(this.formData)
      }
    }
  }
}
</script>
