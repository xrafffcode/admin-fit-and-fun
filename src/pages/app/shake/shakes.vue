
<script setup>
import { ref, onBeforeMount } from 'vue'
import { useShakeStore } from '@/stores/shake'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { shakes, loading, success } = storeToRefs(useShakeStore())
const { fetchShakes, deleteShake } = useShakeStore()

fetchShakes()

async function handleDeleteShake(shake) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus Shake ini?')

  if (confirmed) {
    await deleteShake(shake.id)
    fetchShakes()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'List Shake'
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
        List Shake
      </h2>

      <VBtn
        v-if="can('shake-create')"
        :to="{ name: 'shake-create' }"
        color="primary"
      >
        Tambah Shake
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Shake"
        placeholder="Cari Shake"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="shakes"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              v-if="can('shake-edit')"
              :to="{ name: 'shake-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('shake-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteShake(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
