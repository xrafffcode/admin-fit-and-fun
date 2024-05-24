<script setup>
import { ref, onBeforeMount } from 'vue'
import { usePermissionStore } from '@/stores/permission'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { permissions, loading, success } = storeToRefs(usePermissionStore())
const { fetchPermissions, deletePermission } = usePermissionStore()

fetchPermissions()

async function handleDeletePermission(permission) {
  const confirmed = confirm('Delete this permission?')
  if (confirmed) {
    await deletePermission(permission.id)
    fetchPermissions()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'Permissions'
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
        Permissions List
      </h2>

      <VBtn
        v-if="can('permission-create')"
        :to="{ name: 'permission-create' }"
        color="primary"
      >
        Add Permission
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Search Permission"
        placeholder="Search Permission"
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
              Edit
            </VBtn>
            <VBtn
              v-if="can('permission-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeletePermission(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
