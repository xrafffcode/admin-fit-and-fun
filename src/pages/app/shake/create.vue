<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useShakeStore } from '@/stores/shake'

const { loading, error } = storeToRefs(useShakeStore())
const { createShake } = useShakeStore()

const shake = ref({
  name: '',
})

const handleReset = () => {
  shake.value = {
    name: '',
  }
}

const handleSubmit = () => {
  createShake(shake.value)
}

onBeforeMount(() => {
  document.title = 'Add Shake'

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
        Add Shake
      </h2>

      <VBtn
        :to="{ name: 'shakes' }"
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
                v-model="shake.name"
                label="Name"
                placeholder="Shake Name"
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
