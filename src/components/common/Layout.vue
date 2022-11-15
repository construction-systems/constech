<template>
  <nav class="p-5">
    <div class="flex items-center">
      <img src="../../assets/logo.svg" class="rounded-lg hidden lg:block" />
      <img src="../../assets/logo.svg" @click="visibleLeft = true" class="cursor-pointer rounded-lg lg:hidden" />
      <div id="menu" class="bg-white mx-10 py-5 w-full hidden sm:flex items-center justify-around rounded-xl shadow-xl">
        <div class="flex justify-center w-[500px] lg:w-[300px] xl:w-[500px] mx-5">
          <div class="w-full bg-[#F4F7FC] p-2 rounded-full text-gray-400">
            {{ $t('layout.nav.search')}}
          </div>
        </div>
        <div class="hidden lg:flex">
          <div v-for="(option, index) in options" v-bind:key="index">
            <router-link :to="option">
              <Button :label="$t(`layout.nav.options.${option}`)"
                class="mx-10 p-button-text font-semibold text-gray-400" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </nav>
  <main id="content" class="mx-[6%] h-[calc(100%_-_127px)] overflow-y-auto">
    <slot></slot>
  </main>
  <Sidebar v-model:visible="visibleLeft" class="p-0">
    <div class="w-full">
      <div>
        <router-link to="/">
          <span class="text-xl"> Home </span>
        </router-link>
      </div>
      <div v-for="(option, index) in options" v-bind:key="index">
        <router-link :to="option">
          <span>{{ $t(`layout.nav.options.${option}`)}}</span>
        </router-link>
      </div>
    </div>
  </Sidebar>
</template>

<script>
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import {useUsersStore} from "../../stores/users.js";

export default {
  setup() {
    const store = useUsersStore()
    return { store }
  },
  data() {
    return {
      visibleLeft: false,
      options: ['projects', 'messages', 'settings']
    }
  },
  beforeCreate() {
    if(this.store.currentUser == null) {
      this.$router.push('/login')
    }
  },
  components: {
    Sidebar,
    Button
  }
}
</script>

