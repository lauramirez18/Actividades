<template>
  <q-layout view="hHh lpR fFf">
    <q-header  height-hint="98" class="header">
      <q-toolbar>
        <q-toolbar-title class="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/17862/17862120.png" alt="">
          <h3 class="titulo"><router-link to="/Actividades">Actividades</router-link></h3>
        </q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

</script>
<style>
*{
  margin: 0;
  padding: 0;
}
/* body{
  background-image: url(https://media.istockphoto.com/id/1410976384/es/vector/acuarela-azul-claro-m%C3%A1rmol-acr%C3%ADlico-backgound.jpg?s=612x612&w=0&k=20&c=clhoQRpAlWl5GrAySOt1SRI3Ptbpp9h8hGpL-nLRHiA=);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

} */
.header{
 background-color: rgb(9,9,121);
 background: linear-gradient(90deg, rgba(9,9,121,1) 14%, rgba(118,3,199,1) 100%);
  padding: 20px;
  color: white;
  box-shadow: 0px 10px 25px grey;
  
}

.footer{
  background: rgb(9,9,121);
  background: linear-gradient(90deg, rgba(9,9,121,1) 14%, rgba(118,3,199,1) 100%);
   box-shadow: 0px -10px 25px grey;
}
.titulo{
  color: white;
}

.logo{
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img{
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>
