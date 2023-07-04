<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Academica</p>
    <ButtonProgress></ButtonProgress>
    <ProgresoBar></ProgresoBar>
    <q-space />
    <div class="q-pa-xs q-pt-lg">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="row">
          <q-input
            filled
            v-model="nombre"
            label="Nombre Completo"
            hint="Empezando por apellidos"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            type="number"
            v-model="matricula"
            label="Matricula"
            hint="Matricula de la escuela"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="curp"
            label="Ingrese su curp"
            hint="Clave Única de Registro de Población"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            type="number"
            v-model="telefono"
            label="Telefono"
            hint="Numero propio"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            type="email"
            v-model="correoinstitucional"
            label="Correo"
            hint="Correo Institucional"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="beca"
            label="Tipo de beca"
            hint="Beca que desea solicitar"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
          filled
          v-model="carrera"
          label="Carrera"
          hint="Carrera cursando"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="area"
            label="Area"
            hint="Area cursando"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
          <q-space />
          <q-input
            filled
            v-model="grado"
            label="Grado"
            hint="Grado al que perteneces"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            />
            <q-space />
            <q-input
            filled
            v-model="cuatrimestre"
            label="Cuatrimestre"
            hint="Cuatrimestre al que deseas aplicar la beca"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            />
            <q-space />
            <q-input
            filled
            v-model="grupo"
            label="Grupo"
            hint="Grupo al que perteneces"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
            />
            <q-space />
            <q-input
              filled
              v-model="correotutor"
              label="Correo del tutor"
              hint="Correo de tutor"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'Por favor completa este campo',
              ]"
              class="col-5 q-pt-lg"
            />
            <q-space />
          <q-input
            filled
            v-model="genero"
            label="Genero"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Por favor completa este campo',
            ]"
            class="col-5 q-pt-lg"
          />
       
        </div>

        <q-toggle
          v-model="accept"
          label="Ya revise que las respuestas sean correctas"
        />

        <div>
          <q-btn label="Continuar" type="submit" color="primary" @click="onSubmit" to="/alumno/academica/paso2" />

        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import ProgresoBar from "src/components/Alumno/ProgresoBar.vue";
import formState from "src/formState.js";

export default {
  components: {
    ButtonProgress,
    ProgresoBar,
  },
  setup() {
    const $q = useQuasar();

    const onSubmit = () => {
      if (formState.accept !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Necesitas revisar que todo este correcto",
        });
      } else {
        const formData = {
          nombre: formState.nombre,
          matricula: formState.matricula,
          curp: formState.curp,
          telefono: formState.telefono,
          correoinstitucional: formState.correoinstitucional,
          beca: formState.beca,
          carrera: formState.carrera,
          area: formState.area,
          grado: formState.grado,
          cuatrimestre: formState.cuatrimestre,
          grupo: formState.grupo,
          correotutor: formState.correotutor,
          genero: formState.genero,
        };

        axios
          .post('/api/form', formData)
          .then(res => {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Datos enviados correctamente',
            });
          })
          .catch(error => {
            console.error('Error al enviar los datos:', error);
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'Error al enviar los datos',
            });
          });
      }
    };

    const onReset = () => {
      formState.nombre = null;
      formState.matricula = null;
      formState.curp = null;
      formState.telefono = null;
      formState.correoinstitucional = null;
      formState.beca = null;
      formState.carrera = null;
      formState.area = null;
      formState.grado = null;
      formState.cuatrimestre = null;
      formState.grupo = null;
      formState.correotutor = null;
      formState.genero = null;
      formState.accept = false;
    };

    return {
      formState,
      onSubmit,
      onReset,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  width: 171px;
  height: 29px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 18px;

  font-weight: 700;
}
</style>
