<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useGoalStore } from '@/stores/goal'
import { handleFileChange } from '@/helpers/fileHelper'

const { loading, error } = storeToRefs(useGoalStore())
const { createGoal } = useGoalStore()

const goal = ref({
  image: null,
  imageName: '',
  name: '',
  description: '',
})

const handleReset = () => {
  goal.value = {
    image: null,
    imageName: '',
    name: '',
    description: '',
  }
}

const onFileChange = e => {
  handleFileChange(e, goal.value, 'image')
}

const handleSubmit = () => {
  createGoal(goal.value)
}

onBeforeMount(() => {
  document.title = 'Add Program'

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
              <VFileInput
                v-model="goal.imageName"
                label="Image"
                placeholder="Choose Image"
                :error-messages="error && error.image ? [error.image] : []"
                @change="onFileChange"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="goal.name"
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
