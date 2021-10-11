<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="hello web component" @plus="change">
      <template #default>
        <h3>default slot</h3>
      </template>
      <template #left>
        <h3>left slot</h3>
      </template>
      <template #right="{ doubleCount }">
        <h3>right slot {{ doubleCount }}</h3>
      </template>
    </HelloWorld>
    <web-hello-world msg="hello web component" @plus="change2">
      <!-- <template #default>
        <h3>default slot</h3>
      </template> -->
      <!-- <template #left>
        <h3>left slot</h3>
      </template> -->
      <!-- <template #right="{ doubleCount }">
        <h3>right slot {{ doubleCount }}</h3>
      </template> -->
    </web-hello-world>
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
