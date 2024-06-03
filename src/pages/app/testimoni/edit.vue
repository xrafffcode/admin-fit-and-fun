<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useTestimoniStore } from '@/stores/testimoni'
import { handleFileChange } from '@/helpers/fileHelper'

const route = useRoute()

const { loading, error } = storeToRefs(useTestimoniStore())
const { fetchTestimoni, updateTestimoni } = useTestimoniStore()

const testimoniId = route.params.id

const testimoni = ref({
  id: testimoniId,
  image: null,
  image_name: '',
  image_url: '',
  name: '',
  job: '',
  testimoni: '',
})

const fetchTestimoniData = async () => {
  try {
    const data = await fetchTestimoni(testimoniId)

    testimoni.value = {
      id: data.id,
      image: null,
      image_name: '',
      image_url: data.image_url,
      name: data.name,
      job: data.job,
      testimoni: data.testimoni,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Testimoni'
  fetchTestimoniData()
})

const handleSubmit = () => {
  updateTestimoni(testimoni.value)
}

const onFileChange = e => {
  handleFileChange(e, testimoni.value, 'image')

  testimoni.value.image_url = URL.createObjectURL(e.target.files[0])
}

const handleReset = () => {
  fetchTestimoniData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Testimoni
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
              <VImg
                v-if="testimoni.image_url"
                :src="testimoni.image_url"
                width="100"
                height="auto"
                class="mb-4"
              />

              <VFileInput
                v-model="testimoni.image_name"
                label="Avatar"
                placeholder="Choose an avatar"
                accept="image/*"
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
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="testimoni.job"
                label="Job"
                placeholder="Sender Job"
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
