<template>
    <div>
      {{selectedItem}}
        <div>
            <h5>Basic</h5>
            <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItem($event)" field="name"  placeholder="Search"/>
            <Button icon="pi pi-check" label="Search" @click="loadItems()"/>
        </div>
          
        <div v-if="afficherRes">
          <tr v-for="item in itemsFound.value.hints" :key="item.food.foodId">
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
const itemsFound= {};
export default {
    data() {
        return {
            items: null,
            selectedItem: null,
            afficherRes:false,
            itemsFound
          
          
        }
    },
    filteredItems: null,
    itemService: null,
    
    created() {
        this.itemService = new ItemService();
    },
    
    computed: {
        filteredItems: {
          get(){
              let resultat = [];
              this.items = this.itemService.getItems(this.selectedItem).items.value
              console.log(this.items)

              this.items?.forEach(element => {
                        let configLine = {
                            name : element
                        }
                         resultat.push(configLine);
                    
            
                    });
            console.log('mon resultat',this.resultat )
            
            return resultat;
            
            
          },
          
        }
      
      
    },
    
    methods: {
        searchItem(event) {
          console.log(this.selectedItem)
          //this.items =  this.itemService.getItems(this.selectedItem).items.value
          /*if (!event.query.trim().length) {
                  //console.log("ddddd");
                    this.filteredItems = [...this.items];
                }*/
          
         
        },
      loadItems() {
            //console.log(this.selectedItem.name);
            this.afficherRes = true;
            axios
              .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+this.selectedItem+'&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
              .then(function (response) {
                //console.log(response)
                itemsFound.value = response.data
              })
              .catch(function (error) {
                console.error(error);
              });
            //console.log(this.items.value)
              console.log(itemsFound)
              return{
                itemsFound
              }
          }
    },
    
}
</script>
