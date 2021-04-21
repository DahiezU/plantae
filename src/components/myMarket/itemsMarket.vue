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

          <tr v-for="item in itemsRes.value" :key="item.food.foodId">
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

export default {
    data() {
        return {
            items: null,
            afficherRes:false,
            selectedItem: null, 
            filteredItems: null,
            itemsFound:[],
            itemsRes:[]

          
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
      /*itemsFound: {
        get(){
           return this.itemsFound
        },
        set(valeur){
            //console.log("ma belle valauer == " , valeur)
            this.itemsRes = valeur
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
           loadItems() {
            //console.log(this.selectedItem.name);
            this.afficherRes = true;
            let test = [];
            axios
              .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+this.selectedItem.name+'&app_id=88eed00f&app_key=dfafd7498b7690a96f797bd1ec639be8')
              .then(function (response) {
                //console.log(response)
                
                //console.log("mon  test resultat ==== " ,test)

                response.data.hints.forEach(element => {
                        let resultathints = {
                            foodId : element.food.foodId,
                            label : element.food.label ,
                            category : element.food.category ,
                            categoryLabel : element.food.categoryLabel,
                            image :  element.food.image
                        }
                         test.push(resultathints);
                    
            
                    });
                    //console.log("ma valeur de test ===" , test)
              })
              .catch(function (error) {
                console.error(error);
              });
             
              //this.itemsFound = test
              console.log("mon  test resultat ==== " ,this.itemsFound)
            
              
              
          }
    },
    
}
</script>
