<template>
<div>
  <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText type="text" v-model="nameEntre" placeholder="Search" />
  </span>

</div>




<div v-if="afficherRes">
  <tr v-for="item in items.value.hints" :key="item.item_id">
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
          <Button icon="pi pi-check" label="Save" />
          <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
      </template>
    </Card> 
  </tr>


</div>



</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
const items= {};
export default defineComponent({
 
   data() {
      return{
        afficherRes:false,
        nameEntre: '',
        items
       
      };
    },
   

    watch: {
    nameEntre() {
      this.afficherRes = true;
      axios
        .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+this.nameEntre+'&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
        .then(function (response) {
          //console.log(response)
          items.value = response.data
        })
        .catch(function (error) {
          console.error(error);
        });
      //console.log(this.items.value)
        console.log(items.value)

        return{
          items
        }
      }
    }

  
});
</script>

<style scoped>

</style>