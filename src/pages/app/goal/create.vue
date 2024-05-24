<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useGoalStore } from '@/stores/goal'

const { loading, error } = storeToRefs(useGoalStore())
const { createGoal } = useGoalStore()

const goal = ref({
  name: '',
  description: '',
})

const handleReset = () => {
  goal.value = {
    name: '',
    description: '',
  }
}

const handleSubmit = () => {
  createGoal(goal.value)
}

onBeforeMount(() => {
  document.title = 'Add Goal'

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
        Add Goal
      </h2>

      <VBtn
        :to="{ name: 'goals' }"
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
                v-model="goal.name"
                label="Name"
                placeholder="Goal Name"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="goal.description"
                label="Description"
                placeholder="Goal Description"
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
