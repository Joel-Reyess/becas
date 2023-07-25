<template>
  <p class="titulo">Inicio</p>
  <div class="q-pa-md-container">
    <div class="q-pa-md">
    <q-btn-dropdown
      color="secondary"
      class="buttoms"
      text-color="black"
      label="Becas"
      v-model="selectedBeca"
    >
      <q-list>
        <!-- Mostrar las opciones de becas desde la lista obtenida del servidor -->
        <q-item v-for="beca in becas" :key="beca.idbeca" clickable v-close-popup @click="onItemClick(beca.beca)">
          <q-item-section>
            <q-item-label>{{ beca.beca }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
          <div class="q-pa-md">
            <q-btn-dropdown
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Carrera"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="q-pa-md">
            <q-btn-dropdown
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Area"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="q-pa-md">
            <q-btn-dropdown
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Grado"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="q-pa-md">
            <q-btn-dropdown
              color="secondary"
              class="buttoms"
              text-color="black"
              label="Genero"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
</div>
<div class="q-pa-md">
    <q-table
      flat bordered
      title="Solicitudes"
      :rows="data"
      :columns="columns"
      color="primary"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>

</template>

<script>
import { defineComponent,ref, onMounted } from "vue";
import { exportFile, useQuasar } from 'quasar';
import BotonesFil from "src/components/Admin/BotonesFil.vue";
import axios from "axios";
import { computed } from "vue";

const columns = [
  {
    name: 'nombre',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: row => row.nombre,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'beca', align: 'center', label: 'Beca', field: 'beca', sortable: true },
  { name: 'carrera', label: 'Carrera', field: 'carrera', sortable: true },
  { name: 'area', label: 'Área', field: 'area' },
  { name: 'grado', label: 'Grado', field: 'grado' },
  { name: 'genero', label: 'Género', field: 'genero' }
];


function wrapCsvValue (val, formatFn, row) {
  let formatted = formatFn !== void 0
    ? formatFn(val, row)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}
function isActiveButton(route) {
      return currentRoute.value === route;
    }

export default {
  components: {
  },
  setup () {
    const data = ref([]);
    const $q = useQuasar()
    const selectedBeca = ref(null);
    const becas = ref([]);

    const filteredData = computed(() => {
      if (!selectedBeca.value) {
        return data.value;
      } else {
        return data.value.filter((item) => item.beca === selectedBeca.value);
      }
    });
    
    function onItemClick(selectedItem) {
      selectedBeca.value = selectedItem;
    }

    // Realizar una solicitud al servidor para obtener la lista de becas
    onMounted(() => {
      axios.get('http://127.0.0.1:3000/api/becas/all')
        .then(response => {
          becas.value = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las becas:', error);
        });
    });

    function onItemClick(selectedItem) {
      selectedBeca.value = selectedItem;
    }

    axios.get('http://127.0.0.1:3000/api/columns')
      .then(response => {
        data.value = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

    return {
      columns,
      data,
      selectedBeca,
      filteredData,
      onItemClick,
      becas,

      exportTable () {
        // naive encoding to csv format
        const content = [columns.map(col => wrapCsvValue(col.label))].concat(
          data.value.map(row => columns.map(col => wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format,
            row
          )).join(','))
        ).join('\r\n')

        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )

        if (status !== true) {
          $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.titulo{
  color: #1ab192;
    text-transform: uppercase;
    line-height: 40px;
    font-size: 1.9em;
    text-align: center;
}
</style>
