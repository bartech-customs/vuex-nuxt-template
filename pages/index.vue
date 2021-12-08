<template>
  <div class="container">
    <NuxtLogo />
    <hr />
    <div class="counter">{{ counter }}</div>
    <div class="buttons">
      <button @click="decrease">-</button><button @click="increase">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 1rem 3rem;
  text-align: center;
}
.counter {
  font-size: 4rem;
  margin-top: 2rem;
}
.buttons button {
  font-size: 2rem;
  width: 5rem;
  margin: 1rem;
  cursor: pointer;
}
</style>