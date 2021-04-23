<template>
    <div id='itemClicked' style="margin-top: .5em" >
        <div class="p-d-flex" style="border-style: solid">
            <div class="p-col-4">
                <img id="imagProduct"   alt="img product" :src="itemImg">
            </div>
            <div class="p-col-8">
                   
                    <Rating v-model="val1" />
                    <div class="p-text-center">
                        Mon produit -> {{itemLabel}}
                    </div>
                     <div class="p-text-left">
                         Ma catégory -> {{itemCategory}}
                    </div>
                    <br>
                    <label >Description : </label>
                    <div style="width: 80%">
                        Long text wraps and does not overlow.
                        2 sachets 500 g Pruneaux MI CUITS GEANT de la ferme. 
                        Mon petit avis : Très moelleux, encore davantage que nos 
                        dénoyautés. Le noyau révèle tout le fondant du fruit. 
                        C'est incomparable par rapport à des pruneaux dits réhydratés
                        non mi cuits qui sont là plupart du tps gorgés d'eau . 
                        Pour celles et ceux qui préfèrent ce côté hyper savoureux
                        à la praticité. Calibre géant - sans conservateur -
                        Idéal pour la dégustation - DLUO : 09/2021 Séchés 
                        directement à 35% d'humidité maximum
                    </div>

                     
                    
                        <div class="p-col">
                            <div class="p-field p-col-12 p-md-3">
                                <label for="horizontal">Quantité en Kg</label>
                                <InputNumber id="horizontal" v-model="quantiteKg" showButtons buttonLayout="horizontal" :step="0.25"
                                    decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            </div>
                        </div>
                        <div class="p-col">
                            <Button icon="pi pi-shopping-cart" ></Button>
                        </div>
                        
                        
                    
             </div>

            
        </div>       
    </div>
   
</template>

<script>


export default {
    name :'itemClicked',
    data() {
        return {
            val1:5,
            quantiteKg:0.00

          
        }
    },
    props: {
            itemLabel: '',
            itemId:'',
            itemImg:'',
            itemCategory: ''
    },
    
       
      
};
</script>