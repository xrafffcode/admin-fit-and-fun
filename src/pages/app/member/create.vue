<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { usePermissionStore } from '@/stores/permission'

const { loading, error } = storeToRefs(usePermissionStore())
const { createPermission } = usePermissionStore()


const permission = ref({
  name: '',
})

const handleReset = () => {
  permission.value = {
    name: '',
  }
}

const handleSubmit = () => {
  createPermission(permission.value)
}

onBeforeMount(() => {
  document.title = 'Tambah Permission'

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
        Tambah Permission
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
                placeholder="Nama Example"
                :error-messages="error && error.name ? [error.name] : []"
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
