<template>
  <q-page class="q-pa-md container" padding>
    <p class="title">Beca Academica</p>
    <button-progress></button-progress>
    <tres-progress></tres-progress>
    <q-space />
    <p>¡Adjuntar solo archivos PDF!</p>
    <q-space />
    <div class="q-pa-xs q-pt-lg">
      <q-card class="my-card q-card--bordered">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
          enctype="multipart/form-data"
        >
        <div class="row" padding>
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="credencial" name="pdfFiles" label="Credencial, ambos lados" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="boleta" name="pdfFiles" label="Boleta de calificaciones" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="comprobante" name="pdfFiles" label="Comprobante de ingresos" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="compromiso" name="pdfFiles" label="Carta compromiso y aceptacion de beca" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-file filled bottom-slots class="col-5 q-pt-lg" v-model="conducta" name="pdfFiles" label="Carta buena conducta" counter max-files="12" accept="application/pdf">
          <q-btn round dense flat icon="add" @click.stop.prevent />
        </q-file>
        <q-space />
        <q-toggle
          v-model="accept"
          label="Ya revise que las respuestas sean correctas"
        />
        <div class="col-12 q-pt-lg">
            <q-btn label="Continuar" type="submit" color="primary"/>
          </div>
          <q-space />
        </div>
      </q-form>
      </q-card>
    </div>
  </q-page>

</template>

<script>
import { defineComponent, ref } from "vue";
import ButtonProgress from "src/components/Alumno/ButtonProgress.vue";
import TresProgress from 'src/components/Alumno/TresProgress.vue';
import axios from "axios";

export default {
  components: {
    ButtonProgress,
    TresProgress,
},
  setup() {
    const accept = ref(false);
    const files = ref({
      credencial: null,
      boleta: null,
      comprobante: null,
      compromiso: null,
      conducta: null,
    });

    const onFileChange = (fieldName, event) => {
      const file = event.target.files[0];
      files.value[fieldName] = file;
    };

    const onSubmit = async () => {
      // Crear un objeto FormData para enviar los archivos
      const formData = new FormData();

      // Agregar cada archivo al objeto FormData
      Object.entries(files.value).forEach(([fieldName, file]) => {
        if (file) {
          formData.append(fieldName, file);
        }
      });

      // Agregar otros datos relevantes si los tienes, por ejemplo, formData.append('nombre', 'valor');

      try {
        // Enviar la solicitud POST al servidor usando Axios (asegúrate de importar Axios)
        await axios.post('http://127.0.0.1:3000/api/upload', formData, {

        });

        // Aquí podrías mostrar un mensaje de éxito o realizar otras acciones después de cargar los archivos
        console.log('Archivos cargados exitosamente.');
      } catch (error) {
        // Manejo de errores
        console.error('Error al cargar los archivos:', error);
      }
    };

    const readAsBase64 = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          resolve(event.target.result);
        };
      });
    };

    return {
      onSubmit,
      credencial: ref(null),
      boleta: ref(null),
      comprobante: ref(null),
      compromiso: ref(null),
      conducta: ref(null),
      accept,
    };
  },
};
</script>

<style lang="scss" scoped>
.title{
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
