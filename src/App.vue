<template>
  <h1 class="text-4xl font-bold underline text-center mb-10">Mi primera app con Vue 3</h1>
  <hr class="mb-10" />
  <MyCounter :text="'Contador 1'" />
  <br />
  <MyCounterScript :value="10" :text="'Contador 2'" />
  <br />
  <MyCounterScriptV2 :text="'Contador 3'" />
</template>
<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScriptV2 from './components/my-counter-script/MyCounterScriptV2.vue'
</script>
