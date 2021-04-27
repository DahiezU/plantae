<template>
  <div>
    <TabMenu :model="items" />
  

  </div>
  
   
   
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'PanneauHeader',
  data() {
    return {
			items: [
                {label: 'Acceuil', icon: 'pi pi-fw pi-home', to: '/home/presentation'},
                {label: 'Nos marchés', icon: 'pi pi-fw pi-map-marker', to: '/marketmap/map'},
                {label: 'Mon marché', icon: 'pi pi-fw pi-flag', to: '/'},
                {label: 'Mes produits ', icon: 'pi pi-fw pi-th-large', to: '/myMarket/itemsMarket'},
                {label: 'Mon compte ', icon: 'pi pi-fw pi-user', to: '/user/profil'},
            ]
		}
  }
})
</script>

