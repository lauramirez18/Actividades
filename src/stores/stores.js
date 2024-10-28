import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActividadesStore = defineStore('actividades', () => {
  const actividades = ref([])
  
  

  const agregarActividad = (actividad) => {
    actividad.id = actividades.value.length + 1
    actividades.value.push(actividad)
  }

  const borrarActividad = (actividad) => {
    const index = actividades.value.findIndex(a => a.id === actividad.id)
    if (index !== -1) actividades.value.splice(index, 1)
  }

  const editarActividad = (id, updatedActividad) => {
    const index = actividades.value.findIndex(a => a.id === id)
    if (index !== -1) {
      actividades.value[index] = { ...actividades.value[index], ...updatedActividad }
    }
    console.log(index)
    console.log("updatedActividad",updatedActividad)
  }
  

  return {
    actividades,
    agregarActividad,
    borrarActividad,
    editarActividad
  }
},
{
  persist: true
})
