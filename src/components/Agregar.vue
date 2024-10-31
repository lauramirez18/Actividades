<template>
  <div class="form-container">
    <form class="form">
      <div class="form-group">
        <h4>Ingresa una nueva actividad</h4>
        <textarea cols="50" rows="10" id="textarea" v-model="actividad"></textarea>
      </div>
      <div class="form-group">
        <label for="date">
         <input  id="date" type="date" v-model="fecha" >  
        </label>
        
      </div>
      <div class="form-group">
        <q-select
      v-model="estado"
      :options="['Completado', 'Pendiente']"
      label="Estado"
      class="input"
      :class="{'text-green': estado === 'Completado',
       'text-red': estado === 'Pendiente'}"
    
    />
      </div>
      <div class="opciones">
         <button  class="form-submit-btn"><router-link to="/actividades">Cancelar</router-link></button>
      <button type="submit" class="form-submit-btn" @click="submitForm">Agregar</button> 
      </div>
    
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useActividadesStore } from '../stores/stores'
import Swal from 'sweetalert2';

const actividad = ref('')
const fecha = ref('')
const estado = ref(null)


const actividadesStore = useActividadesStore()
const router = useRouter()

const submitForm = (event) => {
  event.preventDefault()  

  if (actividad.value === '' || fecha.value === '' || estado.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Todos los campos son obligatorios',
    })
  
    return
  }

  const newActividad = {
    actividad: actividad.value,
    fecha: fecha.value,
    estado: estado.value  
  }
  
  actividadesStore.agregarActividad(newActividad)
  
 
  actividad.value = ''
  fecha.value = ''
  estado.value = '' 
  
 
  router.push('/actividades')
}

</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color : #000000;
}

         
.form-container {
  background-color: #8281819c;
  max-width: 500px;
  border: 2px solid transparent;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: rgb(3, 3, 3);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
  background-size: 200% 100%;
  box-shadow: 0px 10px 25px rgb(34, 16, 107);
  box-shadow: 5px 5px 10px 2px rgb(33, 9, 100);
  background: rgb(206,174,238);
  background: radial-gradient(circle, rgba(206,174,238,1) 0%, rgba(148,187,233,1) 100%);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #000000;
  
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 0px 30px;
  color: #000000;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: hsl(0, 0%, 0%);
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #020202;
  font-family: inherit;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid #7e7c7c;
  background-color: rgba(80, 79, 79, 0.37);
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #000000;
  height: 96px;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.3);
  font-family: inherit;
  background-color: rgba(80, 79, 79, 0.37);
}
.input{
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #000000 !important;
  height: 96px;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.3);
  background-color: rgba(80, 79, 79, 0.37);
  font-family: inherit;
}




.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #ffffff;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: #ffffff;
}

.form-container .form-submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-family: inherit;
  color: #ffffff;
  font-weight: 600;
  width: 40%;
  background: #461575;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.3s;
}

.form-container .form-submit-btn:hover {
  background-color: #9000ff;
  border-color: #04ff04;
  
}

.form-container .form-submit-btn:active {
  scale: 0.95;
}

h4{
  text-align: center;
  margin-bottom: 20px;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
  animation: slideIn 1s ease-in-out;
  animation: float 3s ease-in-out infinite;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes float {
  0%, 100% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-10px); 
  }
}

.opciones{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #ffffff;
}

.text-green {
  color: green;
}
.text-red {
  color: red;
}



</style>