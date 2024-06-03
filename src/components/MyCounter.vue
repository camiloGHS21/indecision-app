<template>
  <section class="card">
    <div class="card-content">
      <h2>counter 3</h2>
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
const { counter, increment, decrement, squereCounter } = useCounter()

// import { ref, computed } from 'vue'
import { useCounter } from '../composables/useCounter'

// const props = defineProps({
//   value: {
//     type: Number,
//     required: false
//   },
//   text: {
//     type: String,
//     required: true
//   }
// })

//--------------------------------------------|
// interface Props {                          |
//   value: number                            |
// }                                          |
// const props = defineProps<Props>()         |
//--------------------------------------------|

// const counter = ref(props.value ?? 0)

// const squareCounter = computed(() => counter.value * counter.value)

// const decrement = () => {
//   if (counter.value > 0) {
//     counter.value--
//   }
// }

// const increment = () => {
//   counter.value++
// }
</script>

<style scoped>
.card {
  width: 300px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 20px;
}

h3 {
  color: #333;
}

.buttons {
  margin-top: 10px;
}

button {
  padding: 8px 16px;
  margin-right: 10px;
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
