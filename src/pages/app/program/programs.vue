<script setup>
import { ref, onBeforeMount } from 'vue'
import { useProgramStore } from '@/stores/program'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Description',
    value: 'description',
  },
  {
    text: 'Time',
    value: 'time',
  },
  {
    text: 'Slot',
    value: 'slot',
  },
  {
    text: 'Coach',
    value: 'coach.id',
    width: 300,
  },
]

const { programs, loading, success } = storeToRefs(useProgramStore())
const { fetchPrograms, deleteProgram } = useProgramStore()

fetchPrograms()

async function handleDeleteProgram(program) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus program ini?')

  if (confirmed) {
    await deleteProgram(program.id)
    fetchPrograms()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'List Program'
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
          Tutup
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
        List Program
      </h2>

      <VBtn
        v-if="can('program-create')"
        :to="{ name: 'program-create' }"
        color="primary"
      >
        Tambah Program
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Program"
        placeholder="Cari Program"
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
          <template #item-operation="item">
            <VBtn
              v-if="can('program-edit')"
              :to="{ name: 'program-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('program-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteProgram(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
