<template>

  <input type="text" v-model="nameEntre" />

  <tr v-for="item in items['hits']" :key="item.item_id">
    <Card>
      <template #header>
          <img id="imagProduct"   alt="img product" src="public/img/tomate.jpg">
          
      </template>
      <template #title>
        {{item["fields"]["item_name"]}}
      </template>
      <template #content>
        Brand name : {{item["fields"]["brand_name"]}} <br>
        Calorie : {{item["fields"]["nf_calories"]}} <br>
        Total Fat : {{item["fields"]["nf_total_fat"]}} <br>
  
      </template>
      <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
      </template>
    </Card> 
  </tr>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
   setup() {
     const items = ref('');
     const nameItems = ref('');
     const brandItems = ref('');
     const calorieItems = ref('');
     const nameEntre = 'tomato';
    const options = {
       params: {fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
  headers: {
    'x-rapidapi-key': '36adc59313msh8e3a53d4305517ep163457jsn0a1b2676554e',
    'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com'
  }
    };

    axios
      .get( 'https://nutritionix-api.p.rapidapi.com/v1_1/search/gala%20apple', options)
      .then(function (response) {
        items.value = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    return {
      items,
     
    };
  },
  computed: {
     findItemByName() {
      return this.collectionCards?.find(card => card.name.toLowerCase() === this.cardName.toLowerCase());
    }
    
  },
});
</script>

<style scoped>
#imagProduct{
  max-width: 10%;
  max-height: 10%;
}
</style>






