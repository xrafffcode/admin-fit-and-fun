<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Permission
      </h2>

      <VBtn
        :to="{ name: 'permissions' }"
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
                v-model="permission.name"
                label="Nama"
                placeholder="Nama Permission"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
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

<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onMounted, onBeforeMount, ref } from 'vue'
import { usePermissionStore } from '@/stores/permission'

const route = useRoute()

const { loading, error } = storeToRefs(usePermissionStore())
const { fetchPermission, updatePermission } = usePermissionStore()

const permissionId = route.params.id

const permission = ref({
  id: permissionId,
  name: '',
})

const fetchPermissionData = async () => {
  try {
    const data = await fetchPermission(permissionId)

    permission.value = {
      id: data.id,
      name: data.name,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Permission'
  fetchPermissionData()
})

const handleSubmit = () => {
  updatePermission(permission.value)
}

const handleReset = () => {
  fetchPermissionData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
