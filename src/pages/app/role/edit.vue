<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useRoleStore } from '@/stores/role'
import { usePermissionStore } from '@/stores/permission'

const route = useRoute()

const { loading, error } = storeToRefs(useRoleStore())
const { fetchRole, updateRole } = useRoleStore()

const { permissions } = storeToRefs(usePermissionStore())
const { fetchPermissions } = usePermissionStore()

const roleId = route.params.id

const role = ref({
  id: roleId,
  name: '',
  permissions: [],
})

const fetchRoleData = async () => {
  try {
    const data = await fetchRole(roleId)

    role.value = {
      id: data.id,
      name: data.name,
      permissions: data.permissions.map(permission => permission.id),
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit role'
  fetchPermissions()
  fetchRoleData()
})

const handleSubmit = () => {
  updateRole(role.value)
}

const handleReset = () => {
  fetchRoleData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Role
      </h2>

      <VBtn
        :to="{ name: 'roles' }"
        color="primary"
      >
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="role.name"
                label="Name"
                placeholder="Role Name"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="role.permissions"
                :items="permissions"
                label="Choose Permissions"
                multiple
                item-title="name"
                item-value="id"
                :error-messages="error && error.permissions ? [error.permissions] : []"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                :loading="loading"
                color="primary"
              >
                Save
              </VBtn>

              <VBtn
                type="reset"
                color="secondary"
                variant="tonal"
                @click="handleReset"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
