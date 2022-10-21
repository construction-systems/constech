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
  <Sidebar v-model:visible="visibleLeft">
    Content
  </Sidebar>
  <nav>
    <div class="flex items-center">
      <Button icon="pi pi-fw pi-bars" class="p-button-rounded p-button-text p-button-text" @click="visibleLeft = true"/>
      <h1>Constech</h1>
    </div>

  </nav>
  <main id="content" class="mx-[6%]">
    <slot></slot>
  </main>
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
