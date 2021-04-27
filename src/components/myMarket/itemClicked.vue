<template>
    <div v-if="itemObj" >
    <div class="p-grid">
        <div  class="p-col-2">

        </div>
        <div  class="p-col-8">
            <div class="p-grid p-flex-column">
                <div class="p-col">
                    <div  id='itemBox' class="p-grid p-md-flex-column" >
                        <div class="p-d-col p-md-col" id="imgCol">
                            <div class="p-flex">
                                <img v-if="itemObj.food.image"
                                     id="imagProduct"   alt="img product" :src="itemObj?.food.image">

                                <img v-if="!itemObj.food.image"
                                    alt="img product" src="../../assets/noPicture.jpg">
                            </div>
                            
                        </div>
                        <div class="p-col p-md-col" id="infoItemCol">
                                <div class="p-grid p-flex-column">
                                    <div class="p-col">
                                        <div class="p-text-center p-text-bold" >
                                            <label style="font-size: 30px" >{{itemObj?.food.label}} </label>
                                        </div>
                                        <div class="p-text-left">
                                            <label class="p-text-light" style="font-size: 15px" >
                                                Catégorie : {{itemObj?.food.category}}
                                            </label>
                                        </div>
                                    </div>

                                    <div class="p-col" style="margin-top: 5px">
                                        <label >Description : </label>
                                    
                                        <div>
                                            Long text wraps and does not overlow.
                                            2 sachets 500 g Pruneaux MI CUITS GEANT de la ferme. 
                                            Mon petit avis : Très moelleux, encore davantage que nos 
                                            dénoyautés. Le noyau révèle tout le fondant du fruit. 
                                            C'est incomparable par rapport à des pruneaux dits réhydratés
                                           
                                        </div>
                                    </div>


                                    <div class="p-col" style="margin-top: 5%">
                                        <div class="p-grid">
                                            <div class="p-col">
                                                    <label> L'achat se fait au kilo</label>
                                            </div>
                                            <div  class="p-col">
                                                <label> Quantité Disponible : 8</label>
                                            </div>
                                        </div>


                                    </div>

                                </div>       
                        </div>   
                    </div>
                </div> 
                <div id='marketBox' class ="p-col">
                    <div class="p-grid p-flex-column">
                        <div class="p-col">
                            <label class="p-text-center" style="font-size: 25px"> Lieu de Production  </label>
                        </div>
                       
                        <div class="p-col">
                            <div id='descMarket' style="width: 100%">
                             
                                    Je suis installé depuis 2011 sur une surface de deux hectares de cultures maraîchères sous serres et en plein air.
                                    Je produit divers légumes (poireaux, carottes,endives de terre, pomme de terre, choux, céleris, navets, oignons, 
                                    échalotes, salades, épinards, petits pois, haricots, radis...) mais aussi des fraises pleine terre (mai, juin) et 
                                    des melons (août, septembre).J'élève également des poulets et des pintades.
                                    J'adhère au groupe fruits rouges et au pôle légumes. Je bénéficie donc de conseils pour pratiquer une agriculture 
                                    raisonnée et respectueuse de l'environnement.
                           
                                   
                            </div>
                        </div>
                        <div class="p-col">
                                <div class="p-grid">
                                    <div class="p-col">

                                    </div>
                                    <div class="p-col">
                                        <img v-if="itemObj?.food.image"
                                            id="imagProduct"   alt="img product" :src="itemObj?.food.image">

                                        <img v-if="!itemObj?.food.image"
                                            alt="img product" src="../../assets/noPicture.jpg">                             
                                    </div>
                                    <div class="p-col">

                                    </div>                                    
                                </div>                                
                        </div>
                    </div>
                </div>  
            </div>
            <div class="p-grid p-flex-column">
                <div class="p-col">
                    <label style="font-size"> Produits du même lieu :</label>
                </div>
                <div  class="p-col">
                    <div class="p-grid">
                        <div class="p-col">
                            <Card>
                                <template #header>
                                    <img v-if="itemObj?.food.image"
                                        id="imagProduct"   alt="img product" :src="itemObj?.food.image">

                                    <img v-if="!itemObj?.food.image"
                                        alt="img product" src="../../assets/noPicture.jpg">
                                </template>
                                <template #title>
                                    Advanced Card
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    
                                </template>
                                <template #footer>
                                    <Button icon="pi pi-check" label="Save" />
                                    
                                </template>
                            </Card>
                        </div>
                        <div class="p-col">    
                            <Card>
                                <template #header>
                                    <img v-if="itemObj?.food.image"
                                        id="imagProduct"   alt="img product" :src="itemObj?.food.image">

                                    <img v-if="!itemObj?.food.image"
                                        alt="img product" src="../../assets/noPicture.jpg">
                                </template>
                                <template #title>
                                    Advanced Card
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                   
                                </template>
                                <template #footer>
                                    <Button icon="pi pi-check" label="Save" />
                                    
                                </template>
                            </Card>

                        </div>
                        <div class="p-col">
                             <Card>
                                <template #header>
                                    <img v-if="itemObj?.food.image"
                                        id="imagProduct"   alt="img product" :src="itemObj?.food.image">

                                    <img v-if="!itemObj?.food.image"
                                        alt="img product" src="../../assets/noPicture.jpg">
                                </template>
                                <template #title>
                                    Advanced Card
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                </template>
                                <template #footer>
                                    <Button icon="pi pi-check" label="Save" />
                                   
                                </template>
                            </Card>
                        </div>
                    </div>
                    

                </div>
                
            </div>       
        </div>
        <div class="p-col-2">

        </div>

    </div>
   </div>
</template>

<script>


export default {
    name :'itemClicked',
    created(){
        
        let itemObj = this.$store.getters.getDataItem
        //console.log("itemObj" ,this.itemObj)
        if(!itemObj ){
            this.$router.push({name: "itemsMarket"})
        }

        this.itemObj = itemObj
    },
    data() {
        return {
            val1:5,
            quantiteKg:0.00,
            itemObj : {}
          
        }
    },
    /*props: {
            itemObj: Object
            itemLabel: '',
            itemId:'',
            itemImg:'',
            itemCategory: ''
    },*/
    
       
      
};
</script>

<style lang="scss">

// Mon Item box 
#itemBox {
    font-family: 'segoe UI';
    margin-top: 20px;
    padding-right: -1em;
    padding-bottom: 0px;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    border-color: red;
    background-color: lightgreen;
    
}


#imgCol{
    border-style: solid;
    border-color:black ;
    border-width: 2px;
    
    
}

#imgProduct{
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    border-color:lightgreen;
}

#infoItemCol{
    border-style: solid;
    border-color:black ;
    border-width: 2px;
    margin-right: 1em;
    padding-left: 10px;
    padding-right: 0px;

}

// Mon cote market 
#marketBox{
    margin-top: 20px;
    border-style: solid;
    border-width: 0.5px;
    border-radius: 5px;
    border-color: green;
    background-color : green;
}
#imgMarket{ 
    border-style: solid;
    border-radius: 10px;
    border-color: green;
    margin-top: 15px;
    

}

#descMarket{
    font-family: 'segoe UI';
}




</style>