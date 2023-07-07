<template>
  <q-page>
    <p class="title">Beca Academica</p>
    <button-progress></button-progress>
    <TresProgress></TresProgress>
    <div class="container">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >

      <p>Los datos enviados son:</p>
      <p>Nombre: {{ formData.nombre }}</p>
      <p>Matrícula: {{ formData.matricula }}</p>
      <p>CURP: {{ formData.curp }}</p>
      <p>Telefono: {{ formData.telefono }}</p>
      <p>Correo Institucional: {{ formData.correoinstitucional }}</p>
      <p>Beca: {{ formData.beca }}</p>
      <p>Carrera: {{ formData.carrera }}</p>
      <p>Area: {{ formData.area }}</p>
      <p>Grado: {{ formData.grado }}</p>
      <p>Cuatrimestre: {{ formData.cuatrimestre }}</p>
      <p>Grupo: {{ formData.grupo }}</p>
      <p>Correo Tutor: {{ formData.correotutor }}</p>
      <p>Genero: {{ formData.genero }}</p>
      <div>
        <q-btn label="Subir" type="submit" color="primary"/>
      </div>
  </q-form>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import TresProgress from 'src/components/Alumno/TresProgress.vue';
import { mapActions } from 'vuex';


export default {
  setup() {
    const formData = ref(null);

    onMounted(() => {
      const savedFormData = JSON.parse(localStorage.getItem('formData'));
      formData.value = savedFormData;
      axios.get('/api/form')
      .then(response => {
        formData.value = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
    });

    const onSubmit = () => {
      // Realizar el proceso de envío a la base de datos
      // ...

      // Limpiar o eliminar los datos del localStorage
      localStorage.removeItem('formData');
    };


    return {
      formData,
      onSubmit,
    };
  },
};
</script>
