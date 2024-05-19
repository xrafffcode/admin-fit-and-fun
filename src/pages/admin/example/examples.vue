<script setup>
import { useClientStore } from '@/stores/client'

const headers = [
  {
    text: 'Kode',
    value: 'code',
    width: 100,
  },
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Alamat',
    value: 'address',
  },
  {
    text: 'Telepon',
    value: 'phone',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { clients, loading, error, success } = storeToRefs(useClientStore())
const { fetchClients, deleteClient, activateClient } = useClientStore()

fetchClients()

async function handleDeleteClient(client) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus client ini?')

  if (confirmed) {
    await deleteClient(client.id)
    fetchClients()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Client'
})

onUnmounted(() => {
  error.value = null
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
        Client
      </h2>

      <VBtn
        to="/admin/client/create"
        color="primary"
      >
        Tambah Client
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Client"
        placeholder="Cari Client"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="clients"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              :to="{ name: 'admin-client-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              :to="{ name: 'admin-client-view', params: { id: item.id } }"
              color="info"
              size="small"
            >
              Detail
            </VBtn>
            <VBtn
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteClient(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
@/stores/example
