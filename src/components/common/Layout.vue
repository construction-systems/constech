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

<template>
  <nav class="flex items-center bg-[#1B4A47] h-[64px]">
      <Button class="p-button-rounded p-button-secondary p-button-text" @click="visibleLeft = true">
        <i class="pi pi-fw pi-bars text-white text-[25px]"></i>
      </Button>
      <img src="./../../assets/img/logo.png" width="40" class="mr-2"/>
    </nav>
  <main id="content">
    <slot/>
  </main>
  <Sidebar v-model:visible="visibleLeft">
    Content
  </Sidebar>
</template>

<style>
  #content {
  /* Firefox */
  height: -moz-calc(100% - 64px);
  /* WebKit */
  height: -webkit-calc(100% - 64px);
  /* Opera */
  height: -o-calc(100% - 64px);
  /* Standard */
  height: calc(100% - 64px);
  }
</style>
