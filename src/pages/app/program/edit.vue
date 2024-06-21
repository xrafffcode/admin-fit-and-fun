<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { formatDateToISO } from '@/@core/utils/formatters'
import { useProgramStore } from '@/stores/program'

const route = useRoute()

const { loading, error } = storeToRefs(useProgramStore())
const { fetchProgram, updateProgram } = useProgramStore()

const programId = route.params.id

const program = ref({
  id: programId,
  name: '',
  description: '',
  time: '',
  slot: '',
})

const fetchProgramData = async () => {
  try {
    const data = await fetchProgram(programId)

    program.value = {
      id: data.id,
      name: data.name,
      description: data.description,
      time: formatDateToISO(data.time),
      slot: data.slot,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Exercise'
  fetchProgramData()
})

const handleSubmit = () => {
  updateProgram(program.value)
}


const handleReset = () => {
  fetchProgramData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Program
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
