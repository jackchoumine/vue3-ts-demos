<template>
  <div>
    <h1>home</h1>
    <span class="rating">rating outside</span>
    <my-rating ref="myRating" max-value="5" value="3" />
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
import { onMounted, ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

const myRating = ref(null)

function change(count: number) {
  console.log(count)
}
function change2(event: CustomEvent) {
  console.log(event.detail)
}
onMounted(() => {
  console.log('Home mounted')
  const myRatingComponent = document.querySelector('my-rating')
  setTimeout(() => {
    // myRatingComponent.value = 4;
    myRatingComponent!.setAttribute('value', '4')
    console.log('set value')
    // @ts-ignore
    myRatingComponent!.getValue({ maxValue: 10, value: 5 }).then((value) => {
      console.log('get value', value)
    })
    console.log(myRating.value)
  }, 2000)
  // @ts-ignore
  myRatingComponent!.addEventListener('ratingChange', ({ detail }) => {
    console.log('rating changed', detail)
    alert(`rating change ${detail.value}`)
  })
})
</script>
<style scoped lang="scss"></style>
