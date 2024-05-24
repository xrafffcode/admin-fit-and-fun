
<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onMounted, onBeforeMount, ref } from 'vue'
import { useShakeStore } from '@/stores/shake'

const route = useRoute()

const { loading, error } = storeToRefs(useShakeStore())
const { fetchShake, updateShake } = useShakeStore()

const shakeId = route.params.id

const shake = ref({
  id: shakeId,
  name: '',
  description: '',
})

const fetchShakeData = async () => {
  try {
    const data = await fetchShake(shakeId)

    shake.value = {
      id: data.id,
      name: data.name,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Shake'
  fetchShakeData()
})

const handleSubmit = () => {
  updateShake(shake.value)
}

const handleReset = () => {
  fetchshakeData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Shake
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
                :disabled="loading"
                :loading="loading"
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
