<!--
 * @Description :
 * @Date        : 2021-10-27 22:05:30 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-08 00:07:26 +0800
 * @LastEditors : JackChou
-->
<template>
  <div>
    <DemoV2 />
    <DemoV3 />
    <MyInput v-model="input" />
    <p>{{ input }}</p>
    <!-- <Foo :data="[{ a: 'a', b: 'b', c: 'c' }]" keys="" /> -->
    <ResizeObserver />
    <LazyLoadImg />
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { ResizeObserver, LazyLoadImg } from '@com'
import DemoV2 from '../components/DemoV2.vue'
import DemoV3 from '../components/DemoV3.vue'
import MyInput from '../components/MyInput.vue'
// import { Foo } from '../components/jsx/Foo'
const input = ref('hello')
</script>
<style scoped lang="scss"></style>
