<template>
  <section class="card">
    <div class="card-content">
      <h2>{{ text }}</h2>
      <hr />
      <h3>Counter: {{ counter }}</h3>
      <h3>Square: {{ squareCounter }}</h3>
      <div class="buttons">
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScriptV2.ts"></script>
<style lang="css" src="./MyCounterScriptV2.css"></style>
