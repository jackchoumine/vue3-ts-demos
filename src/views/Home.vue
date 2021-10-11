<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="hello web component" @plus="change" />
    <web-hello-world msg="hello web component" @plus="change2" />
  </div>
</template>
<script lang="ts" setup>
// import { ref, reactive, watch, computed } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

function change(count: number) {
  console.log(count)
}
function change2(event: CustomEvent) {
  console.log(event.detail)
}
</script>
<style scoped lang="scss"></style>
