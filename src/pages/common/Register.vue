<template>
  <main class="w-full h-[100vh] flex justify-center items-center">
    <img src="../../assets/logo-top-left.svg" class="fixed top-0 left-0" />
    <Card class="w-11/12 md:w-1/2 lg:w-1/4 shadow-xl rounded-xl">
      <template #title>
        <h1 class="text-2xl font-bold text-center">{{ $t("register.title") }}</h1>
      </template>
      <template #content>
        <form @submit.prevent="login">
          <div class="flex flex-col">
            <InputText class="h-[35px] mb-5" type="text" :placeholder="$t('register.username.placeholder')"
              v-model="a" />
            <InputText class="h-[35px] mb-5" type="text" :placeholder="$t('register.password.placeholder')"
              v-model="a" />
            <InputText class="h-[35px]" type="text" :placeholder="$t('register.password.confirmation.placeholder')"
              v-model="a" />
          </div>
          <Button type="submit" class="w-full mt-5 rounded-lg bg-main" :label="$t('register.actions.register')" />
        </form>
      </template>
      <template #footer>
        <router-link to="/login" class="w-full">
          <Button class="w-full font-normal bg-secondary rounded-lg" :label="$t('register.actions.login')" />
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
  components: {
    Card,
    InputText,
    Button
  },
}
</script>
