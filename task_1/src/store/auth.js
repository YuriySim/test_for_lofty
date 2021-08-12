//vuex module responsible for authentication with backend
import Vue from "vue";
import ajax from "vuejs-ajax";

Vue.use(ajax);

export default {
  actions: {
    //This action sends POST-requestion for authentication
    async login({ dispatch, commit }, formData) {
      const URL = "https://your-url.com/user/token/"; //for an example

      await Vue.ajax({
        url: URL,
        method: "post",
        data: formData
      }).then(
        function(response) {
          console.log("Success", response.data);
          commit("setToken", response.data);
        },
        function(response) {
          console.log("Error", response.statusText);
          commit("setError", response.statusText);
        }
      );
    }
  },

  state: {
    token: null
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },

    clearToken(state) {
      state.token = null;
    }
  },

  getters: {
    token: state => state.token
  }
};
