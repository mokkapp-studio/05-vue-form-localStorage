<template>
  <table class="table">
    <thead>
        <tr>
        <th scope="col">id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorías</th>
        <th scope="col">Estados</th>
        <th scope="col">Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="tarea in tareas" :key="tarea.id">
            <th scope="row">{{tarea.id}}</th>
            <td>{{tarea.nombre}}</td>
            <td>
                <!-- Se pinta un v-for para eliminar los paréntesis del array -->
                <span v-for="(cat, item) in tarea.categorias" :key="item">
                    {{
                        tarea.categorias.length === item + 1 ? cat : cat + ', ' 
                    }}
                </span>
            </td>
            <td>{{tarea.nivel}}</td>
            <td>
                <router-link
                    class="btn btn-dark btn-sm"
                    :to="{
                        name: 'Editar',
                        params: {
                            id: tarea.id
                        }
                    }"
                >
                    Editar
                </router-link>
                <button 
                    type="button" 
                    class="btn btn-danger btn-sm"  
                    @click="setEliminar(tarea.id)"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import  {mapState, mapActions } from 'vuex';
export default {
    name: 'ListaTareas',
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['setEliminar'])
    }
}
</script>
