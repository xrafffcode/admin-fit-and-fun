<script setup>
import { ref, onBeforeMount } from 'vue'
import { useCoachStore } from '@/stores/coach'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Email',
    value: 'user.email',
  },
  {
    text: 'Nomor Handphone',
    value: 'phone_number',
  },
  {
    text: 'ID Herbalife',
    value: 'id_herbalife',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { coaches, loading, success } = storeToRefs(useCoachStore())
const { fetchCoaches, deleteCoach } = useCoachStore()

fetchCoaches()

async function handleDeleteCoach(coach) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus coach ini?')

  if (confirmed) {
    await deleteCoach(coach.id)
    fetchCoaches()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'List Coach'
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
        List Coach
      </h2>

      <VBtn
        v-if="can('coach-create')"
        :to="{ name: 'coach-create' }"
        color="primary"
      >
        Tambah Coach
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Coach"
        placeholder="Cari Coach"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="coaches"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              v-if="can('coach-edit')"
              :to="{ name: 'coach-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('coach-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteCoach(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
