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
  document.title = 'Add Admin'

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
        Add Admin
      </h2>

      <VBtn
        :to="{ name: 'admins' }"
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
                v-model="admin.name"
                label="Name"
                placeholder="Admin Name"
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
                placeholder="Admin Email"
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
                placeholder="Admin Password"
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
                Save
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
