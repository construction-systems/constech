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
    <Button icon="pi pi-arrow-right" @click="visibleLeft = true"/>
  </nav>
  <main id="content">
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
