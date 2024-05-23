<script setup>
import { ref, onBeforeMount } from 'vue'
import { useAdminStore } from '@/stores/admin'
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
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { admins, loading, success } = storeToRefs(useAdminStore())
const { fetchAdmins, deleteAdmin } = useAdminStore()

fetchAdmins()

async function handleDeleteAdmin(admin) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus admin ini?')

  if (confirmed) {
    await deleteAdmin(admin.id)
    fetchAdmins()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'List Admin'
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
        List Admin
      </h2>

      <VBtn
        v-if="can('admin-create')"
        :to="{ name: 'admin-create' }"
        color="primary"
      >
        Tambah Admin
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Admin"
        placeholder="Cari Admin"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="admins"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              v-if="can('admin-edit')"
              :to="{ name: 'admin-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('admin-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteAdmin(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
