<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useAdminStore } from '@/stores/admin'

const { loading, error } = storeToRefs(useAdminStore())
const { createAdmin } = useAdminStore()

const admin = ref({
  name: '',
  email: '',
})

const handleReset = () => {
  admin.value = {
    name: '',
    email: '',
  }
}

const handleSubmit = () => {
  createAdmin(admin.value)
}

onBeforeMount(() => {
  document.title = 'Tambah Admin'

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
        Tambah Admin
      </h2>

      <VBtn
        :to="{ name: 'admins' }"
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
                v-model="admin.name"
                label="Nama"
                placeholder="Nama Admin"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="admin.email"
                label="Email"
                placeholder="Email Admin"
                :error-messages="error && error.email ? [error.email] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="admin.password"
                label="Password"
                placeholder="Password Admin"
                :error-messages="error && error.password ? [error.password] : []"
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
