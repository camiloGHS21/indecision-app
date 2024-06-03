import { computed, ref } from 'vue'

export const useCounter = (initialvalue: number = 5) => {
  const counter = ref(initialvalue)

  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    if (counter.value > 0) {
      counter.value--
    }
  }
  return {
    counter,
    squereCounter: computed(() => counter.value * counter.value),
    increment,
    decrement
  }
}
