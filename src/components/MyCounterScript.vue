<template>
  <section class="card">
    <div class="card-content">
      <h2>counter 2</h2>
      <hr />
      <h3>Counter: {{ counter }}</h3>
      <h3>Square: {{ squereCounter }}</h3>
      <div class="buttons">
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
//el otro codigo comentado para que funcione tiene que quitar en setup
const { counter, increment, decrement, squereCounter } = useCounter(10)

import { useCounter } from '../composables/useCounter'
// import { computed, defineComponent, ref } from 'vue'
// export default defineComponent({
//   props: {
//     value: {
//       type: Number,
//       default: 5,
//       requerid: false
//     },
//     text: String
//   },
//   setup(props) {
//     const counter = ref(props.value)
//     const squareCounter = computed(() => counter.value * counter.value)

//     const increment = () => {
//       counter.value++
//     }
//     const decrement = () => {
//       if (counter.value > 0) {
//         counter.value--
//       }
//     }
//     return {
//       counter,
//       squareCounter,
//       increment,
//       decrement
//     }
//   }
// })
</script>

<style scoped>
.card {
  max-width: 300px;
  margin: 0 auto;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 20px;
}

h3 {
  color: #333;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
