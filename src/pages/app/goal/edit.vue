<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useGoalStore } from '@/stores/goal'
import { handleFileChange } from '@/helpers/fileHelper'

const route = useRoute()

const { loading, error } = storeToRefs(useGoalStore())
const { fetchGoal, updateGoal } = useGoalStore()

const goalId = route.params.id

const goal = ref({
  id: goalId,
  image: null,
  image_name: '',
  image_url: '',
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
      image: null,
      image_name: '',
      image_url: data.image_url,
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

const onFileChange = e => {
  handleFileChange(e, goal.value, 'image')

  goal.value.image_url = URL.createObjectURL(e.target.files[0])
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
              <VImg
                v-if="goal.image_url"
                :src="goal.image_url"
                width="100"
                height="auto"
                class="mb-4"
              />

              <VFileInput
                v-model="goal.image_name"
                label="Image"
                placeholder="Choose an image"
                accept="image/*"
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
