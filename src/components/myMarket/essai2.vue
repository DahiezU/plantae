<template>
    <div>
      {{filteredItems}}
      <br>
      <br>
      {{selectedItem}}
        <div>
            <h5>Basic</h5>
            <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="loadSuggestionItems()" field="name"  placeholder="Search"/>
            <Button icon="pi pi-check" label="Search" @click="loadItems()"/>
        </div>
          
       <div v-if="afficherRes">

          <tr v-for="item in itemsFound.value" :key="item.food.foodId">
            <Card>
              <template #header>
                  <img id="imagProduct"   alt="img product" :src="item.food.image">
                  
              </template>
              <template #title>
                {{item.food.label}}
              </template>
              <template #content>
              
                category: {{item.food.category}} <br>
              
          
              </template>
              <template #footer>
                  <Button icon="pi pi-check" label="Save" href='/myMarket/itemChoose'/>
                  <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
              </template>
            </Card> 
          </tr>
        </div>
    </div>
</template>

<script>
import ItemService from './itemsService';
import axios from 'axios'
import { ref} from 'vue'
const itemsFound= {};

export default {
    data() {
        return {
            items: null,
            afficherRes:false,
            selectedItem: null, 
            filteredItems: null,
            itemsFound
            

          
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
      itemsFound(){
        return itemsFound
      }
      /*itemsFound: {
        get(){
          return itemsFound
        },
        set(valeur){
          this.itemsFound = valeur
        }
      }*/
    },
    watch: {
        selectedItem(){
            this.loadSuggestionItems()
          }
        
          
    },
    
    methods: {
        loadSuggestionItems() {
          console.log(this.selectedItem)
          let resultat = [];
              this.items = this.itemService.getItems(this.selectedItem).items.value
              //console.log(this.items)

              this.items?.forEach(element => {
                        let configLine = {
                            name : element
                        }
                         resultat.push(configLine);
                    
            
                    });
            //console.log('mon resultat',resultat )
            
            this.filteredItems = resultat
          
         
        },

      /*loadItems() {
            console.log("--"+this.selectedItem.name+"--");
            
            console.log("afficher res ->> " ,this.afficherRes);
            this.afficherRes = true
            console.log("afficher res apres ->> " ,this.afficherRes);
            
            axios
              .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+this.selectedItem.name+'&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
              .then(function (response) {
                console.log('ma putain de reponse de merde ->>>' ,response)
                itemsFound.value = response.data.hints 
                console.log('ms itemsFound ->>>' , itemsFound.value)
              
                
                
              })
              .catch(function (error) {
                console.error(error);
              });

              return itemsFound.value
             
            
              
            
          }*/
           loadItems() {
            //console.log(this.selectedItem.name);
            this.afficherRes = true;
            axios
              .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+this.selectedItem.name+'&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
              .then(function (response) {
                //console.log(response)
                itemsFound.value = response.data.hints
              })
              .catch(function (error) {
                console.error(error);
              });
            //console.log(this.items.value)
              console.log("itemsFound classique ---->",itemsFound)
              
              this.itemsFound = itemsFound
              console.log("this itemsFound   ---->",this.itemsFound.value)
          }
    },
    
}
</script>
