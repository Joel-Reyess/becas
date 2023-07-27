<template>
  <q-page :style-fn="myTweak" padding>
    <!-- Resto del código de la página de detalles -->
    <div class="q-pa-md">
      <div class="q-gutter-md container">
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="q-pt-lg">
            <q-card class="q-pa-md">
              <q-card-section>
                <div class="q-pa-md">
                  <!-- Mostrar los detalles del registro -->
                  <p class="q-mb-sm"><strong>Nombre:</strong> {{ formData && formData.nombre }}</p>
                  <p class="q-mb-sm"><strong>Matrícula:</strong> {{ formData && formData.matricula }}</p>
                  <p class="q-mb-sm"><strong>Telefono:</strong> {{ formData && formData.telefono }}</p>
                  <p class="q-mb-sm"><strong>Beca:</strong> {{ getBecaContent(formData && formData.idbeca) }}</p>
                  <p class="q-mb-sm"><strong>Carrera:</strong> {{ getCarreraContent(formData && formData.idcarrera) }}</p>
                  <p class="q-mb-sm"><strong>Area:</strong> {{ getAreaContent(formData && formData.idarea) }}</p>
                  <p class="q-mb-sm"><strong>Grado:</strong> {{ getGradoContent(formData && formData.idgrado) }}</p>
                  <p class="q-mb-sm"><strong>Cuatrimestre:</strong> {{ formData && formData.cuatrimestre }}</p>
                  <p class="q-mb-sm"><strong>Grupo:</strong> {{ formData && formData.grupo }}</p>
                  <p class="q-mb-sm"><strong>Correo tutor:</strong> {{ formData && formData.correotutor }}</p>
                  <p class="q-mb-sm"><strong>Genero:</strong> {{ getGeneroContent(formData && formData.idgenero) }}</p>
                  <p class="q-mb-sm"><strong>Estado:</strong> {{ formData && formData.idestado }}</p>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default{

  props: {
    idsolicitud: {
      type: String,
      required: true,
    },
  },
  setup (props) {



    const router = useRouter();

    const formData = ref(null);
    const carreras = ref([]);
    const areas = ref([]);
    const grados = ref([]);
    const generos = ref([]);
    const becas = ref([]);

    const getCarreraContent = (idcarrera) => {
          const carrera = carreras.value.find((c) => c.value === idcarrera);
          return carrera ? carrera.label : "";
        };
        const getAreaContent = (idarea) => {
          const area = areas.value.find((c) => c.value === idarea);
          return area ? area.label : "";
        };
        const getGradoContent = (idgrado) => {
          const grado = grados.value.find((c) => c.value === idgrado);
          return grado ? grado.label : "";
        };
        const getGeneroContent = (idgenero) => {
          const genero = generos.value.find((c) => c.value === idgenero);
          return genero ? genero.label : "";
        };
        const getBecaContent = (idbeca) => {
          const beca = becas.value.find((c) => c.value === idbeca);
          return beca ? beca.label : "";
        };


    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/carrera");
        const carreraData = response.data;
        if (carreraData && carreraData.length > 0) {
          carreras.value = carreraData.map((item) => {
            return {
              label: item.carrera,
              value: item.idcarrera,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/carrera");
        const carreraData = response.data;
        if (carreraData && carreraData.length > 0) {
          carreras.value = carreraData.map((item) => {
            return {
              label: item.carrera,
              value: item.idcarrera,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la carrera:", error);
      }
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/area");
        const areaData = response.data;
        if (areaData && areaData.length > 0) {
          areas.value = areaData.map((item) => {
            return {
              label: item.area,
              value: item.idarea,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener el area:", error);
      }

      try {
        const response = await axios.get("http://127.0.0.1:3000/api/grado");
        const gradoData = response.data;
        if (gradoData && gradoData.length > 0) {
          grados.value = gradoData.map((item) => {
            return {
              label: item.grado,
              value: item.idgrado,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener el grado:", error);
      }

        try {
        const response = await axios.get("http://127.0.0.1:3000/api/genero");
        const generoData = response.data;
        if (generoData && generoData.length > 0) {
          generos.value = generoData.map((item) => {
            return {
              label: item.genero,
              value: item.idgenero,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener el genero:", error);
      }

      try {
        const response = await axios.get("http://127.0.0.1:3000/api/becas/all");
        const becaData = response.data;
        if (becaData && becaData.length > 0) {
          becas.value = becaData.map((item) => {
            return {
              label: item.beca,
              value: item.idbeca,
            };
          });
        }
        console.log(response);
      } catch (error) {
        console.error("Error al obtener la beca:", error);
      }
    });

    onMounted(() => {
      if (props.idsolicitud) {
        // Realizar una solicitud al servidor para obtener los detalles del registro usando el ID recibido
        axios
          .get(`http://127.0.0.1:3000/api/solicitud/${props.idsolicitud}`)
          .then((response) => {
            formData.value = response.data;
          })
          .catch((error) => {
            console.error('Error al obtener los detalles del registro:', error);
            // Puedes manejar el error según tus necesidades (por ejemplo, mostrar un mensaje de error en la página).
          });
      }
    });

    onMounted(() => {
      // Cargar los datos de las becas
      axios.get('http://127.0.0.1:3000/api/becas/all')
        .then(response => {
          becas.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });

      // Cargar los datos de las carreras
      axios.get('http://127.0.0.1:3000/api/carrera')
        .then(response => {
          carreras.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las carreras:', error);
        });

      // Cargar los datos de las áreas
      axios.get('http://127.0.0.1:3000/api/area')
        .then(response => {
          areas.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las áreas:', error);
        });

      // Cargar los datos de los grados
      axios.get('http://127.0.0.1:3000/api/grado')
        .then(response => {
          grados.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los grados:', error);
        });

      // Cargar los datos de los géneros
      axios.get('http://127.0.0.1:3000/api/genero')
        .then(response => {
          generos.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los géneros:', error);
        });
    });

    // Función para obtener el nombre correspondiente a un ID desde la lista
    function getNombreFromId(id, lista) {
      const item = lista.value.find(item => item.id === id);
      return item ? item.nombre : '';
    }

    return {
      formData,
      getCarreraContent,
      getAreaContent,
      getGradoContent,
      getGeneroContent,
      getBecaContent,
    };

  }

};

</script>

<style lang="scss" scoped>

</style>
