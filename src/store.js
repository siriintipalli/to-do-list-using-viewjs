import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[],

  },
  mutations: {
    TODO_LIST_ITEM_add :function (state, response){
       state.todoList.push(response);
    },
    TODO_LIST_ITEM_remove :function(state, response)
    {
      state.todoList.slice(response,1);
    },
    TODO_LIST_ITEM_removeall :function(state, response){
       state.todoList = response;
    }
  },
  actions: {
     
  }
})
