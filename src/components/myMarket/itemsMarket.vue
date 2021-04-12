<template>
  <div>
 <div id="app">
  {{ items }}
</div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
   setup() {
     const items = ref('');
    const options = {
       
params: {name: 'The Ultimate Beefless Ground'},
  headers: {
    'x-rapidapi-key': 'c6d25a11ebmsh522767e02dcdefcp1b4980jsn42aa3fde201c',
    'x-rapidapi-host': 'chomp.p.rapidapi.com'
  },
  
    };

    axios
      .get('https://chomp.p.rapidapi.com/product-search.php', options)
      .then(function (response) {
        items.value = response.data;
        console.log("item :::", items.value)
      })
      .catch(function (error) {
        console.error(error);
      });

    return {
      items,
     
    };
  },
  computed: {
    collectionitems() {
      console.log("this.items :::", this.items)
      return this.items;
    },
    
  },
});
</script>

<style scoped>
</style>