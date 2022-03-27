import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

const state = {
    token: null,
  };

  const store = new vuex.Store({
      state,
      getters: {
          token: (state) => {
              return state.token;
          }
      },
      actions: {
          token(context, token){
              context.commit('token', token);
          }
      },
      mutations: {
          user(state,token){
              state.user = token;
          }
      }

   });
export default store;