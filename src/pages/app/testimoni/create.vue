<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useTestimoniStore } from '@/stores/testimoni'
import { handleFileChange } from '@/helpers/fileHelper'

const { loading, error } = storeToRefs(useTestimoniStore())
const { createTestimoni } = useTestimoniStore()

const testimoni = ref({
  image: null,
  imageName: '',
  name: '',
  job: '',
  testimoni: '',
})

const handleReset = () => {
  testimoni.value = {
    image: null,
    imageName: '',
    name: '',
    job: '',
    testimoni: '',
  }
}

const onFileChange = e => {
  handleFileChange(e, testimoni.value, 'image')
}

const handleSubmit = () => {
  createTestimoni(testimoni.value)
}

onBeforeMount(() => {
  document.title = 'Add Testimoni'

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
        Add Testimoni
      </h2>

      <VBtn
        :to="{ name: 'testimonis' }"
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
                v-model="testimoni.imageName"
                label="Avatar"
                placeholder="Choose Avatar"
                :error-messages="error && error.image ? [error.image] : []"
                @change="onFileChange"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="testimoni.name"
                label="Name"
                placeholder="Sender Name"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="testimoni.job"
                label="Job"
                placeholder="Sender Job"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="testimoni.testimoni"
                label="Testimoni"
                placeholder="Testimoni Message"
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
