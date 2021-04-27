<template>
  
    <PanneauHeader/>
    <router-view/>
    <PanneauFooter/>
      
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PanneauHeader from './components/headerAndFooter/panneauHeader.vue'
import PanneauFooter from './components/headerAndFooter/panneauFooter.vue'




export default defineComponent({
    name: 'App',
    components :{
      PanneauHeader,
      PanneauFooter
    }
})
  

  
  

</script>

