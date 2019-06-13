<template>
  <div>
    <div class="container">
      <div class="row justify-content-cente">
        <div class="col-12 col-md-6">
         <todoinput></todoinput>
        </div>
        <div class="col-12 col-md-6">
          <todooutput></todooutput>
          </div>
      </div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import  todoinput from '../components/todoinput.vue'
import  todooutput from '../components/todooutput.vue'


export default {
  name: 'home',
  components: {
    todoinput,
    todooutput
  }
}

</script>
