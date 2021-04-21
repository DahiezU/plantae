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
            selectedItem: null,
            filteredItems: null,
            afficherRes:false,
            itemsFound
          
          
        }
    },
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
    methods: {
        searchItem(event) {
          this.items =  this.itemService.getItems(this.selectedItem).items.value
          console.log('<------------');
          //console.log(this.itemService.getItems(this.selectedItem).items.value);
            setTimeout(() => {
                if (!event.query.trim().length) {
                  //console.log("ddddd");
                    this.filteredItems = [...this.items];
                }
                else {
                    //let tap = [];
                    /*console.log(this.filteredItems);
                    //this.filteredItems = [];
                    this.filteredItems = this.items.filter((choixItems) => {
                        console.log(choixItems);
                        //tap.push(choixItems); 
                        return choixItems.startsWith(event.query.toLowerCase());;
                    });*/
                    
                    //console.log(this.filteredItems);
                    //console.log(tap);
                     //this.filteredItems = tap ;
                     //console.log(this.filteredItems[0]);
                    let resultat = [];
                     this.items.forEach(element => {
                        let configLine = {
                            name : element
                        }
                         resultat.push(configLine);
                    
            
                    });
                    this.filteredItems = resultat ;
                }
            }, 250);
        },
      loadItems() {
            //console.log(this.selectedItem.name);
            this.afficherRes = true;
            axios
              .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+this.selectedItem.name+'&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
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