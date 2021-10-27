<!--
 * @Description :
 * @Date        : 2021-10-27 22:05:30 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-28 02:38:43 +0800
 * @LastEditors : JackChou
-->
<template>
  <div>
    <DemoV2 />
    <DemoV3 />
    <MyInput v-model="input" />
    <p>{{ input }}</p>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import DemoV2 from '../components/DemoV2.vue'
import DemoV3 from '../components/DemoV3.vue'
import MyInput from '../components/MyInput.vue'
const input = ref('hello')
</script>
<style scoped lang="scss"></style>
