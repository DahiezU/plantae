<template>
    <div>
        <div>
            <h5>Basic</h5>
            <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItem($event)" field="name" />

        </div>
    </div>
</template>

<script>
import ItemService from './itemsService';
import {FilterService,FilterMatchMode} from 'primevue/api';

export default {
    data() {
        return {
            items: null,
            selectedItem: null,
            filteredItems: null,
          
          
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
                  
                    this.filteredItems = this.items.filter((choixItems) => {
                        console.log(choixItems);
                        return choixItems.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
    }
}
</script>