<script setup>
import { ref, onBeforeMount } from 'vue'
import { useTestimoniStore } from '@/stores/testimoni'
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
    value: 'testimoni',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { testimonis, loading, success } = storeToRefs(useTestimoniStore())
const { fetchTestimonis, deleteTestimoni } = useTestimoniStore()

fetchTestimonis()

async function handleDeleteTestimoni(testimoni) {
  const confirmed = confirm('Delete this testimoni?')
  if (confirmed) {
    await deleteTestimoni(testimoni.id)
    fetchTestimonis()
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
        Testimonis List
      </h2>

      <VBtn
        v-if="can('testimoni-create')"
        :to="{ name: 'testimoni-create' }"
        color="primary"
      >
        Add Testimoni
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
          :items="testimonis"
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
              v-if="can('testimoni-edit')"
              :to="{ name: 'testimoni-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Edit
            </VBtn>
            <VBtn
              v-if="can('testimoni-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteTestimoni(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
