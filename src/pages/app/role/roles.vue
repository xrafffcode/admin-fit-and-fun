<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoleStore } from '@/stores/role'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Permissions',
    value: 'permissions',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { roles, loading, success } = storeToRefs(useRoleStore())
const { fetchRoles, deleteRole } = useRoleStore()

fetchRoles()

async function handleDeleteRole(role) {
  const confirmed = confirm('Delete this role?')
  if (confirmed) {
    await deleteRole(role.id)
    fetchRoles()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'Roles'
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
        Roles List
      </h2>

      <VBtn
        v-if="can('role-create')"
        :to="{ name: 'role-create' }"
        color="primary"
      >
        Add Role
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Search role"
        placeholder="Search role"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="roles"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-permissions="item">
            <span v-if="item.permissions.length === 0">
              No Permissions Available
            </span>
            <span v-else>
              {{ item.permissions.length }} Permissions
            </span>
          </template>
          <template #item-operation="item">
            <VBtn
              v-if="can('role-edit')"
              :to="{ name: 'role-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Edit
            </VBtn>
            <VBtn
              v-if="can('role-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteRole(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
