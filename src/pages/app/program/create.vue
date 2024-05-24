<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useProgramStore } from '@/stores/program'
import { useCoachStore } from '@/stores/coach'

const { loading, error } = storeToRefs(useProgramStore())
const { createProgram } = useProgramStore()

const { coaches } = storeToRefs(useCoachStore())
const { fetchCoaches } = useCoachStore()

const program = ref({
  name: '',
  description: '',
  time: '',
  slot: '',
  coach_id: '',
})

const handleReset = () => {
  program.value = {
    name: '',
    description: '',
    time: '',
    slot: '',
    coach_id: '',
  }
}

const handleSubmit = () => {
  createProgram(program.value)
}

onBeforeMount(() => {
  document.title = 'Add Program'
  fetchCoaches()
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
        Add Program
      </h2>

      <VBtn
        :to="{ name: 'programs' }"
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
                v-model="program.name"
                label="Name"
                placeholder="Program Name"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="program.description"
                label="Description"
                placeholder="Program Description"
                :error-messages="error && error.description ? [error.description] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="program.time"
                label="Date & Time"
                :error-messages="error && error.time ? [error.time] : []"
                type="datetime-local"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="program.slot"
                label="Capacity Limit"
                placeholder="Program Capacity Limit"
                :error-messages="error && error.slot ? [error.slot] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="program.coach_id"
                :items="coaches"
                label="Select Coach"
                item-title="name"
                item-value="id"
                :error-messages="error && error.coach_id ? [error.coach_id] : []"
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
