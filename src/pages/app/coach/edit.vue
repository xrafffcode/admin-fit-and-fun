<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useCoachStore } from '@/stores/coach'

const route = useRoute()

const { loading, error } = storeToRefs(useCoachStore())
const { fetchCoach, updateCoach } = useCoachStore()

const coachId = route.params.id

const coach = ref({
  id: coachId,
  name: '',
  email: '',
  password: '',
  phone_number: '',
  id_herbalife: '',
})

const fetchCoachData = async () => {
  try {
    const data = await fetchCoach(coachId)

    coach.value = {
      id: data.id,
      name: data.name,
      email: data.user.email,
      phone_number: data.phone_number,
      id_herbalife: data.id_herbalife,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Coach'
  fetchCoachData()
})

const handleSubmit = () => {
  updateCoach(coach.value)
}

const handleReset = () => {
  fetchCoachData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Coach
      </h2>

      <VBtn
        :to="{ name: 'coaches' }"
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
                v-model="coach.name"
                label="Name"
                placeholder="Coach Name"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="coach.email"
                label="Email"
                placeholder="Coach Email"
                :error-messages="error && error.email ? [error.email] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="coach.password"
                label="Password"
                placeholder="Coach Password"
                :error-messages="error && error.password ? [error.password] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="coach.phone_number"
                label="Phone Number"
                placeholder="0812345678"
                :error-messages="error && error.phone_number ? [error.phone_number] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="coach.id_herbalife"
                label="ID Herbalife"
                placeholder="Coach ID Herbalife"
                :error-messages="error && error.id_herbalife ? [error.id_herbalife] : []"
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
