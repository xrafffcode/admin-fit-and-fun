<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useTestimonialStore } from '@/stores/testimonial'
import { handleFileChange } from '@/helpers/fileHelper'

const route = useRoute()

const { loading, error } = storeToRefs(useTestimonialStore())
const { fetchTestimonial, updateTestimonial } = useTestimonialStore()

const testimonialId = route.params.id

const testimonial = ref({
  id: testimonialId,
  image: null,
  image_name: '',
  image_url: '',
  name: '',
  job: '',
  testimonial: '',
})

const fetchTestimonialData = async () => {
  try {
    const data = await fetchTestimonial(testimonialId)

    testimonial.value = {
      id: data.id,
      image: null,
      image_name: '',
      image_url: data.image_url,
      name: data.name,
      job: data.job,
      testimonial: data.testimonial,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Testimonial'
  fetchTestimonialData()
})

const handleSubmit = () => {
  updateTestimonial(testimonial.value)
}

const onFileChange = e => {
  handleFileChange(e, testimonial.value, 'image')

  testimonial.value.image_url = URL.createObjectURL(e.target.files[0])
}

const handleReset = () => {
  fetchTestimonialData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Testimonial
      </h2>

      <VBtn
        :to="{ name: 'testimonials' }"
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
                v-if="testimonial.image_url"
                :src="testimonial.image_url"
                width="100"
                height="auto"
                class="mb-4"
              />

              <VFileInput
                v-model="testimonial.image_name"
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
                v-model="testimonial.name"
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
                v-model="testimonial.job"
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
                v-model="testimonial.testimonial"
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
