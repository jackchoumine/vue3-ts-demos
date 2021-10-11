<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="hello web component" />
    <web-hello-world msg="hello web component" />
  </div>
</template>
<script lang="ts">
// import { ref, reactive, watch, computed } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: { HelloWorld },
  setup() {
    return {}
  },
}
</script>
<style scoped lang="scss"></style>
