import { createStore } from 'vuex';
import router from '../router/index'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      nivel: ''
    }
  },
  mutations: {
    cargar(state, payload) {
      state.tareas = payload
    },
    set(state, payload) {
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload) {
      // utilizamos filter para devolver un nuevo array sin el id seleccionado
      // (item => ) Preguntamos por cada recorrido si el id del item es distinto al item del pasyload
      // filtramos todos los items que son distintos al id  que tenemos
      state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tarea(state, payload) {
      // state.tarea = porque solo cogemos una y llenamos el objeto de tarea
      // si es igual devuelve el objeto
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload)  {
      // se mapea las tareas y se identifica el mismo id de tarea con el payload
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
  },
  actions: {
    cargarLocalStorage({commit}) {
      if(localStorage.getItem('tareas')) {
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas )
        return
      }
      localStorage.setItem('tareas', JSON.stringify([]))
    },
    setTareas({commit}, tarea) {
      commit('set', tarea)
    },
    setEliminar({commit}, id) {
      commit('eliminar', id)
    },
    setTarea({commit}, id) {
      commit('tarea', id)
    },
    setUpdate({commit}, tarea) {
      commit('update', tarea)
    }
  },
  modules: {
  } 
})
