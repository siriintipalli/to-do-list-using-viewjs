<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="well">
                    <h2>Create a New Todo</h2>
                    <form>
                        <div class="form-group">
                            <label for="todoitem">Todo Item</label>
                            <input type="text" v-model="input" class="form-control" id="todoitem" placeholder="Todo Item" />
                        </div>
                        <button type="button" v-on:click="add()" class="btn btn-default">Create</button>
                    </form>
                </div>
            </div>
              <div class="col-md-6">
                <button class="button" v-on:click="clear()">remove all</button>  
                <h2>List</h2>
                <ul class="list-group">
                    <li v-for="(todo, index) in todos" :key="index" class="list-group-item">
                        {{ index }}: {{ todo }}
                        <!-- <span v-on:click="removeElement(index)" class="glyphicon glyphicon-remove"></span> -->
                        <button v-on:click="removeElement(index)">remove</button>
                    </li>
                </ul>
            </div>
        </div>  
      </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
      return {
          todos: [],
          input: ""
      }
  },
  methods: {
      add() {
          this.todos.push(this.input);
          this.input = "";
      },
      removeElement : function (index) {
        this.todos.splice(index,1);
    },
    clear : function () {
        this.todos=[];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.well{
    color:blue;
  }
  .button{
    background-color: red;

  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

