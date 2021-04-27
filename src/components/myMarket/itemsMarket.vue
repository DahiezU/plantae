<template>
  <div  class="p-grid">
    <div class="p-col-2">

    </div>
    <div class="p-col-8">
      <div class="p-grid p-flex-column">
        <div class="p-col">
          <div class="p-grid">
             <div class="p-col">

            </div>
            <div class="p-col">
              <h5>Recherche</h5>
              <AutoComplete 
                v-model="selectedItem" 
                :suggestions="filteredItems" 
                @complete="loadSuggestionItems()" 
                field="name"  
                placeholder="Search">
                <template #item="{ item }">
                    <div>
                        <div>{{ item }}</div>
                    </div>
                </template>
              </AutoComplete>
            </div>
            <div v-if="itemObj" class="p-col" style="margin-top: 20px">
              <router-link :to="{
                name:'itemClicked'}"> 
                  <Button  icon="pi pi-forward" label="Item selectionner précédement" />
                </router-link> 
            </div>
          </div>
        </div>
          
        <div v-if="afficherRes" class="p-col">
                  
          <div class="p-grid">
            <tr v-for="item in itemsRes.value" :key="item.food.foodId">
                <Card id="cardItem">

                  <template #header>
                      <img v-if="item.food.image" id="imagProduct"   alt="img product" :src="item.food.image">

                      <img v-if="!item.food.image" alt="img product" src="../../assets/noPicture.jpg">
                  </template>

                  <template #title >
                    <div style="font-size: 15px">
                      {{item.food.label}}
                    </div>
                  </template>

                  <template #content>
                  
                    <div style="font-size: 10px">
                      category:
                      {{item.food.category}}
                    </div>
              
                  </template>

                  

                  <template #footer>
                      <router-link :to="{
                        name:'itemClicked'}"> 
                        <Button @click = "$store.dispatch('setdataItem',item)"  icon="pi pi-check" label="En savoir plus"/>
                      </router-link> 
                  </template>
                </Card> 
                
            </tr>
          </div> 
        </div>  
      </div>
    <div class="p-col-2">

    </div>  
    </div>
  </div>   
</template>

<script>
import ItemService from './itemsService';
import ItemClicked from './itemClicked.vue';


export default {
    components:{
        ItemClicked
       
    },
    created() {

        // creation du composant ItemServices
        this.itemService = new ItemService();
        
        //Recup valeur rentrées dans la barre de recherche
        let itemSelected = this.$store.getters.getinputSearch
        this.selectedItem = itemSelected

        // Recup dernier item cliqué
        let itemData = this.$store.getters.getDataItem
        if(itemData){
          this.itemObj = itemData
        }
         
          
        
    },
    data() {
        return {
            items: null,
            afficherRes:false,
            selectedItem: '', 
            filteredItems: null,
            itemsRes: [],
            itemObj : null
            
          
        }
    },
    itemService: null,
   
    
    computed: {
      // valeur trouvez correspondant à la recherche 
      itemsFound: {
        get(){
           return this.itemsFound
        },
        set(valeur){
            this.itemsRes = valeur
        }
      }
    },
    watch: {
        // gestion de la reactivité de de l'autoComplete  et la recherche
        selectedItem(){
            this.loadSuggestionItems()
            this.loadItems()
            this.$store.dispatch("setinputSearch",this.selectedItem)
          }  
    },

    methods: {
        // gestion de lauto complete
        loadSuggestionItems() {
            this.items = this.itemService.getItems(this.selectedItem).items
            this.filteredItems = this.items
   
        },
        // gestion de la recherche
          loadItems(){
            this.afficherRes = true
            this.itemsFound = this.itemService.loadItemsAPI(this.selectedItem).maval
            
          }
    },
    
}
</script>

<style scoped lang="scss">

#cardItem {
    width: 300px;
    height: 400px;
    margin-bottom: 50px;
    
}

#imagProduct {
 max-height: 167.5px; 
  
}


</style>   