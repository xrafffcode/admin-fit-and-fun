<script setup>
import { ref, onBeforeMount } from 'vue'
import { useMemberStore } from '@/stores/member'
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

const { members, loading, success } = storeToRefs(useMemberStore())
const { fetchMembers, deleteMember } = useMemberStore()

fetchMembers()

async function handleDeleteMember(permission) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus permission ini?')

  if (confirmed) {
    await deleteMember(permission.id)
    fetchMembers()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'Members'
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
        Members
      </h2>

      <VBtn
        v-if="can('permission-create')"
        :to="{ name: 'permission-create' }"
        color="primary"
      >
        Tambah Permission
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Permission"
        placeholder="Cari Permission"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="permissions"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              v-if="can('permission-edit')"
              :to="{ name: 'permission-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('permission-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeletePermission(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
