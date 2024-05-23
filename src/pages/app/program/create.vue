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
  document.title = 'Tambah Program'
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
        Tambah Program
      </h2>

      <VBtn
        :to="{ name: 'programs' }"
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
                v-model="program.name"
                label="Nama"
                placeholder="Nama Program"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="program.description"
                label="Description"
                placeholder="Description Program"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="program.time"
                label="Time"
                placeholder="Time Program"
                :error-messages="error && error.name ? [error.name] : []"
                type="datetime-local"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="program.slot"
                label="Slot"
                placeholder="Slot Program"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="program.coaches"
                :items="coaches"
                label="Coaches"
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
