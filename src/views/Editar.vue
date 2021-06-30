<template>
    <h1>$route.params.id/ para rutas dinamicas</h1>
    <hr>
    Editar {{$route.params.id}} {{tarea}}
    <form @submit.prevent="setUpdate(tarea)">
        <Formulario :tarea="tarea"/>
    </form>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import Formulario from '../components/Formulario.vue'
export default {
  components: { Formulario },
   computed: {
       ...mapState(['tarea'])
   },
   methods: {
       ...mapActions(['setTarea', 'setUpdate'])
   },
   created(){
       this.setTarea(this.$route.params.id)
   }

}
</script>
