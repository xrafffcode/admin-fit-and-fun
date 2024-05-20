<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useRoleStore } from '@/stores/role'
import { usePermissionStore } from '@/stores/permission'

const { loading, error } = storeToRefs(useRoleStore())
const { createRole } = useRoleStore()

const { permissions } = storeToRefs(usePermissionStore())
const { fetchPermissions } = usePermissionStore()

const role = ref({
  name: '',
  permissions: [],
})

const handleReset = () => {
  role.value = {
    name: '',
    permissions: [],
  }
}

const handleSubmit = () => {
  createRole(role.value)
}

onBeforeMount(() => {
  document.title = 'Tambah Role'
  fetchPermissions()
  handleReset()
  error.value = null
})
</script>


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Role
      </h2>

      <VBtn
        :to="{ name: 'roles' }"
        color="primary"
      >
        Kembali
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
                label="Nama"
                placeholder="Nama Example"
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
                label="Permissions"
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
                Simpan
              </VBtn>

              <VBtn
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
