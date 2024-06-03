import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    value: {
      type: Number,
      default: 5,
      requerid: false
    },
    text: String
  },
  setup(props) {
    const counter = ref(props.value)
    const squareCounter = computed(() => counter.value * counter.value)

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
      squareCounter,
      increment,
      decrement
    }
  }
})
