<script setup>
import { ref, onBeforeMount } from 'vue'
import { useTestimonialStore } from '@/stores/testimonial'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Avatar',
    value: 'image',
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Job',
    value: 'job',
  },
  {
    text: 'Testimoni',
    value: 'testimonial',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { testimonials, loading, success } = storeToRefs(useTestimonialStore())
const { fetchTestimonials, deleteTestimonial } = useTestimonialStore()

fetchTestimonials()

async function handleDeleteTestimonial(testimonial) {
  const confirmed = confirm('Delete this testimoni?')
  if (confirmed) {
    await deleteTestimonial(testimonial.id)
    fetchTestimonials()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'Testimonis'
})
</script>

<template>
  <VDialog
    v-if="success"
    v-model="success"
    max-width="400"
  >
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          text
          @click="() => (success = null)"
        >
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Testimonial List
      </h2>

      <VBtn
        v-if="can('testimonial-create')"
        :to="{ name: 'testimonial-create' }"
        color="primary"
      >
        Add Testimonial
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Search Testimoni"
        placeholder="Search Testimoni"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="testimonials"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-image="item">
            <VImg
              :src="item.image_url"
              width="100"
              height="100"
              contain
            />
          </template>

          <template #item-time="item">
            {{ formatDateTime(item.time) }}
          </template>
          
          <template #item-operation="item">
            <VBtn
              v-if="can('testimonial-edit')"
              :to="{ name: 'testimonial-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Edit
            </VBtn>
            <VBtn
              v-if="can('testimonial-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteTestimonial(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
