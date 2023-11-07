<template>
  <div class="d-flex flex-column align-items-center mt-4">
    <div class="card" style="width: 18rem;">
        <img :src="serie.imagen" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">{{serie.nombre}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">IMDB: {{serie.puntuacion}}</h6>
            <router-link :to="'/personajes/'+serie.idSerie" class="btn btn-primary">Personajes</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "../Services/ServicesSeries";
const servicio = new ServiceSeries();
export default {
  name: "DetallesSerieComponent",
  data(){
    return{
        serie:{},
    }
  },
  methods:{
    cargarSerie(){
        var id=this.$route.params.id;
        servicio.findSerie(id).then(res=>{
            this.serie=res;
        });
    },
  },
  mounted(){
    this.cargarSerie();
  },
  watch:{
    '$route.params.id'(next,old){
        if (next!=old) {
            this.cargarSerie();
        }
    }
  }
};
</script>

<style>
</style>