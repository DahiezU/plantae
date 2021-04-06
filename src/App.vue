<template>
     <panneauHeader></panneauHeader>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import panneauHeader from './components/panneauHeader.vue'
export default defineComponent({
    name: 'App',
    components :{
      panneauHeader,
    }
    

  })
  

  
  

</script>

