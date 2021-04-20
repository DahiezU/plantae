<template>
    <div>
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
import {FilterService,FilterMatchMode} from 'primevue/api';
const itemsFound= {};
export default {
    data() {
        return {
            items: null,
            afficherRes:false,
            itemsFound
          
          
        }
    },
    selectedItem: null,
    itemService: null,
    created() {
        this.itemService = new ItemService();
    },
    /*mounted() {
        //this.itemService.getItems().then(data => this.items = data);
        this.items =  this.itemService.getItems(this.selectedItem).items.value
        console.log('<------------');
        console.log(this.itemService.getItems().items.value);
    },*/

    computed: {

          selectedItem: {
            get(){
              return this.selectedItem;
            },
            set(inputText){
              console.log(" bonjour simon",this.selectedItem) 
              let resultat = [];
              this.items = this.itemService.getItems(inputText).items.value
              console.log(this.items)
                    /* this.items?.forEach(element => {
                        let configLine = {
                            name : element
                        }
                         resultat.push(configLine);
                    
            
                    });
              this.filterItems = resultat*/
            }
          },

          filteredItems: {
            get(){
                  return this.filteredItems;
                }
            
                
          }
      
    },
    
    methods: {
        searchItem(event) {
          this.items =  this.itemService.getItems(this.selectedItem).items.value
         // console.log("aoao :::", this.itemService.getItems(this.selectedItem).items)
          //console.log('<------------', "ok"+ this.items + "ok");
         // console.log("this.filteredItems before :::", this.filteredItems)
          //console.log(this.itemService.getItems(this.selectedItem).items.value);
            /*setTimeout(() => {
              console.log(event.query)
                if (!event.query.trim().length) {
                 
                    this.filteredItems = [...this.items];
                }
                else {
                    
                    let resultat = [];
                     this.items?.forEach(element => {
                        let configLine = {
                            name : element
                        }
                         resultat.push(configLine);
                    
            
                    });
                    this.filteredItems = resultat ;
                    console.log("this.filteredItems after :::", this.filteredItems)
                }
            }, 250);*/
        },
      loadItems() {
            //console.log(this.selectedItem.name);
            this.afficherRes = true;
            axios
              .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+this.selectedItem.name+'&app_id=88eed00f&app_key=dfafd7498b7690a96f797bd1ec639be8')
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