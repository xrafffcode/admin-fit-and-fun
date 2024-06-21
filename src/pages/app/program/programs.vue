<script setup>
import { ref, onBeforeMount } from 'vue'
import { useProgramStore } from '@/stores/program'
import { can } from '@/helpers/permissionHelper'
import { formatDateTime } from '@/@core/utils/formatters'

const headers = [
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Description',
    value: 'description',
    width: 300,
  },
  {
    text: 'Date & Time',
    value: 'time',
    width: 150,
  },
  {
    text: 'Capacity Limit',
    value: 'slot',
    width: 150,
  },
  {
    text: 'Coach',
    value: 'coach.name',
  },
  {
    text: 'Action',
    value: 'operation',
    sortable: false,
  },
]

const { programs, loading, success } = storeToRefs(useProgramStore())
const { fetchPrograms, deleteProgram } = useProgramStore()

fetchPrograms()

async function handleDeleteProgram(program) {
  const confirmed = confirm('Delete this exercise?')
  if (confirmed) {
    await deleteProgram(program.id)
    fetchPrograms()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'Exercises'
})
</script>

<template>
  <VDialog
    v-if="success"
    v-model="success"
    max-width="400"
  >
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          text
          @click="() => (success = null)"
        >
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Exercises List
      </h2>

      <VBtn
        v-if="can('program-create')"
        :to="{ name: 'program-create' }"
        color="primary"
      >
        Add Exercise
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Search Exercise"
        placeholder="Search Exercise"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="programs"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-time="item">
            {{ formatDateTime(item.time) }}
          </template>
          <template #item-operation="item">
            <VBtn
              v-if="can('program-edit')"
              :to="{ name: 'program-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Edit
            </VBtn>
            <VBtn
              v-if="can('program-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteProgram(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
