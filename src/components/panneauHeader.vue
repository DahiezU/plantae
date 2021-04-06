<template>
  
  <TabMenu :model="items" />
  
  <router-view/>
   
   
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'panneauHeader',
  data() {
    return {
			items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/home'},
                {label: 'Header', icon: 'pi pi-fw pi-calendar', to: '/panneauHeader'},
                
            ]
		}
  }
})
</script>

