<template>
  <div>
    <InputText v-model="text"/>
    <Button label="Greet" icon="pi pi-user" @click="greet"></Button>
    <Toast />
  </div>
</template>

<script lang="ts">


export default {
  data(){
    return{
      text:null
    }

  },
  methods: {
    greet(){
      this.$toast.add({severity: 'info', summary: 'Hello', detail: this.text});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>