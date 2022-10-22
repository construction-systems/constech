<template>
  <nav class="p-5">
    <div class="flex items-center">
      <img src="../../assets/logo.svg" @click="visibleLeft = true" class="cursor-pointer rounded-lg"/>
      <div id="menu" class="mx-10 py-5 w-full hidden sm:flex items-center justify-around rounded-xl shadow-xl">
        <div class="hidden md:flex w-[400px] justify-center">
          Search everything
        </div>
        <div class="flex">
          <router-link to="/projects">
          <Button label="Projects" class="mx-10 p-button-text font-semibold text-gray-400"/>
        </router-link>
        <router-link to="/projects">
          <Button label="Projects" class="mx-10 p-button-text font-semibold text-gray-400"/>
        </router-link>
        <router-link to="/projects">
          <Button label="Projects" class="mx-10 p-button-text font-semibold text-gray-400"/>
        </router-link>
        </div>
      </div>
    </div>

  </nav>
  <main id="content" class="mx-[6%] h-[calc(100%_-_127px)]">
    <slot></slot>
  </main>
  <Sidebar v-model:visible="visibleLeft">
    Content
  </Sidebar>
</template>

<script>
  import Sidebar from 'primevue/sidebar'
  import Button from 'primevue/button'

  export default {
    data() {
      return {
        visibleLeft: false
      }
    },
    components: {
      Sidebar,
      Button
    }
  }
</script>

