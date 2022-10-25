<template>
  <Layout>
    <section>
      <div class="flex flex-col">
        <div v-if="user" class="mb-10 flex flex-col sm:flex-row justify-center items-center">
          <div class="sm:mr-32 flex items-center">
            <Avatar :image="user.photo_url" shape="circle" class="mr-2"/>
            <span class="text-sm">{{user.first_name}} {{user.last_name}}</span>
          </div>
          <span class="text-gray-400 text-sm">{{user.occupation}}</span>
        </div>
        <div>
          <Card class="w-1/4">
            <template #title>
              <span class="text-gray-400 text-sm">{{$t("settings.language.title")}}</span>
            </template>
            <template #content>
              <div class="flex flex-col">
                <div v-for="(lang, i) in langs" :key="lang" class="flex items-center p-1">
                  <RadioButton :value="lang" v-model="$root.$i18n.locale" class="mr-2"/>
                  <label :for="lang">{{$t(`locales.${lang}`)}}</label>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
  import { storeToRefs } from "pinia";
  import Avatar from "primevue/avatar";
  import Card from "primevue/card";
  import RadioButton from "primevue/radiobutton";
  import { useUsersStore } from "../stores/users"
  const { currentUser: user, loading, error } = storeToRefs(useUsersStore())

  const { fetchCurrentUser } = useUsersStore()
  const langs = ['en', 'es']

  fetchCurrentUser()
</script>
