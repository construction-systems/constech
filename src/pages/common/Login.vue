<template>
  <main class="w-full h-[100vh] flex justify-center items-center">
    <Card class="w-11/12 md:w-1/3 lg:w-1/4 shadow-xl rounded-xl">
      <template #title>
        <h1 class="text-2xl font-bold text-center">{{ $t("login.title") }}</h1>
      </template>
      <template #content>
        <form @submit.prevent="login">
          <div class="flex flex-col">
            <InputText class="h-[35px] mb-5" type="text" :placeholder="$t('login.email.placeholder')" v-model="a" />
            <InputText class="h-[35px]" type="text" :placeholder="$t('login.password.placeholder')" v-model="a" />
          </div>
          <Button type="submit" class="w-full mt-5 bg-main rounded-lg" :label="$t('login.actions.login')"/>
        </form>
      </template>
      <template #footer>
        <router-link to="/register" class="w-full">
            <Button class="w-full font-normal bg-secondary rounded-lg" :label="$t('login.actions.register')"/>
          </router-link>
      </template>
    </Card>
  </main>
</template>

<script>
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

export default {
  name: 'Register',
  components: {
    Card,
    InputText,
    Button
  }
}
</script>
