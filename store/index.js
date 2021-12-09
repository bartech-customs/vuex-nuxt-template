// holds your root state
export const state = () => ({
  counter: 0,
  colorCode: "blue",
});

// contains your actions ASYNC
export const actions = {
  async increase({ commit }) {
    const result = await this.$axios.$get(
      "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
    );
    commit("increase", result);
  },
  setColorCode({ commit }, newValue) {
    commit("setColorCode", newValue);
  },
};
// contains your mutations
export const mutations = {
  increase(state, randomNumber) {
    state.counter += randomNumber;
  },
  decrease(state) {
    state.counter--;
  },
  setColorCode(state, newValue) {
    state.colorCode = newValue;
  },
};
// your root getters
export const getters = {
  counterSqr(state) {
    return state.counter * state.counter;
  },
};
//https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new
