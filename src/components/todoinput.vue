<template>
<div>
    <div class="container" style="border:1px solid red;">
        <div clas="form-group">
            <label>enter an item</label>
            <input type="text" v-model="addItem" class="form-control" id="todoitem" placeholder="Todo Item" />
        </div>
        <div class="form-group">
        <button  v-on:click="add()" class="btn btn-primary">Add Item</button>
        </div>
    </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            addItem:null
        }
    },
    methods: {
        add:function(){
            console.log(this.addItem)
            this.$store.commit('TODO_LIST_ITEM_add',this.addItem)
            this.addItem=null
        }
    }
}
</script>
<style>
</style>