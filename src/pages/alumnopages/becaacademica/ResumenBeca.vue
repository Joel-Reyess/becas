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
      <p>Nombre: {{ formData && formData.nombre }}</p>
      <p>Matrícula: {{ formData && formData.matricula }}</p>
      <p>CURP: {{ formData && formData.curp }}</p>
      <p>Telefono: {{ formData && formData.telefono }}</p>
      <p>Correo Institucional: {{ formData && formData.correoinstitucional }}</p>
      <p>Beca: {{ formData && formData.beca }}</p>
      <p>Carrera: {{ formData && formData.carrera }}</p>
      <p>Area: {{ formData && formData.area }}</p>
      <p>Grado: {{ formData && formData.grado }}</p>
      <p>Cuatrimestre: {{ formData && formData.cuatrimestre }}</p>
      <p>Grupo: {{ formData && formData.grupo }}</p>
      <p>Correo Tutor: {{ formData && formData.correotutor }}</p>
      <p>Genero: {{ formData && formData.genero }}</p>
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


export default {
  setup() {
      const formData = ref({
        nombre: '',
        matricula: '',
        curp: '',
        telefono: '',
        correoinstitucional: '',
        beca: '',
        carrera: '',
        area: '',
        grado: '',
        cuatrimestre: '',
        grupo: '',
        correotutor: '',
        genero: '',
      });

      onMounted(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
          Object.assign(formData.value, savedFormData);
        }
      });

    const onSubmit = () => {
      localStorage.setItem('formData', JSON.stringify(formData.value));
      axios
        .post('http://127.0.0.1:3000/api/form', formData.value)
        .then((res) => {
          console.log('Datos enviados correctamente');
        })
        .catch((error) => {
          console.error('Error al enviar los datos:', error);
        });

      localStorage.removeItem('formData');
    };


    return {
      formData,
      onSubmit,
    };
  },
};
</script>
