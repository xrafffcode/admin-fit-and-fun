<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onMounted, onBeforeMount, ref } from 'vue'
import { useGoalStore } from '@/stores/goal'

const route = useRoute()

const { loading, error } = storeToRefs(useGoalStore())
const { fetchGoal, updateGoal } = useGoalStore()

const goalId = route.params.id

const goal = ref({
  id: goalId,
  name: '',
  description: '',
})

const fetchGoalData = async () => {
  try {
    const data = await fetchGoal(goalId)

    goal.value = {
      id: data.id,
      name: data.name,
      description: data.description,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Program'
  fetchGoalData()
})

const handleSubmit = () => {
  updateGoal(goal.value)
}

const handleReset = () => {
  fetchGoalData()
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
                placeholder="Program Name"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="goal.description"
                label="Description"
                placeholder="Program Description"
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
