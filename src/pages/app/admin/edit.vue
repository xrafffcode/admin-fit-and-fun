<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useAdminStore } from '@/stores/admin'

const route = useRoute()

const { loading, error } = storeToRefs(useAdminStore())
const { fetchAdmin, updateAdmin } = useAdminStore()

const adminId = route.params.id

const admin = ref({
  id: adminId,
  name: '',
  email: '',
  password: '',
})

const fetchAdminData = async () => {
  try {
    const data = await fetchAdmin(adminId)

    admin.value = {
      id: data.id,
      name: data.name,
      email: data.user.email,
      password: data.password,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Admin'
  fetchAdminData()
})

const handleSubmit = () => {
  updateAdmin(admin.value)
}

const handleReset = () => {
  fetchAdminData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Admin
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
