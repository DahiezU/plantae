<template>
    <div  class="p-grid">
      <div class="p-col-2">

      </div>
      <div class="p-col-8">
        <div class="p-grid p-flex-column">

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
          
              <div v-if="afficherRes" class="p-col">
                  
                
        <div class="p-grid">
                  <tr v-for="item in itemsRes.value" :key="item.food.foodId">
                    
                      <Card id="cardItem">

                        <template #header>
                            <img v-if="item.food.image"
                            id="imagProduct"   alt="img product" :src="item.food.image">

                            <img v-if="!item.food.image"
                              alt="img product" src="../../assets/noPicture.jpg">
                              
                            
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
                              name:'itemClicked' , 
                              params: {
                                itemId:item.food.foodId ,
                                itemLabel:item.food.label ,
                                itemImg:item.food.image,
                                itemCategory: item.food.category }}"> 

                              <Button icon="pi pi-check" label="En savoir plus" />
                            </router-link>
                            
                        </template>
                      </Card> 
                      
                  </tr>
                </div> 
              </div>  
      </div>
      <div class="p-col-2"></div>
      
        </div>
    </div>

   

    
</template>

<script>
import ItemService from './itemsService';
import ItemClicked from './itemClicked.vue';
import DataView from 'primevue/dataview';
import axios from 'axios'


import { useStore } from 'vuex';


//const itemsFound = {}
export default {
    components:{
        ItemClicked
       
    },
    data() {
        return {
            items: null,
            afficherRes:false,
            selectedItem: null, 
            filteredItems: null,
            itemsRes: [],
            itemsFound:[],
            monItem:{
              itemLabel: '',
              itemId:'',
              itemImg:'',
              itemCategory: ''
            }
          
        }
    },
    
    itemService: null,
   
    
    created() {
        this.itemService = new ItemService();
    },
    
    computed: {
      filteredItems(){
        return this.filteredItems
      },
      itemsFound: {
        get(){
           return this.itemsFound
        },
        set(valeur){
            //console.log("ma belle valauer == " , valeur)
            this.itemsRes = valeur
        }
      }
    },
    watch: {
        selectedItem(){
            this.loadSuggestionItems()
            this.loadItems()
          }
        
          
    },
    
    methods: {
        loadSuggestionItems() {
          console.log(this.selectedItem)
          let resultat = [];
              this.items = this.itemService.getItems(this.selectedItem).items.value
              //console.log(this.items)

              /*this.items?.forEach(element => {
                        let configLine = {
                            name : element
                        }
                         resultat.push(element);
                    
            
                    });*/
            //console.log('mon resultat',resultat )
            
            this.filteredItems = this.items
          
         
        },
           loadItems() {
               var bite = []
            console.log("--"+this.selectedItem+"--");
            
            console.log("afficher res ->> " ,this.afficherRes);
            this.afficherRes = true
            console.log("afficher res apres ->> " ,this.afficherRes);
            
            axios
              .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+this.selectedItem+'&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
              .then(function (response) {
                console.log('ma putain de reponse de merde ->>>' ,response)
                bite.value = response.data.hints 
               
              
                
                
              })
              .catch(function (error) {
                console.error(error);
              });

                this.itemsFound = bite ;
                console.log(" mes  items found ->>>>> ",this.itemsFound)
              
              
            
              
            
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