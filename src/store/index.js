import  Vue  from  'vue'
import  Vuex  from  'vuex'
import axios from 'axios'


Vue.use(Vuex)



export default new Vuex.Store({
    state: {
      token: localStorage.getItem("token") ? localStorage.getItem("token") : null
    },
    getters:{
      token: (state)=> {
        return state.token;
      },

      isAuthenticated(state){
        return !!state.token && localStorage.getItem('token');
      },
      
      logoutUser(state) {
        localStorage.removeItem("token");
        state.token = null;
      },

      
    },
    actions:{
      token(context, token){
        context.commit('token', token)
      }
    },
    mutations:{
      token(state, token){
        state.token= token;
      }
    }
  })