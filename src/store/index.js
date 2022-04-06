import  Vue  from  'vue'
import  Vuex  from  'vuex'
import axios from 'axios'


Vue.use(Vuex)



export default new Vuex.Store({
    state: {
      token:null
    },
    getters:{
      token: (state)=> {
        return state.token;
      },

      isAuthenticated(state){
        return !!state.token && localStorage.getItem('token');
      }  
      
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