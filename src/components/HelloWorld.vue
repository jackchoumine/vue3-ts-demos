<template>
  <h1>{{ msg }}</h1>
  <p>count:{{ count }}</p>
  <button @click="add">+10</button>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  emits: ['plus'],
  setup(_, ctx: SetupContext) {
    const count = ref(0)
    function add() {
      count.value += 10
      ctx.emit('plus', count.value)
    }
    return { count, add }
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
