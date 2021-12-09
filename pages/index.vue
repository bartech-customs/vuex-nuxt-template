<template>
  <div class="container">
    <NuxtLogo />
    <hr />
    <div :style="{ color: $store.state.colorCode }" class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="counter-sqr">
      {{ $store.state.counter }} <sup>2</sup> = {{ $store.getters.counterSqr }}
    </div>
    <div class="buttons">
      <button @click="$store.commit('decrease')">-</button
      ><button @click="$store.dispatch('increase')">+</button>
    </div>
    <div>
      <input v-model="colorCode" type="text" placeholder="Enter color code" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
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