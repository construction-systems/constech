<template>
  <Layout>
    <section>
      <div class="flex flex-col">
        <div v-if="user" class="mb-10 flex flex-col sm:flex-row justify-center items-center">
          <div class="flex items-center">
            <Avatar v-if="user.photoUrl" :image="user.photoUrl" shape="circle" />
            <Avatar v-else :label="(user.firstName + ' ' + user.lastName).match(/\b(\w)/g).join('')" />
            <span class="text-sm pl-4">{{ user.firstName }} {{ user.lastName }}</span>
          </div>
          <span class="text-gray-400 text-sm ml-5">{{ user.occupation }}</span>
        </div>
        <div class="flex flex-wrap justify-between">
          <div class="w-full sm:w-1/2 md:w-1/3 mb-10">
            <Card class="w-11/12">
              <template #title>
                <span class="text-gray-400 text-sm">{{ $t("settings.language.title") }}</span>
              </template>
              <template #content>
                <div class="flex flex-col">
                  <div v-for="(lang, i) in locales" :key="lang" class="flex items-center p-1">
                    <RadioButton :value="lang" v-model="$root.$i18n.locale" class="mr-2" />
                    <label :for="lang">{{ $t(`locales.${lang}`) }}</label>
                  </div>
                </div>
              </template>
            </Card>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 mb-10">
            <Card class="w-11/12">
              <template #title>
                <span class="text-gray-400 text-sm">{{ $t("settings.profile.title") }}</span>
              </template>
              <template #content>

              </template>
            </Card>
          </div>
        </div>
        <div class="mt-5">
          <router-link to="/">
            <Button :label="$t('settings.logout')" class="p-button-outlined p-button-danger" @click="logout()" />
          </router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Avatar from "primevue/avatar";
import Card from "primevue/card";
import RadioButton from "primevue/radiobutton";
import Button from "primevue/button";
import { useUsersStore } from "../stores/users"
export default {
  components: {
    Avatar,
    Card,
    RadioButton,
    Button
  },
  data() {
    return {
      locales: ["en", "es"],
      user: null
    }
  },
  setup() {
    const userStore = useUsersStore()
    return { currentUser: userStore.getCurrentUser, logout: userStore.logout  }
  },
  beforeMount() {
    this.user = this.currentUser;
  }
}
</script>
