
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
import ItemService from '../itemsService';
import axios from 'axios'
import { ref} from 'vue'
const itemsFound= {};

export default {
    data() {
        return {
            items: null,
            afficherRes:false,
            selectedItem: null, 
            filteredItems: [],
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
          /*if (!query.trim()) {
              this.filteredItems = [...this.items];
                return;
          }
          
          this.filteredItems = this.items.filter((f) => f.includes(query));*/
    

          console.log(this.selectedItem)
          let resultat = [];
              this.items = this.itemService.getItems(this.selectedItem).items.value
              console.log("mes items  de loadSuggestionItems ",this.items)

              this.items?.forEach(element => {
                        let configLine = {
                            name : element
                        }
                         resultat.push(configLine);
                    
            
                    });
            console.log('mon resultat',resultat )
            
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





<template>
    <div>
      {{filteredItems}}
      <br>
      <br>
      {{selectedItem}}
        <div>
            <h5>Basic</h5>
            <AutoComplete 
              v-model="selectedItem" 
              :suggestions="filteredItems" 
              @complete="loadSuggestionItems()" 
              field="selectedItem"  
              placeholder="Search"
              >
              <template #item="{ item }">
                  <div>
                    <div>{{ item }}</div>
                  </div>
                </template>
              </AutoComplete>

              <Button icon="pi pi-check" label="Search" @click="loadItems()"/>
  
            
        </div>
        <div v-if="afficherRes"> 
          <tr v-for="item in resultatSearch.reponseSearch" :key="item.food.foodId">
              biteeee ->>>> 
              {{item}}
          </tr>
        </div>
    
    </div>
</template>

<script>
import ItemService from './itemsService';



export default {
    data() {
      return {
          selectedItem:null,
          filteredItems:["orange","abeille","bite"],
          items :["orange","abeille","bite"],
          resultatSearch:null,
          afficherRes : false

      }
    },
    itemService: null,
    created() {
        this.itemService = new ItemService();
    },

    methods: {
      loadSuggestionItems(){
            this.items =  this.itemService.getItemsSuggestions(this.selectedItem).items.value
            this.filteredItems = this.items.filter((f) => f.includes(this.selectedItem));
            console.log("Mes items Filtré", this.filteredItems)
        },
        /*loadItems(){
            console.log("sale putain de fils de chinne ",this.itemService.searchItemSelected(this.selectedItem))
            //console.log("----------------->",this.resultatSearch)

            this.afficherRes=true
          }*/

    },
    
        
    
}
</script>
